import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-demo-link`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-demo-link.html
 * @appliesMixin FBP
 */
class FuroDemoLink extends FBP(LitElement) {

    constructor() {
        super();
    }


  /**
  * flow is ready lifecycle method
  */
  __fbpReady(){
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
        }

        :host([hidden]) {
            display: none;
        }
    `
  }

  injectData(data){
    this.data = data;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <a href="../demo/${this.data.url}">${this.data.url}</a> <i>${this.data.description}</i>
    `;
  }
}

window.customElements.define('furo-demo-link', FuroDemoLink);
