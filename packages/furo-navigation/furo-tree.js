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
 * `furo-tree`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-tree.html
 * @appliesMixin FBP
 */
class FuroTree extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * Flat list representation of the tree
     * @type {Array}
     * @private
     */
    this._flatTree = [];
    this.tabindex = 0;
    this._searchTerm = "";
    this._searchIsActive = false;
    /**
     * If you want to use a custom component for the tree-item, set this attribute.
     * The default item component is **furo-tree-item**.
     *
     * @type {*|string|string}
     */
    this.treeItemComponent = this.getAttribute("tree-item-component") || "furo-tree-item";
    this._treeItemTepmplate = html([['<', this.treeItemComponent, ' ƒ-bind-data="--itemInjected(*.item)" ƒ-search="--trigger"></', this.treeItemComponent, '>'].join('')]);


    // keyboard navigation on top node only
    this.addEventListener("keydown", (event) => {
      let key = event.key || event.keyCode;

      switch (key) {
        case "Enter":
          event.preventDefault();
          // not reseting the search at this position is by intention.
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

          this._resetSearch();
          // close when opened, parent when closed
          if (!this._hoveredField.isBranch() && this._hoveredField.open.value) {
            this._hoveredField.toggleOpenClose();
          } else {
            this._hoverHome();
          }
          break;
        case "ArrowRight":
          event.preventDefault();

          this._resetSearch();
          // open when closed, next when opened
          if (!this._hoveredField.isBranch() && !this._hoveredField.open.value) {
            this._hoveredField.toggleOpenClose();
          } else {
            this._hoverNext();
          }
          break;


        case"Escape":
          this._resetSearch();
          break;
        case"Backspace":
          this._removeLastSymbofFromSearch();
          break;
      }

    });


    // keyboard navigation on top node only
    this.addEventListener("keypress", (event) => {
      let key = event.key || event.keyCode;

      if (!event.ctrlKey) {
        event.preventDefault();
        this._addSymbolToSearch(key);
      }else{
        switch (key) {
          // expand recursive with ctrl-e
          case "e":
            event.preventDefault();
            this._hoveredField.expandRecursive();
            break
        }
      }


    })
  }

  _removeLastSymbofFromSearch() {
    this._searchTerm = this._searchTerm.substr(0, this._searchTerm.length - 1);
    if (this._searchTerm.length === 0) {
      this._resetSearch();
    } else {
      this.searchOpenTree(this._searchTerm);
    }

  }

  _addSymbolToSearch(key) {
    this._searchTerm += key;
    this.searchOpenTree(this._searchTerm);
  }

  searchOpenTree() {
    this._searchIsActive = true;
    let d = {term: this._searchTerm, results: []};
    this._foundSearchItems = d.results;
    this._FBPTriggerWire("--searchRequested", d);

    // select first result
    if (d.results.length > 0) {
      d.results[0].triggerHover();
    }
    this._updateSearchmatchAttributesOnItems();
    this.requestUpdate();
  }

  _resetSearch() {
    this._searchIsActive = false;
    this._searchTerm = "";
    this._foundSearchItems = [];
    this._updateSearchmatchAttributesOnItems();
  }

  _updateSearchmatchAttributesOnItems(){
    this._tree.children.broadcastEvent(new NodeEvent('search-didnt-match', this._tree, true));
    this._foundSearchItems.map((node)=>{
      node.dispatchNodeEvent(new NodeEvent('search-matched', this._tree, false));
    })
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
    let prev;
    if (this._searchIsActive) {
      for (let i = 0; i < this._foundSearchItems.length; i++) {
        if (this._foundSearchItems[i].__flatTreeIndex >= this._hoveredField.__flatTreeIndex) {
          prev = this._foundSearchItems[i - 1];
          break;
        }

      }
      // select last
      if (!prev) {
        prev = this._foundSearchItems[this._foundSearchItems.length - 1];
      }
    } else {
      prev = this._hoveredField.getPrevElement();
    }

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
   * expands the currently selected node recursive
   */
  expandNodeRecursive() {
    this._selectedField.expandRecursive();
  }

  expandAll() {
    this._flatTree[0].expandRecursive();
  }

  collapseAll() {
    this._flatTree[0].collapseRecursive();
  }

  /**
   * expands the currently selected node recursive
   */
  collapseNodeRecursive() {
    this._selectedField.collapseRecursive();
  }

  /**
   * toggles the currently selected node
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
    let next;
    if (this._searchIsActive) {
      for (let i = this._foundSearchItems.length - 1; i >= 0; i--) {
        if (this._foundSearchItems[i].__flatTreeIndex <= this._hoveredField.__flatTreeIndex) {
          next = this._foundSearchItems[i + 1];
          break;
        }
      }
      // select first
      if (!next) {
        next = this._foundSearchItems[0];
      }
    } else {
      next = this._hoveredField.getNextVisibleElement();
    }

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
       * Maximal depth for the tree. Default is infinite.
       */
      depth: {type: Number},
      /**
       * Sets the tabindex
       */
      tabindex: {type: Number, reflect: true},
      /**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */
      _searchIsActive: {type: Boolean, attribute: "searching", reflect: true}
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
            position: relative;
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


        :host(:not(:focus-within)) td > *[hovered] {
            background: unset;
        }

        :host(:focus-within) td > *[selected] {
            background: var(--primary-color, #429cff);
            color: var(--on-primary, white);
        }

        td > *[hovered] {
            background-color: var(--hover-color, #eeeeee);
        }

        td > *[selected], :host(:not(:focus-within)) td > *[selected] {
            background-color: var(--selected-color, #999999);
        }


        :host(:focus-within) td > *[selected]:hover {
            background: var(--primary-color, #57a9ff);
        }


        .srch {
            display: none;
            position: absolute;
            left: 0;
            bottom: 0;
            width: inherit;
            border: 1px solid #DEDEDE;
            padding: 2px;
            font-size: 11px;
        }

        :host([searching]:focus-within) .srch {
            display: block;
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
<div class="srch">${this._searchTerm}</div>
      <table>
        <template is="flow-repeat" ƒ-inject-items="--treeChanged" ƒ-trigger-all="--searchRequested">
          <tr>
            <td>
              ${this._treeItemTepmplate}
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

    // set visible on root node
    this._tree.children.broadcastEvent(new NodeEvent('ancestor-visible', this._tree));

    this._initHoverAndSelectEvents();

    // initial hover on first element
    this._hoveredField = this._flatTree[0];
    setTimeout(() => {
      this._hoveredField.triggerHover();
    }, 0)

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
    this._parseTreeRecursive(tree, 0, this.depth);


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
      node.getNextVisibleElement = () => {
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
        node.__parentNode.dispatchNodeEvent(new NodeEvent('descendant-selected', this, true));
        node.triggerHover()
      };

      // if a descendant was selected, we ensure to open the path
      node.addEventListener("descendant-selected", (e) => {
        node.open.value = true;
      });


      // expand recursive
      node.expandRecursive = () => {
        node.broadcastEvent(new NodeEvent('recursive-expand-requested', node));
      };

      node.addEventListener("recursive-expand-requested", (e) => {
        node.open.value = true;
      });

      // collapse recursive
      node.collapseRecursive = () => {
        node.broadcastEvent(new NodeEvent('recursive-collapse-requested', node));
      };

      node.addEventListener("recursive-collapse-requested", (e) => {
        node.open.value = false;
      });
    }

    // open the root ode
    tree.open.value = true;

    this._FBPTriggerWire("--treeChanged", this._flatTree);
  }


  _parseTreeRecursive(tree, level, maxdepth) {
    if (maxdepth > 0 && !(level < maxdepth)) {
      return
    }
    level++;

    tree.children.repeats.forEach((node) => {
      node.depth = level;
      let i = this._flatTree.push(node);
      node.__flatTreeIndex = i - 1;
      if (node.children.repeats.length > 0) {
        this._parseTreeRecursive(node, level, maxdepth)
      }
    });
  }
}

window.customElements.define('furo-tree', FuroTree);
