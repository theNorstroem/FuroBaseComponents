import {FBP} from './fbp.js';
import "./empty-fbp-node"

/**
 * `flow-repeat`
 *
 * Custom element to repeat Arrays
 *
 *
 * @summary Custom element to allow using FBPs template features in repeated template
 *
 * @polymer
 * @customElement
 * @demo demo/flow-bind.html
 * @mixes FBP
 */
class FlowRepeat extends HTMLTemplateElement {
    constructor() {
        super();
        this.template;
        this._insertedItems = [];
    }

    /**
     * Clear the list
     */
    clear() {
        this.injectItems([])
    }

    /**
     * Triggers the wire --itemSelected on selected item and --itemDeSelected on last selected Item
     * @param index
     */
    select(index) {
        if (this._insertedItems[index]) {

            // deselect the last selected
            if (this.selectedIndex !== undefined) {
                this.deselect(this.selectedIndex);
            }

            this._insertedItems[index].virtualElement._FBPTriggerWire("--itemSelected");
            this.selectedIndex = index;
        }
    }

    /**
     * select Next index
     *
     */
    selectNextIndex() {
        let i = this.selectedIndex + 1;
        // loop around
        if (!this._insertedItems[i]) {
            i = 0;
        }
        this.select(i);
    }

    selectPreviousIndex() {
        let i = this.selectedIndex - 1;
        // loop around
        if (i < 0) {
            i = this._insertedItems.length - 1;
        }
        this.select(i);
    }

    triggerSelected(data) {
        this.triggerIndex(this.selectedIndex, data)
    }

    // trigger all nodes
    triggerAll(data){
        for(let i = 0; i < this._insertedItems.length;i++){
            this.triggerIndex(i,data);
        }
    }
    /**
     * Triggers the wire --itemDeSelected on last selected item
     */
    deselect() {
        if (this.selectedIndex !== undefined && this._insertedItems[this.selectedIndex]) {
            this._insertedItems[this.selectedIndex].virtualElement._FBPTriggerWire("--itemDeSelected");
            this.selectedIndex = undefined;
        }
    }


    _findFirstHost(parent) {
        if (parent && parent.host) {
            return parent.host;
        }
        if (parent === null) {
            return null
        }
        return this._findFirstHost(parent.parentNode);
    }

    injectItems(items) {
        if (!Array.isArray(items)) {
            console.info("Items is not an array ", items, this);
            // make the list empty
            items = [];
        }

        this._firstHost = this._findFirstHost(this.parentNode);
        items.forEach((e, i, a) => {
            // build hidden elem
            let elem = document.createElement('empty-fbp-node');
            elem.attachShadow({mode: 'open'});
            elem.shadowRoot.appendChild(this.template.cloneNode(true));
            elem._appendFBP(elem.shadowRoot);

            let handle = {virtualElement: elem, children: [].slice.call(elem.shadowRoot.children)};

            // remove old entries
            if (this._insertedItems[i]) {
                this._insertedItems[i].children.map((attachedElem) => {
                    attachedElem.remove()
                })
            }

            this._insertedItems[i] = handle;

            this.parentNode.insertBefore(elem.shadowRoot, this);

            // set item and index value on created element
            elem.item = e;
            elem.index = i;


            // trigger wires
            elem._FBPTriggerWire(this._internalWire, {item: e, index: i});
            if (i === 0) {
                elem._FBPTriggerWire("--firstItem", e);
            }

            if (i === a.length - 1) {
                elem._FBPTriggerWire("--lastItem", e);
            }

            elem._FBPTriggerWire("--item", e);
            elem._FBPTriggerWire("--host", this._firstHost);
            elem._FBPTriggerWire("--index", i);

        });

        // remove entries in old array if items is smaller
        this._insertedItems.slice(items.length, this._insertedItems.length).map((handle) => {
            handle.children.map((attachedElem) => {
                attachedElem.remove()
            })
        });

        if (items.length > 0) {
            /**
             * @event items-in-dom
             * Fired when items are attached to the dom
             * detail payload: {Number} Number of items
             */
            setTimeout(()=>{
                let customEvent = new Event('items-in-dom', {composed: true, bubbles: false});
                customEvent.detail = items.length;
                this.dispatchEvent(customEvent);
            },0);

        }
    }

    connectedCallback() {
        this.style.display = "none";
        // Create a shadow root to the element.

        if (this.content.children.length > 0) {
            this.template = this.content;
        } else {
            this.template = this._templateInfo.content;
        }


        this._internalWire = this.getAttribute("internal-wire") || "--itemInjected";
    }


    triggerFirst(e) {
        this._insertedItems[0].virtualElement._FBPTriggerWire("--trigger", e);
        this._insertedItems[0].virtualElement._FBPTriggerWire("--triggerFirst", e);
    }

    triggerLast(e) {
        this._insertedItems[this._insertedItems.length - 1].virtualElement._FBPTriggerWire("--trigger", e);
        this._insertedItems[this._insertedItems.length - 1].virtualElement._FBPTriggerWire("--triggerLast", e);
    }

    triggerIndex(i, data) {
        if (this._insertedItems[i]) {
            this._insertedItems[i].virtualElement._FBPTriggerWire("--trigger", data);
            this._insertedItems[i].virtualElement._FBPTriggerWire("--triggerIndex", data);
        } else {
            console.warn("Out of index", this)
        }

    }

}


window.customElements.define('flow-repeat', FlowRepeat, {extends: "template"});
