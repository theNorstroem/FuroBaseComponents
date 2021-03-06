import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/fetch-universal-json.js';

/**
 * `demo-furo-ui5-data-display`
 *
 * @Summary basic usage of furo-ui5-data-display
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataDisplay extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataDisplay') ||
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

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 1em;
        }

        .width-4\\/12 {
          grid-column: span 4;
          justify-self: end;
          align-self: center;
        }

        .width-8\\/12 {
          grid-column: span 8;
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
      <h2>Demo furo-ui5-data-display</h2>
      <furo-demo-snippet>
        <template>
          <furo-vertical-scroller>
            <h4>Scalar and complex Types</h4>
            <p>One component fits all types</p>
            <furo-form-layouter one>
              <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
                >Load Demo Data
              </furo-ui5-button>
            </furo-form-layouter>

            <furo-form-layouter two>
              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.display_name)"
                value-state="Information"
              >
              </furo-ui5-data-display>

              <furo-ui5-data-display ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)">
              </furo-ui5-data-display>

              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.furo_data_money_input)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display
                value-state="Critical"
                ƒ-bind-data="--entity(*.data.furo_data_money_input)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.repstring)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display ƒ-bind-data="--entity(*.data.furo_data_text_input)">
              </furo-ui5-data-display>

              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display
                value-state="Positive"
                ƒ-bind-data="--entity(*.data.the_any_type)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.single_type_property)"
              ></furo-ui5-data-display>

              <furo-ui5-data-display
                ƒ-bind-data="--entity(*.data.furo_data_color_input)"
              ></furo-ui5-data-display>

              <p full>
                Fields of type []furo.Property need a special treatment because the meta data is
                inside of the data part. Use <i>furo-ui5-data-propertylist-display</i> instead of
                furo-ui5-data-display
              </p>

              <furo-ui5-data-propertylist-display
                ƒ-bind-data="--entity(*.data.type_property)"
              ></furo-ui5-data-propertylist-display>
            </furo-form-layouter>

            <produce-qp-data
              hidden
              slot="action"
              ƒ-produce="--demoDataRequested"
              @-data="--qp"
              qpescaped="%7B%22exp%22%3A1%7D"
            ></produce-qp-data>

            <h4>furo.fat and Google Types</h4>
            <furo-ui5-data-display
              ƒ-bind-data="--entityU(*.data.fat_string)"
            ></furo-ui5-data-display>
            <furo-ui5-data-display
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-display>
            <furo-ui5-data-display
              ƒ-bind-data="--entityU(*.data.fat_int32)"
            ></furo-ui5-data-display>

            <fetch-universal-json
              file="/mockdata/ui5/demos/fat-universal.json"
              @-data-loaded="--mockdata"
            >
              mockdate with suggestions
            </fetch-universal-json>
            <fetch-universal-json
              file="/mockdata/ui5/demos/fat-universal-unset-label.json"
              @-data-loaded="--mockdata"
            ></fetch-universal-json>
            <fetch-universal-json
              file="/mockdata/ui5/demos/fat-universal-with-meta.json"
              @-data-loaded="--mockdata"
            ></fetch-universal-json>

            <furo-data-object
              type="universaltest.UniversaltestEntity"
              @-object-ready="--entityU"
              ƒ-inject-raw="--mockdata"
            ></furo-data-object>

            <furo-data-object
              type="experiment.ExperimentEntity"
              @-object-ready="--entity"
              ƒ-inject-raw="--response"
            ></furo-data-object>
            <furo-deep-link
              service="ExperimentService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>
            <furo-entity-agent
              service="ExperimentService"
              ƒ-hts-in="--hts"
              load-on-hts-in
              ƒ-bind-request-data="--entity"
              @-response="--response"
            >
            </furo-entity-agent>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-display', DemoFuroUi5DataDisplay);
