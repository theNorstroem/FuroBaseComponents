import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';

/**
 * `demo-furo-external-content`
 * Demo how to integrate html content with web component.
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/demo-furo-external-content.html
 * @appliesMixin FBP
 */
class DemoFuroExternalContent extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroExternalContent') ||
      css`
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          padding-right: var(--spacing, 16px);
        }

        :host([hidden]) {
          display: none;
        }
        h2 {
          margin-top: 0;
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
      <h2>Demo furo-external-content</h2>
      <p>Embedding html content</p>
      <furo-demo-snippet>
        <template>
          <furo-external-content title="StreetMap" name="StreetMap1" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></furo-external-content>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-external-content', DemoFuroExternalContent);
