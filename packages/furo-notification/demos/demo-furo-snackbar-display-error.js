import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-snackbar-display.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-snackbar.js';
import '@furo/input';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import './produce-snackbar-data.js';

/**
 * `demo-furo-snackbar-display`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroSnackbarDisplayError extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroSnackbarDisplayError') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   *@private
   */
  static get properties() {
    return {};
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <h2>Demo furo-snackbar</h2>

      <furo-demo-snippet>
        <template>
          <produce-snackbar-data
            id="snackbar1"
            label="produce error"
            snackbar-label="this is a text label"
            @-snackbar-label-snackbar1="--setLabelTex1"
            @-response-error="--error"
          ></produce-snackbar-data>

          <div>
            <furo-snackbar
              timeout-in-ms="5000"
              icon="done"
              ƒ-show="--show"
              action-button-text="undo"
              ƒ-parse-grpc-status="--error"
            ></furo-snackbar>
          </div>
          <!-- this furo-banner-display should be place on the main page once 
            <furo-snackbar-display></furo-snackbar-display> 
          -->
        </template>
      </furo-demo-snippet>
    `;
  }
}

customElements.define('demo-furo-snackbar-display-error', DemoFuroSnackbarDisplayError);
