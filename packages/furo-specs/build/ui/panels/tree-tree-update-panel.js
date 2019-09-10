// Code generated by @furo/specs. DO NOT EDIT.
// source: ./specs/tree/tree.service.spec
import {html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {BasePanel} from "@furo/route/lib/BasePanel";

import '@furo/data';
import '@furo/layout';


import "../forms/tree-tree-form";
import "../actions/tree-tree-update-action";

/**
 * Updates a Tree, partial updates are supported
 *
 * @customElement
 * @appliesMixin FBP
 */
class treeTreeUpdatePanel extends FBP(BasePanel) {

    static get styles() {
        // language=CSS
        return [
            css`
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
        ];
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
              <!-- FORM -->
              <tree-tree-form flex ƒ-bind-data="--data(*.data)"></tree-tree-form>
            </furo-card>
            <!-- ACTION -->
            <tree-tree-update-action @-update="--updateRequested"></tree-tree-update-action>
            <!-- SUBS -->

          </furo-vertical-flex>

          <!-- non visuell components -->
          <furo-entity-agent service="TreeService"
                             ƒ-hts-in="--navNode(*.value.link)"
                             ƒ-save="--updateRequested"
                             ƒ-bind-request-data="--data(*.data)"
                             load-on-hts-in
                             @-response="--response"></furo-entity-agent>

          <furo-data-object type="tree.TreeEntity"
                            @-object-ready="--data"
                            ƒ-inject-raw="--response"></furo-data-object>

        `;
    }


}

window.customElements.define('tree-tree-update-panel', treeTreeUpdatePanel);
