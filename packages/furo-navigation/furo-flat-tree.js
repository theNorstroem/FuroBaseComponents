import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import {FieldNode} from "@furo/data/lib/FieldNode";
import "@furo/layout/furo-vertical-flex";
import "@furo/input/furo-bool-icon";
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"
import "./furo-tree-item"

/**
 * `furo-flat-tree`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-tree.html
 * @appliesMixin FBP
 */
class FuroFlatTree extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * Flat list representation of the tree
     * @type {Array}
     * @private
     */
    this._flatTree = [];

    this.tabindex = 0;

    // keyboard navigation on top node only
    this.addEventListener("keydown", (event) => {
      let key = event.key || event.keyCode;

      switch (key) {
        case "Enter":
          event.preventDefault();
          if (this._hoveredField._isSelected) {
            // openclose
            this._hoveredField.toggleOpenClose();
          } else {
            // open the hovered field
            this._hoveredField.selectItem();
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          this._hoverNext();
          break;
        case "ArrowUp":
          event.preventDefault();
          this._hoverPrevious();
          break;

        case "ArrowLeft":
          event.preventDefault();
          // close when opened, parent when closed
          if (!this._hoveredField.isBranch() && this._hoveredField.open.value) {
            this._hoveredField.toggleOpenClose();
          } else {
            this._hoverHome();
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          // open when closed, next when opened
          if (!this._hoveredField.isBranch() && !this._hoveredField.open.value) {
            this._hoveredField.toggleOpenClose();
          } else {
            this._hoverNext();
          }
          break;
      }


    });
  }

  _hoverHome() {
    let parent = this._hoveredField.getParentElement();
    if (parent) {
      parent.triggerHover();
    }
  }

  /**
   * hovers the previous item
   */
  _hoverPrevious() {
    let prev = this._hoveredField.getPrevElement();
    if (prev) {
      prev.triggerHover();
    }
  }

  /**
   * select the previous visible item
   */
  selectPrev() {
    this._hoveredField = this._selectedField || this._hoveredField;
    this._hoverPrevious();
    // open the hovered field
    this._hoveredField.selectItem();
  }

  /**
   * toggles the selectes node
   */
  toggle() {
    this._selectedField.toggleOpenClose();
  }

  addSubNode(rawNode) {
    let newnode = this._selectedField.children.add();
    newnode.value = rawNode;
    setTimeout(() => {
      newnode.selectItem();
    }, 10)


  }

  deleteNode() {
    this._selectedField.__parentNode.deleteChild(this._selectedField.__index);
  }

  /**
   * select the next visible item
   */
  selectNext() {
    this._hoveredField = this._selectedField || this._hoveredField;
    this._hoverNext();
    // open the hovered field
    this._hoveredField.selectItem();
  }

  /**
   * hovers the next item
   */
  _hoverNext() {
    let next = this._hoveredField.getNextElement();
    if (next) {
      next.triggerHover();
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
      myBool: {type: Boolean},
      tabindex: {type: Number, reflect: true}
    };
  }

  /**
   * focuses the element
   */
  focus() {
    super.focus();
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
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
            box-sizing: border-box;
            overflow: auto;
            outline: none;
        }

        :host([hidden]) {
            display: none;
        }

        td {
            padding: 0;
        }

        table {
            border-spacing: 0;
            min-width: 100%;
        }


        :host(:not(:focus-within)) furo-tree-item[hovered] {
            background: unset;
        }

        :host(:focus-within) furo-tree-item[selected] {
            background: var(--primary-color, #429cff);
        }

        furo-tree-item[hovered] {
            background-color: var(--hover-color, #eeeeee);
        }

        furo-tree-item[selected], :host(:not(:focus-within)) furo-tree-item[selected] {
            background-color: var(--selected-color, #999999);
        }


        :host(:hover) furo-tree-item:hover {
            background-color: var(--hover-color, #eeeeee);
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
      <table>
        <template is="flow-repeat" ƒ-inject-items="--treeChanged">
          <tr>
            <td>
              <furo-tree-item ƒ-bind-data="--itemInjected(*.item)"></furo-tree-item>
            </td>
          </tr>
        </template>
      </table>
    `;
  }


  bindData(treeNode) {
    if (treeNode === undefined) {
      return
    }

    /**
     *
     * @type {Type[] | Types.vnd.com.acme.tree.fields | {children, description, id, display_name, open}  *}
     * @private
     */
    this._tree = treeNode;

    this._tree.addEventListener("repeated-fields-changed", (e) => {
      this._init()
    });

    this._init()
  }

  _init() {

    this._buildFlatTree(this._tree);

    // initial hover on first element
    this._hoveredField = this._flatTree[0];


    // set visible on root node
    this._tree.children.broadcastEvent(new NodeEvent('ancestor-visible', this._tree));

    this._initHoverAndSelectEvents();
  }

  _initHoverAndSelectEvents() {
    // Internal Event, when a node gets selected
    this._tree.addEventListener("tree-node-hovered", (e) => {


      // broadcast blur
      this._tree.broadcastEvent(new NodeEvent('tree-node-blur-requested'));
      this._hoveredField = e.target;

      /**
       * @event node-hovered
       * Fired when
       * detail payload:
       */
      let customEvent = new Event('node-hovered', {composed: true, bubbles: true});
      customEvent.detail = this._hoveredField;
      this.dispatchEvent(customEvent);
      if (this._hoveredField.isBranch()) {
        /**
         * @event branch-hovered
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('branch-hovered', {composed: true, bubbles: true});
        customEvent.detail = this._hoveredField;
        this.dispatchEvent(customEvent);
      } else {
        /**
         * @event leaf-hovered
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('leaf-hovered', {composed: true, bubbles: true});
        customEvent.detail = this._hoveredField;
        this.dispatchEvent(customEvent);
      }

    });

    // Internal Event, when a node gets selected
    this._tree.addEventListener("tree-node-selected", (e) => {
      // broadcast deselect
      this._tree.broadcastEvent(new NodeEvent('tree-node-unselection-requested'));
      this._selectedField = e.target;

      /**
       * @event node-selected
       * Fired when
       * detail payload:
       */
      let customEvent = new Event('node-selected', {composed: true, bubbles: true});
      customEvent.detail = this._selectedField;
      this.dispatchEvent(customEvent);
      if (this._selectedField.isBranch()) {
        /**
         * @event branch-selected
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('branch-selected', {composed: true, bubbles: true});
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      } else {
        /**
         * @event leaf-selected
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('leaf-selected', {composed: true, bubbles: true});
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      }

    });
  }

  _buildFlatTree(tree) {
    this._flatTree = [tree];
    this._parseTreeRecursive(tree, 0);


    for (let len = this._flatTree.length; len > 0; len--) {
      let index = len - 1;
      let node = this._flatTree[index];

      // open field if entity contains a field open with true
      if (!node.open) {
        node.addChildProperty("open", new FieldNode(node, {type: "bool"}, "open"));
        node.open.value = false;
      }


      // Traverse the flat tree, it is simpler then the nested tree
      // next active element
      node.getNextElement = () => {
        for (let i = index + 1; i < this._flatTree.length; i++) {
          if (!this._flatTree[i]._isHidden) {
            return this._flatTree[i];
          }
        }
        return false;
      };
      // prev active element
      node.getPrevElement = () => {
        for (let i = index - 1; i >= 0; i--) {
          if (!this._flatTree[i]._isHidden) {
            return this._flatTree[i];
          }
        }
        return false;
      };

      // is branch
      node.isBranch = () => {
        return node.children.repeats.length === 0
      };

      // get Parent
      node.getParentElement = () => {
        return node.__parentNode.__parentNode;
      };

      // add openclose method to treeNode
      node.toggleOpenClose = () => {
        node.open.value = !node.open.value;
      };

      // hovers the current node
      node.triggerHover = () => {
        node.dispatchNodeEvent(new NodeEvent('tree-node-hovered', this, true));
        node.dispatchNodeEvent(new NodeEvent('this-node-hovered', this, false));
      };

      // selects the current item
      node.selectItem = () => {
        node.dispatchNodeEvent(new NodeEvent('tree-node-selected', this, true));
        node.dispatchNodeEvent(new NodeEvent('this-node-selected', this, false));

        // used to open the paths upwards from the selected node
        node.dispatchNodeEvent(new NodeEvent('descendant-selected', this, true));
        node.triggerHover()
      };

      node.addEventListener("descendant-selected", (e) => {
        node.open.value = true;
      });

    }

    tree.open.value = true;

    this._FBPTriggerWire("--treeChanged", this._flatTree);
  }


  _parseTreeRecursive(tree, depth) {
    depth++;

    tree.children.repeats.forEach((node) => {
      node.depth = depth;
      this._flatTree.push(node);
      if (node.children.repeats.length > 0) {
        this._parseTreeRecursive(node, depth)
      }
    });
  }
}

window.customElements.define('furo-flat-tree', FuroFlatTree);
