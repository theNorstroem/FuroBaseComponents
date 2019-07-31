import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/navigation/test/produce-data"
/**
 * `demo-furo-pretty-json`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroPrettyJson extends FBP(LitElement) {

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
            
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet{
            height: 500px;
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
      <h2>Demo demo-furo-pretty-json</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <produce-data @-data="--data"></produce-data>
          <furo-vertical-scroller>
          <furo-pretty-json ƒ-inject-data="--data"></furo-pretty-json>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-pretty-json', DemoFuroPrettyJson );
