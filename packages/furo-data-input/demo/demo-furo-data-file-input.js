import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data/furo-data-object";
import "../furo-catalog";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";

/**
 * `demo-furo-data-file-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataFileInput extends FBP(LitElement) {

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
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
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
      <furo-vertical-flex>
        <h2>Demo furo-data-file-input</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <furo-data-file-input required unelevated primary accept=".md"
                                  ƒ-bind-data="--entity(*.furo_data_file_input)"></furo-data-file-input>
            
            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               load-on-hts-in
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>

        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
    }
}

window.customElements.define('demo-furo-data-file-input', DemoFuroDataFileInput);
