/* eslint-disable  import/no-extraneous-dependencies */
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

import '@furo/doc-helper';
import '@furo/ui5/src/furo-ui5-data-collection-dropdown.js';
import '@furo/ui5/src/furo-ui5-data-text-input.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-collection-agent.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-deep-link.js';
import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';
import '@furo/data-input/demos/helper/fetch-universal-json.js';
import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';
/**
 * `demo-furo-ui5-data-collection-dropdown`
 *
 * @Summary basic usage of furo-ui5-data-collection-dropdown
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataCollectionDropdown extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataCollectionDropdown') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 100%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <furo-demo-snippet>
          <template>
            <furo-vertical-scroller>
              <h2>Demo furo-ui5-data-collection-dropdown</h2>
              <furo-form-layouter one>
                <div>
                  <p>
                    Option items from API Spec. Type furo.Optionitem. Attention: OVERWRITE OF
                    SUBFIELD DEFAULT
                  </p>

                  <furo-ui5-data-collection-dropdown
                    style="width: 100%;"
                    value-state="Warning"
                    ƒ-bind-data="--entityPerson(*.sex)"
                    @-item-selected="--itemSelected"
                  ></furo-ui5-data-collection-dropdown>
                </div>
                <div>
                  <p>
                    Option items an array of objects with injectEntities(). Display field is set to
                    field NAME
                  </p>
                  <furo-ui5-data-collection-dropdown
                    style="width: 100%;"
                    display-field="name"
                    ƒ-bind-data="--entity(*.owner)"
                    value-sub-field="id"
                    ƒ-inject-entities="--response(*.entities)"
                    @-item-selected="--itemSelected"
                  ></furo-ui5-data-collection-dropdown>
                </div>
                <div>
                  <p>Option item from collection response. Type xxx.TypeEntity)</p>
                  <p>
                    The attributes value-field, sub-field and display-field are optional and by
                    default set to: id, data and display_name.
                  </p>
                  <furo-ui5-data-collection-dropdown
                    style="width: 100%;"
                    value-field="id"
                    sub-field="data"
                    display-field="display_name"
                    ƒ-inject-entities="--response(*.entities)"
                    ƒ-bind-data="--entity(*.owner)"
                    value-sub-field="id"
                    @-item-selected="--itemSelected"
                  >
                  </furo-ui5-data-collection-dropdown>
                </div>
                <div>
                  <p>Option item from collection response. Type xxx.TypeEntity)</p>
                  <p>
                    In this example, the bound fieldNode receives a custom update. With the
                    attributes value-sub-field and display-sub-field you can determine which
                    attributes of the target object (bound field) are updated. In this use case the
                    link object of the type reference is updated (check the furo-data-object)
                  </p>
                  <furo-ui5-data-collection-dropdown
                    style="width: 100%;"
                    display-sub-field="link.type"
                    value-sub-field="id"
                    ƒ-inject-entities="--response(*.entities)"
                    ƒ-bind-data="--entity(*.owner)"
                    @-item-selected="--itemSelected"
                  >
                  </furo-ui5-data-collection-dropdown>
                </div>

                <div>
                  <p>auto-select-first attribute</p>
                  <p>
                    In this example, the first element will be selected after injecting the
                    entities. Because the auto-select-first attribute is set.
                  </p>
                  <furo-ui5-data-collection-dropdown
                    style="width: 100%;"
                    value-sub-field="id"
                    auto-select-first
                    ƒ-inject-entities="--response(*.entities)"
                    ƒ-bind-data="--entityProject(*.data)"
                    @-item-selected="--itemSelected"
                  >
                  </furo-ui5-data-collection-dropdown>
                </div>
                <p>
                  Bound input fields: owner.id and owner.display_name. If you enter a valid owner
                  ID, the items in the collection drop-down list automatically display the record
                  matching the ID.
                </p>
                <furo-ui5-data-text-input
                  value-state="Success"
                  ƒ-bind-data="--entity(*.owner.id)"
                ></furo-ui5-data-text-input>
                <furo-ui5-data-text-input
                  ƒ-bind-data="--entity(*.owner.display_name)"
                ></furo-ui5-data-text-input>
              </furo-form-layouter>

              <furo-button-bar>
                <ui5-button design="Emphasized" @-click="--loadCollection"
                  >load and inject entities into dropdown list</ui5-button
                >
                <ui5-button design="Emphasized" @-click="--loadData">
                  <fetch-universal-json
                    file="/mockdata/projects/2/get.json"
                    @-data-loaded="--responseProject"
                  ></fetch-universal-json
                ></ui5-button>
                <ui5-button @-click="--reset">reset task</ui5-button>
              </furo-button-bar>

              <furo-pretty-json ƒ-inject-data="--itemSelected"></furo-pretty-json>

              <furo-data-object
                type="task.Task"
                @-object-ready="--entity"
                ƒ-init="--reset"
              ></furo-data-object>
              <furo-data-object
                type="project.ProjectEntity"
                @-object-ready="--entityProject"
                ƒ-inject-raw="--responseProject"
                ƒ-init="--reset"
              ></furo-data-object>
              <furo-data-object
                type="person.Person"
                @-object-ready="--entityPerson"
              ></furo-data-object>
              <furo-data-object
                type="person.PersonCollection"
                @-object-ready="--collection"
                ƒ-inject-raw="--response"
              ></furo-data-object>

              <furo-collection-agent
                service="PersonService"
                ƒ-hts-in="--hts"
                ƒ-list="--loadCollection"
                @-response="--response"
              >
              </furo-collection-agent>

              <furo-location @-location-changed="--locationChanged"></furo-location>

              <furo-deep-link
                service="PersonService"
                @-hts-out="--hts"
                ƒ-qp-in="--locationChanged(*.query)"
              ></furo-deep-link>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define(
  'demo-furo-ui5-data-collection-dropdown',
  DemoFuroUi5DataCollectionDropdown,
);
