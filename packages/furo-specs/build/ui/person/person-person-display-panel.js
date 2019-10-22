// Code generated by @furo/specs. DO NOT EDIT.
// source: ./specs/person/person.service.spec
import {html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"
import {BasePanel} from "@furo/route/lib/BasePanel";

import '@furo/data';
import '@furo/layout';


import "./person-person-display";

/**
 * The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person
 *
 * @customElement
 * @appliesMixin BasePanel
 */
export class PersonPersonDisplayPanel extends (BasePanel) {

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
    }

    /**
    * Inject hts for the PersonService agent.
    *
    * Use this, if you do not work with a panel coordinator.
    */
    htsIn(hts){
        this.FBPTriggerWire("--htsIn",hts);
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('PanelBaseTheme') || css`
                :host {
                    display: block;
                    height: 100%;
                    background-color: var(--surface-light);
                    color: var(--on-surface);
                    padding-top: var(--spacing);
                    box-sizing:border-box;
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
              <person-person-display flex ƒ-bind-data="--entity(*.data)"></person-person-display>
            </furo-card>


          </furo-vertical-flex>


          <furo-entity-agent service="PersonService"
                             @-response="--response"
                             ƒ-hts-in="--navNode(*._value.link), --htsIn"
                             ƒ-bind-request-data="--entity(*.data)"
                             load-on-hts-in></furo-entity-agent>

          <furo-data-object type="person.PersonEntity"
                            @-object-ready="--entity"
                            ƒ-reset="--resetReq"
                            ƒ-inject-raw="--response"></furo-data-object>

        `;
    }


}

window.customElements.define('person-person-display-panel', PersonPersonDisplayPanel);
