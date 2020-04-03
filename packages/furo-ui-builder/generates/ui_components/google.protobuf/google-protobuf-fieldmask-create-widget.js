// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import {  Theme  } from '@furo/framework/theme.js';
import {  FBP  } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import {  i18n  } from '@furo/framework/i18n.js';

import "@furo/data-input";
import "@furo/form/furo-form-layouter.js";
import "@furo/input/src/furo-button.js";
import "@furo/app/furo-card.js";
import "@furo/layout/src/furo-horizontal-flex.js";

/**
 * A field mask in update operations specifies which fields of the targeted resource are going to be updated. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class GoogleProtobufFieldmaskCreateWidget extends FBP(LitElement) {

  

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d)
  }
  

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }


  /**
   *  Bind your furo-data-object event @-object-ready
   * @public
   * @param data
   */
  bindData(data) {
    this._FBPTriggerWire('--data', data);
    this.field = data;
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent("CreateWidgetBaseTheme") || css`
      
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`

      <!-- The card is the main container -->
      <furo-card>

        <!-- the form layouter will contain all required fields -->
        <furo-form-layouter></furo-form-layouter> 

        <!-- It is a good practice to set a description -->
        <furo-horizontal-flex space slot="action">

          <!-- It is a good practice to set a description -->
          <furo-button primary label="${i18n.t('create')}" rel="create" @-click="-^create-requested"></furo-button> 
        </furo-horizontal-flex> 
      </furo-card> 
    `;
  }
}

window.customElements.define('google-protobuf-fieldmask-create-widget', GoogleProtobufFieldmaskCreateWidget);

