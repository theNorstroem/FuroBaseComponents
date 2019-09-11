// Code generated by @furo/specs. DO NOT EDIT.
// source: ./specs/experiment/experiment.service.spec
import {html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"
import {BasePanel} from "@furo/route/lib/BasePanel";

import '@furo/data';
import '@furo/layout';


import "../forms/experiment-experiment-form";
import "../actions/experiment-experiment-update-action";

/**
 * Updates a Experiment, partial updates are supported
 *
 * @customElement
 * @appliesMixin FBP
 */
export class experimentExperimentUpdatePanel extends FBP(BasePanel) {

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('') || css`
                :host {
                    display: block;
                    height: 100%;
                    background-color: var(--surface-light);
                    color: var(--on-surface);
                    padding-top: var(--spacing);
                }

                :host([hidden]) {
                    display: none;
                }

                furo-card {
                    margin: 0 var(--spacing);
                    margin-bottom: var(--spacing);
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
            <furo-card>

              <experiment-experiment-form flex ƒ-bind-data="--entity(*.data)"></experiment-experiment-form>
            </furo-card>

            <experiment-experiment-update-action @-update="--updateReq" ƒ-bind-entity="--entity" @-update-req="--updateReq"  @-reset-req="--resetReq"  @-self-req="--selfReq"  @-delete-req="--deleteReq"></experiment-experiment-update-action>


          </furo-vertical-flex>


          <furo-entity-agent service="ExperimentService"
                             @-response="--response"
                             ƒ-hts-in="TRIGGERED--navNode(*.value.link)"
                             ƒ-bind-request-data="--entity(*.data)"
                             ƒ-update="--updateReq"
                             ƒ-load="--selfReq"
                             ƒ-delete="--deleteReq"
                             load-on-hts-in></furo-entity-agent>

          <furo-data-object type="experiment.ExperimentEntity"
                            @-object-ready="--entity"
                            ƒ-reset="--resetReq"
                            ƒ-inject-raw="--response"></furo-data-object>

        `;
    }


}

window.customElements.define('experiment-experiment-update-panel', experimentExperimentUpdatePanel);