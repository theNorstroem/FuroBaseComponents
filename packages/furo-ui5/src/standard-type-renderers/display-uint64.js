import { LitElement, html, css } from 'lit-element';
import { Env } from '@furo/framework/src/furo.js';
/**
 * `display-uint64`
 * The display-uint64 component displays a FieldNode of type `uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-uint64 Basic Usage
 */
class DisplayUint64 extends LitElement {
  constructor() {
    super();
    this._field = undefined;
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          word-break: keep-all;
        }

        :host([tabular-form]) {
          text-align: right;
        }

        :host([value-state='Positive']),
        :host([value-state='Success']) {
          color: var(--sapPositiveColor, #107e3e);
        }
        :host([value-state='Informative']),
        :host([value-state='Information']) {
          color: var(--sapInformativeColor, #0a6ed1);
        }
        :host([value-state='Negative']),
        :host([value-state='Error']) {
          color: var(--sapNegativeColor, #b00);
        }
        :host([value-state='Critical']),
        :host([value-state='Warning']) {
          color: var(--sapCrticalColor, #e9730c);
        }
      `,
    ];
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this.requestUpdate();
      });
    }
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    this.displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field);
    return html`
      <span>${this.displayValue}</span>
    `;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._getTemplate()}
    `;
  }
}

window.customElements.define('display-uint64', DisplayUint64);