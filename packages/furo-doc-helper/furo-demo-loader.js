import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";



/**
 * `furo-demo-loader`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-demo-loader.html
 * @appliesMixin FBP
 */
class FuroDemoLoader extends FBP(LitElement) {

  constructor() {
    super();
  }

  load(location) {

    if (location.pathSegments[0]) {

      let lastDemo = this.shadowRoot.querySelector("#demo");
      lastDemo.remove();

      this.demoComponent = location.pathSegments[0];

      // if the element is registered append the new
      if (document.createElement(this.demoComponent).constructor !== HTMLElement) {
        // append the demo element
        let demo = document.createElement(this.demoComponent);
        demo.id = "demo";
        this.shadowRoot.appendChild(demo);
      }else{
        let demo = document.createElement("div");
        demo.id = "demo";
        demo.classList.add("error");
        demo.innerText = "404  -  " + this.demoComponent + " is not imported, nothing to show here";
        this.shadowRoot.appendChild(demo);
      }

      this.requestUpdate();

    }

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
            height: 100%;
            overflow: auto;
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }

        .goback {
            position: absolute;
            right: var(--spacing);

        }
        .error{
            font-size: 48px;
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
      <a class="goback" href="../doc/">Back to package</a>
        <div id="demo"></div>
    `;
  }
}

window.customElements.define('furo-demo-loader', FuroDemoLoader);
