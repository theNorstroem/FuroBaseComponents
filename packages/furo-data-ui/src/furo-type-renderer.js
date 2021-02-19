import { LitElement } from 'lit-element';

/**
 * `furo-type-renderer`
 * The furo-type-renderer is used to display type specific data.
 * There is a standard set of display components @furo/ui5/src/standard-type-renderers for rendering the individual types.
 *
 * The standard ui5 set can be integrated with the import
 * - import '@furo/ui5/src/standard-type-renderers/display-registry.js'.
 *
 * The standard material set can be integrated with the import
 * - import '@furo/data-ui/src/standard-type-renderers/display-registry.js'.
 *
 * If you want to implement an individual display of a type, you need your own display-[type] component and import it.
 *
 * # Naming convention
 * - display-[(package.type).replaceAll('.', '-').toLocaleLowerCase()]
 * e.g. display-google-type-timeofday
 *
 * # Basic Usage
 * ```
 *   <furo-type-renderer ƒ-bind-data="--dao(*.data.fieldname)"></furo-type-renderer>
 * ```
 *
 * @summary
 * @customElement
 */
class FuroTypeRenderer extends LitElement {
  constructor() {
    super();
    // the bound fieldNode
    this._field = undefined;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * The attribute is passed to the display component. The display component
       * can decide whether the display differs
       * for a tabular form.
       * E.g. google.type.Money is displayed right-justified in a table.
       * But in a card it is left-justified.
       */
      tabularForm: {
        type: Boolean,
        attribute: 'tabular-form',
      }
    };
  }

  bindData(fieldNode) {
    this._field = fieldNode;
    this.renderName = `display-${this._field._spec.type.replaceAll('.', '-').toLocaleLowerCase()}`;
    this.defaultElement =  document.createElement(this.renderName);
    if (!this._field._isRepeater) {
      this._createDisplay();
    } else {
      this._createRepeatedDisplay();
    }
  }

  /**
   *
   * @private
   */
  _createDisplay() {

    if (this.defaultElement.bindData) {
      this._addElement(this.defaultElement);
    } else {
      this._warning();
    }
  }

  _addElement(el) {
    if (this.tabularForm) {
      el.setAttribute('tabular-form', null);
    }

    el.bindData(this._field);
    this.shadowRoot.appendChild(el);
  }

  _warning() {
    // eslint-disable-next-line no-console
    console.warn(
      `No type specific renderer ${this.renderName} found. Check your imports.`,
      this._field._spec.type,
    );
  }

  /**
   *
   * @private
   */
  _createRepeatedDisplay() {

    if (this._field._isRepeater) {
      const rRenderName = `${this.renderName  }-repeats`;

      const elementRepeat = document.createElement(rRenderName);
      if (elementRepeat.bindData) {
        this._addElement(elementRepeat);
      } else if (this.defaultElement.bindData) {
          this._field.repeats.forEach(r => {
            const el = document.createElement(this.renderName);
            el.bindData(r);
            this.shadowRoot.appendChild(el);
          });
        } else {
          this._warning();
        }
    }
  }
}

window.customElements.define('furo-type-renderer', FuroTypeRenderer);