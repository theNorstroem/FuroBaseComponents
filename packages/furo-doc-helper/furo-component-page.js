import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {Styling} from "./styling";
import '@furo/route';
import "./furo-doc-page"

import "./furo-demo-page"

/**
 * `view-api`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/view-api.html
 * @appliesMixin FBP
 */
class FuroComponentPage extends FBP(LitElement) {


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
       
    `
  }

  static get styles() {

    let theme = Theme.getThemeForComponent(this.name);
    if (theme) {
      return [theme, Styling.theme]
    } else {
      // language=CSS
      return [css`
          :host {
              display: block;
              height: 100%;
              overflow: hidden;
              box-sizing: border-box;
              padding: var(--spacing) 0  var(--spacing)  var(--spacing);
              --split-master-width: 250px;
          }

          :host([hidden]) {
              display: none;
          }
          furo-pages{
              height: 100%;
          }

      `, Styling.theme]
    }
  }


  /**
   * flow is ready lifecycle method
   */
  __fbpReady(){
    super.__fbpReady();
    //this._FBPTraceWires()
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-location @-location-changed="--pathChanged"></furo-location>
      
      <furo-pages ƒ-inject-location="--pathChanged" default="doc">
          <furo-doc-page name="doc"></furo-doc-page>
          <furo-demo-page name="demo"></furo-demo-page>
        </furo-pages>
      
    `;
  }
}

window.customElements.define('furo-component-page', FuroComponentPage);
