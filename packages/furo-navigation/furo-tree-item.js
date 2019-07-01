import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-horizontal-flex";
import "@furo/input/furo-bool-icon";
import {NodeEvent} from "@furo/data/lib/EventTreeNode";

/**
 * `furo-tree-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-tree-item.html
 * @appliesMixin FBP
 */
export class FuroTreeItem extends FBP(LitElement) {

  constructor() {
    super();
    this.hidden = true;
  }

  search(event){

    if(!this.hidden){

      // append fieldnode to result set (used in furo-tree.js)
      if(this.fieldNode.display_name.value.search(event.term) != -1 || this.fieldNode.description.value.search(event.term) != -1){
        event.results.push(this.fieldNode);

      }

    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      hidden: {type: Boolean, reflect: true},
      hovered: {type: Boolean, reflect: true},
      searchmatch: {type: Boolean, reflect: true},
      selected: {type: Boolean, reflect: true}
    };
  }

  bindData(fieldNode) {
    this.fieldNode = fieldNode;
    this.fieldNode._isHidden = true;

    // reflect visible close state to attr
    this.fieldNode.addEventListener("ancestor-invisible", (e) => {
      this.hidden = true;
      this.fieldNode._isHidden = true;
    });

    // reflect visible close state to attr
    this.fieldNode.addEventListener("ancestor-visible", (e) => {

      if (this.fieldNode.__parentNode.__parentNode.open.value) {
        this.hidden = false;
        this.fieldNode._isHidden = false;
      }
    });

    this.fieldNode.addEventListener("field-value-changed", (e) => {
      this.requestUpdate();
    });


    // listen to open close state
    this.fieldNode.open.addEventListener("field-value-changed", (e) => {
      e.cancelBubble = true;
      if (e.detail.value === false) {
        e.detail.__parentNode.children.broadcastEvent(new NodeEvent('ancestor-invisible', e.detail.__parentNode))
      } else {
        e.detail.__parentNode.children.broadcastEvent(new NodeEvent('ancestor-visible', e.detail.__parentNode))
      }

    });

    // make first node visible
    if (this.fieldNode.__parentNode.__parentNode === null) {
      this.hidden = false;
      this.fieldNode._isHidden = false;
    }

    this._FBPTriggerWire("--fieldOpen", this.fieldNode.open);
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()

    this._FBPAddWireHook("--labelClicked", (e) => {
      this.fieldNode.selectItem();
    });

    this.fieldNode.addEventListener("tree-node-unselection-requested", (e) => {
      this.selected = false;
      this.fieldNode._isSelected = false;
    });

    this.fieldNode.addEventListener("tree-node-blur-requested", (e) => {
      this.hovered = false;
    });

    this.fieldNode.addEventListener("this-node-hovered", (e) => {
      this.hovered = true;
    });

    this.fieldNode.addEventListener("this-node-selected", (e) => {
      this.selected = true;
      this.fieldNode._isSelected = true;
    });

    // This item is not or no more in the search results
    this.fieldNode.addEventListener("search-didnt-match", (e) => {
      this.searchmatch = false;
    });

    // This item is  in the search results
    this.fieldNode.addEventListener("search-matched", (e) => {
      this.searchmatch = true;
    });

  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            line-height: 24px;
            cursor: pointer;
            user-select: none;
        }

        :host([hidden]) {
            display: none;
        }


        .label {
            white-space: nowrap;
        }

        .desc {
            font-size: smaller;
            white-space: nowrap;
        }

        .oc {
            color: var(--separator-color, #b5b5b5);
            width: 16px;
            font-size: 8px;
            box-sizing: border-box;
            padding-left: 4px;
        }
        
        :host([searchmatch])  {
            border-left: 1px solid orange;
        }
        
        :host([selected]) .oc {
            color: var(--on-primary, white);
        }
        
       
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
<furo-horizontal-flex @-dblclick="--dblclicked" @mouseenter="${(e) => this.fieldNode.triggerHover()}">
      <div style="width: ${this.fieldNode.depth * 8}px"></div>
      <div class="oc"><furo-bool-icon ?hidden="${!this.fieldNode.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-bool-icon></div>      
      <div flex class="label" @-click="--labelClicked" >${this.fieldNode.display_name} <span class="desc">${this.fieldNode.description}</span></div>
</furo-horizontal-flex>

    `;
  }
}

window.customElements.define('furo-tree-item', FuroTreeItem);
