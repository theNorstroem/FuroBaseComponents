import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/icon/src/furo-icon.js';
import { Helper } from './lib/helper.js';

/**
 * `furo-text-input`
 *
 *  <sample-furo-text-input></sample-furo-text-input>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-hint-color` | Color of hint text | #999999 | --
 * `--input-label-color` | Color of label in field| `--disabled,` | #333333
 * `--input-label-float-color` | Color of label when floating | `--on-surface` | #333333
 * `--input-active-float-label-color` | Color of floating label when active  | `--primary` | #3f51b5
 * `--input-activation-indicator-color` | Color of activation indicator when not selected| `--disabled` | #333333
 * `--input-error-activation-indicator-color` | Color of activation indicator in error state | `--error` | red
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-activation-indicator-color` | Color of factivation indicator in active  state   | `--primary` | #3f51b5
 * `--input-active-error-activation-indicator-color` | Color of factivation indicator in active error state   | `--error` | red
 *
 *
 * @summary Text input field
 * @customElement
 * @demo demo-furo-text-input Input samples
 * @demo furo-text-input-playground Text-input playground
 * @demo demo-furo-input-together Different input elements together
 * @appliesMixin FBP
 */
export class FuroTextInput extends FBP(LitElement) {
  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the text input
   *
   * This event bubbles
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the text input
   *
   * This event bubbles
   */

  constructor() {
    super();
    this.valid = true;
  }

  _FBPReady() {
    super._FBPReady();

    this._FBPAddWireHook('--inputInput', e => {
      Helper.triggerValueChanged(this, e);
    });
  }

  /**
   * Updater for the pattern attr, the prop alone with pattern="${this.pattern}" wont work,
   * becaue it set "undefined" (as a Sting!)
   *
   * @param value
   */
  set pattern(value) {
    Helper.UpdateInputAttribute(this, 'pattern', value);
  }

  /**
   * Updater for the min => minlength attr
   * same problem like in pattern
   *
   * @param value
   */
  set min(value) {
    Helper.UpdateInputAttribute(this, 'minlength', value);
  }

  /**
   * Updater for the max => maxlength attr
   * * same problem like in pattern
   *
   * @param value
   */
  set max(value) {
    Helper.UpdateInputAttribute(this, 'maxlength', value);
  }

  set _value(v) {
    this._float = !!v;
    if (v !== undefined) {
      this._FBPTriggerWire('--value', v);
    } else {
      this._FBPTriggerWire('--value', '');
    }
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: { type: Boolean, reflect: true },
      /**
       * The start value. Changes will be notified with the `@-value-changed` event
       */
      value: {
        type: String,
      },
      /**
       * The pattern attribute, when specified, is a regular expression that the input's value must match in order for the value to pass constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type, and as documented in our guide on regular expressions; the 'u' flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.
       *
       * If the specified pattern is not specified or is invalid, no regular expression is applied and this attribute is ignored completely.
       */
      pattern: {
        type: String,
        reflect: true,
      },
      /**
       * The required attribute, the value true means this field must be filled in
       *
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
       */
      label: {
        type: String,
        reflect: true,
      },
      /**
       * The maximum number of characters (as UTF-16 code units) the user can enter into the text input. This must be an integer value 0 or higher. If no maxlength is specified, or an invalid value is specified, the text input has no maximum length. This value must also be greater than or equal to the value of minlength.
       */
      max: {
        type: Number,
        reflect: true,
      },
      /**
       * The minimum number of characters (as UTF-16 code units) the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by maxlength. If no minlength is specified, or an invalid value is specified, the text input has no minimum length.
       */
      min: {
        type: Number,
        reflect: true,
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      readonly: {
        type: Boolean,
        reflect: true,
      },
      /**
       * helper for the label
       */
      _float: {
        type: Boolean,
      },
      /**
       * Lets the placeholder always floating
       */
      float: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The hint text for the field.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
        reflect: true,
      },
      /**
       * Icon on the left side
       */
      leadingIcon: {
        type: String,
        attribute: 'leading-icon',
        reflect: true,
      },
      /**
       * Icon on the right side
       */
      trailingIcon: {
        type: String,
        attribute: 'trailing-icon',
        reflect: true,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */
      filled: {
        type: Boolean,
      },
      /**
       * error text
       */
      _errortext: {
        type: String,
      },
    };
  }

  /**
   * Sets the value for the input field.
   * @param {String} string
   */
  setValue(string) {
    this._value = string;
    this.value = string;
  }

  /**
   * Setter method for errortext
   * @param {String} errortext
   * @private
   */
  set errortext(v) {
    this._errortext = v;
    this.__initalErrorText = v;
  }

  /**
   * Getter method for errortext
   * @private
   */
  get errortext() {
    return this._errortext;
  }

  /**
   * Set the field to error state
   *
   * @param [{String}] The new errortext
   */
  setError(text) {
    if (typeof text === 'string') {
      this._errortext = text;
    }
    this.error = true;
  }

  /**
   * clears the error and restores the errortext.
   */
  clearError() {
    this.error = false;
    this._errortext = this.__initalErrorText;
  }

  /**
   * Sets the focus on the field.
   */
  focus() {
    this._FBPTriggerWire('--focus');
  }

  /**
   * Sets the field to readonly
   */
  disable() {
    this.disabled = true;
  }

  /**
   * Makes the field writable.
   */
  enable() {
    this.disabled = false;
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroTextInput') ||
      css`
        /* https://material.io/design/components/text-fields.html#theming */
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          margin: 10px 0 15px 0;
          height: 56px;
          width: 190px;
        }

        :host([hidden]) {
          display: none;
        }

        .wrapper {
          position: relative;
          padding: 0 12px;
          box-sizing: border-box;
          height: 56px;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }

        .iwrap {
          position: relative;
        }

        input {
          position: absolute;
          top: 16px;
          border: none;
          background: none;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          width: 100%;
          line-height: 24px;
          color: inherit;
          outline: none;
          font-family: 'Roboto', 'Noto', sans-serif;
          font-kerning: auto;
          font-size: 16px;
          font-stretch: 100%;
          font-style: normal;
        }

        input:required {
          box-shadow: none;
        }

        input:invalid {
          box-shadow: none;
        }

        :host([filled]) .wrapper {
          background-color: var(--surface-light, #fefefe);
        }

        :host([filled]) .wrapper:hover {
          background-color: var(--surface, #fcfcfc);
        }

        :host([filled]:focus-within) .wrapper {
          background-color: var(--surface-dark, #fea222);
        }

        :host(:not([filled]):hover) .left-border,
        :host(:not([filled]):hover) .right-border,
        :host(:not([filled]):hover) label {
          border-color: var(--input-hover-color, #333333);
        }

        .borderlabel {
          pointer-events: none;
          position: absolute;
          box-sizing: border-box;
          top: 0;
          right: 0;
          left: 0;
          height: 56px;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }

        .left-border {
          width: 8px;
          box-sizing: border-box;
          pointer-events: none;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
          border-right: none;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        label span {
          overflow: hidden;
          display: inline-block;
          height: 56px;
        }

        :host(:not([filled])) label span {
          top: 0;
          position: relative;
        }

        /* mark disabled fields */
        :host([disabled]) {
          background-color: var(--disabled, #333333);
        }

        :host(:not([filled])) label {
          padding: 0 4px;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
          border-left: none;
          border-right: none;
          line-height: 56px;
        }

        :host(:not([filled])) label[float],
        :host(:not([filled]):focus-within) label {
          border-top: none;
        }

        :host(:not([filled])) label[float] span,
        :host(:not([filled]):focus-within) label span {
          font-size: 12px;
          top: -28px;
          left: 0;
          position: relative;
        }

        .right-border {
          pointer-events: none;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
          border-left: none;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
          min-width: 4px;
        }

        .ripple-line {
          display: none;
          position: absolute;
          width: 100%;
          height: 1px;
          top: 54px;
          border: none;
          border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        :host([filled]) .ripple-line {
          display: block;
        }

        :host([filled]) .right-border,
        :host([filled]) .left-border {
          display: none;
        }

        :host([filled]) label {
          border: none;
        }

        :host([filled]) label {
          padding: 0 12px;
          line-height: 56px;
        }

        :host([filled]) label span {
          position: relative;
          top: 0;
        }

        :host([filled]) label[float] span,
        :host(:focus-within) label span {
          font-size: 12px;
          font-weight: 400;
          top: -20px;
          position: relative;
        }

        * {
          transition: all 200ms ease-out;
        }

        .hint,
        .errortext {
          position: absolute;
          bottom: -19px;
          font-size: 12px;
          color: transparent;
          padding-left: 12px;
          white-space: nowrap;
          pointer-events: none;
        }

        :host(:focus-within) .hint {
          color: var(--input-hint-color, #999999);
          transition: all 550ms ease-in;
        }

        :host([error]) .errortext {
          display: block;
        }

        .errortext {
          color: var(--input-error-text-color, var(--error, red));
          display: none;
        }

        label {
          color: var(--input-hint-color, var(--disabled, #dedede));
        }

        :host(:focus-within) label,
        :host(:focus-within:not([filled])) label {
          color: var(--input-active-float-label-color, var(--primary, #3f51b5));
          border-color: var(--input-active-float-label-color, var(--primary, #3f51b5));
        }

        :host(:focus-within) .ripple-line {
          border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
          border-width: 2px;
        }

        :host(:not([filled]):focus-within) .left-border,
        :host(:not([filled]):focus-within) .right-border,
        :host(:not([filled]):focus-within) label {
          border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
          border-width: 2px;
        }

        :host([error]:focus-within) .left-border,
        :host([error]:focus-within) .right-border,
        :host([error]:focus-within) label,
        :host([error]:focus-within) .ripple-line {
          border-color: var(--input-error-text-color, var(--error, red));
          border-width: 2px;
        }

        :host([error]:focus-within) label {
          color: var(--input-error-text-color, var(--error, red));
        }

        :host([error]:focus-within) .hint {
          display: none;
        }

        :host([error]) .ripple-line,
        :host([error]) .left-border,
        :host([error]) .right-border,
        :host([error]) label {
          border-color: var(--input-error-activation-indicator-color, var(--error, red));
        }

        furo-icon {
          display: none;
          top: 16px;
        }

        furo-icon.lead {
          position: absolute;

          left: 8px;
        }

        furo-icon.trail {
          position: absolute;
          right: 8px;
        }

        :host([leading-icon]:not([leading-icon='undefined'])) furo-icon.lead,
        :host([trailing-icon]:not([trailing-icon='undefined'])) furo-icon.trail {
          display: block;
        }

        :host([leading-icon]:not([leading-icon='undefined'])) label:not([float]) span {
          left: 24px;
        }

        :host(:focus-within[leading-icon]:not([leading-icon='undefined'])) label span {
          left: 0;
        }

        :host([leading-icon]:not([leading-icon='undefined'])) .wrapper {
          padding-left: 36px;
        }

        :host([trailing-icon]:not([trailing-icon='undefined'])) .wrapper {
          padding-right: 36px;
        }

        :host(:focus-within:not([valid])) label {
          color: var(--input-error-text-color, var(--error, red));
        }

        :host([condensed]) input {
          top: 12px;
          font-size: 14px;
        }

        :host([condensed]) label span {
          overflow: hidden;
          display: inline-block;
          height: 40px;
        }

        :host([condensed]:not([filled])) label,
        :host([filled][condensed]) label {
          line-height: 40px;
          font-size: 14px;
        }

        :host([condensed][filled]) input {
          top: 12px;
        }

        :host([condensed]) .borderlabel,
        :host([condensed]) .wrapper {
          height: 40px;
        }

        :host([condensed]) furo-icon {
          top: 10px;
        }

        :host([condensed]) .ripple-line {
          top: 38px;
        }

        :host([condensed][filled]) label[float] span,
        :host([filled][condensed]:focus-within) label span {
          top: -12px;
        }

        :host([condensed]) label[float] span,
        :host([condensed]:focus-within) label span {
          top: -20px;
        }

        :host([condensed]) {
          height: 40px;
        }
      `
    );
  }

  /**
   * toto add option to hide `*` when the field is required
   * @return {TemplateResult | TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div class="wrapper">
        <furo-icon
          class="lead"
          icon="${this.leadingIcon}"
          @-click="^^leading-icon-clicked(value)"
        ></furo-icon>
        <div class="iwrap">
          <input
            id="input"
            ?autofocus=${this.autofocus}
            ?readonly=${this.readonly}
            ?disabled=${this.disabled}
            ?required=${this.required}
            type="text"
            ƒ-.value="--value"
            @-input="--inputInput(*)"
            ƒ-focus="--focus"
          />
        </div>
        <furo-icon
          class="trail"
          icon="${this.trailingIcon}"
          @-click="^^trailing-icon-clicked(value)"
        ></furo-icon>
      </div>
      <div class="borderlabel">
        <div class="left-border"></div>
        <label ?float="${this._float || this.float}" for="input"
          ><span
            >${this.label}
            ${this.required
              ? html`
                  *
                `
              : html``}</span
          ></label
        >
        <div class="right-border"></div>
      </div>

      <div class="ripple-line"></div>
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
    `;
  }
}

window.customElements.define('furo-text-input', FuroTextInput);
