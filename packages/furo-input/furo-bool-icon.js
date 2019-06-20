import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {FieldNode} from "@furo/data/lib/FieldNode";

/**
 * `furo-bool-icon`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-bool-icon.html
 * @appliesMixin FBP
 */
class FuroBoolIcon extends FBP(LitElement) {

    constructor() {
        super();
        this.addEventListener("click",()=>{
          this.toggle();
        });
      this.symboltrue = "▼";
      this.symbolfalse = "▶"
    }

    toggle(){
      this.field.value = !this.field.value;
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
            symboltrue: {type: String},
            symbolfalse: {type: String},
        };
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
            display: inline-block;
            width: 16px;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  bindData(d) {
    if (d === undefined) {
      return
    }

    if(d._spec.type !== "bool"){
      console.warn("wrong type binded", this);
      return;
    }
    this.field = d;



    // render on changed data
    this.field.addEventListener("field-value-changed", (e) => {
      this._updateSymbol();
    });


    this._updateSymbol();
  }

  _updateSymbol(){
    this._ocSymbol = this.field.value ? this.symboltrue : this.symbolfalse;
    this.requestUpdate();
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._ocSymbol}
    `;
  }
}

window.customElements.define('furo-bool-icon', FuroBoolIcon);
