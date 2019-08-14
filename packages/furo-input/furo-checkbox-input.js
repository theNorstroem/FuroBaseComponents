import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-ripple";

/**
 * `furo-checkbox-input`
 *
 * # WORK IN PROGRESS
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to select multiple options from a set.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-checkbox-input></furo-checkbox-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * @summary checkbox input
 * @customElement
 * @demo demo-furo-checkbox-input Basic demo
 * @appliesMixin FBP
 */
class FuroCheckboxInput extends FBP(LitElement) {


    constructor() {
        super();
        this.valid = true;
    }

    _FBPReady() {
        super._FBPReady();

        this._value = this.value || "";
        this._FBPAddWireHook("--inputInput", (e) => {

            let input = e.composedPath()[0];
            this.error = input.validity.rangeOverflow || input.validity.rangeUnderflow || input.validity.patternMismatch;
            this._float = !!input.value;

            if (input.validity.valid) {
                this.value = input.value;

                this.checked = !this.checked;
                /**
                 * @event value-changed
                 * Fired when value has changed from inside the component
                 * detail payload: {String} the text value
                 */
                let customEvent = new Event('value-changed', {composed: true, bubbles: true});
                customEvent.detail = this.value;
                this.dispatchEvent(customEvent);
            }
        });

        this._FBPAddWireHook("--focusReceived", (e) => {
            this.focused = true;
        });

        this._FBPAddWireHook("--focusOutReceived", (e) => {
            this.focused = false;
        });

    }

    set _value(v) {
        this._float = !!v;
        this._FBPTriggerWire("--value", v)
    }

    /**
     * Sets the focus on the field.
     */
    focus() {
        this._FBPTriggerWire("--focus");
    }

    /**
     * Sets the field to readonly
     */
    disable(){
        this.readonly = true;
    }

    /**
     * Makes the field writable.
     */
    enable(){
        this.readonly = false;
    }

    static get properties() {
        return {

            /**
             * The start value. Changes will be notified with the `@-value-changed` event
             */
            value: {
                type: String
            },

            /**
             * Set this attribute to autofocus the input field.
             */
            autofocus: {
                type: Boolean
            },

            /**
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            disabled: {
                type: Boolean, reflect: true
            },

            /**
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            readonly: {
                type: Boolean, reflect: true
            },

            /**
             * A Boolean attribute which, if present, means this checkbox is checked.
             */
            checked: {
                type: Boolean, reflect: true
            },

            /**
             * A Boolean attribute which, if present, means this is focused.
             */
            focused: {
                type: Boolean, reflect: true
            }
        };
    }

    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`
            /* https://material.io/design/components/text-fields.html#theming */
            :host {
                display: inline-block;
                position: relative;
                box-sizing: border-box;
            }

            :host([hidden]) {
                display: none;
            }

            /* The wrapper */
            .wrapper {
                display: block;
                position: relative;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                box-sizing: border-box;

            }

            input[type="checkbox" i] {
                margin: 0;
            }

            /* input checkbox*/
            .wrapper input {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                cursor: pointer;
                height: 40px;
                width: 40px;
                z-index: 1;
                box-sizing: border-box;

            }

            .checkbox-background {
                position: absolute;
                top: 11px;
                left: 11px;
                height: 18px;
                width: 18px;
                background-color: var(--input-checkbox-unselected-bg-color, #ffffff);
                border: solid 2px;
                border-color: var(--input-checkbox-unselected-border-color, #7E7E7E);
                box-sizing: border-box;
            }

            /* unselected checkbox when hovering */
            .wrapper:hover {
                background-color: var(--input-checkbox-unselected-hover-bg-color, #F5F5F5);
            }

            .wrapper:hover input ~ .checkbox-background {
                background-color: var(--input-checkbox-unselected-hover-bg-color, #F5F5F5);
            }

            /* unselected checkbox when focusing */
            :host([focused]) .wrapper {
                background-color: var(--input-checkbox-unselected-focus-bg-color, #DDDDDD);
            }

            :host([checked]) .wrapper input ~ .checkbox-background {
                background-color: var(--input-checkbox-unselected-focus-bg-color, #DDDDDD);
            }

            /* unselected checkbox when pressing */
            .wrapper:active {
                background-color: var(--input-checkbox-unselected-active-bg-color, #C0C0C0);
            }

            .wrapper:active input ~ .checkbox-background {
                background-color: var(--input-checkbox-unselected-active-bg-color, #C0C0C0);
            }

            /* selected checkbox  */
            :host([checked]) .wrapper input:checked ~ .checkbox-background {
                background-color: var(--input-checkbox-selected-bg-color, #6200FD);
                border-color: var(--input-checkbox-selected-bg-color, #6200FD);
            }

            /* selected checkbox when focusing */
            :host([checked][focused]) .wrapper {
                background-color: var(--input-checkbox-selected-hover-bg-color, #D5C6E9);
            }

            :host([checked][focused]) .wrapper input ~ .checkbox-background {
                background-color: var(--input-checkbox-selected-focus-bg-color, #6200FD);
            }

            /* selected checkbox when hovering */
            :host([checked]) .wrapper:hover {
                background-color: var(--input-checkbox-selected-hover-bg-color, #E4DBE6);
            }

            /* disabled checkbox  */
            .wrapper input:disabled:checked ~ .checkbox-background {
                background-color: var(--input-checkbox-selected-bg-color, #B9B9B9);
                border-color: var(--input-checkbox-selected-bg-color, #B9B9B9);
            }

            /* disabled checkbox unselected */
            .wrapper input:disabled ~ .checkbox-background {
                background-color: var(--input-checkbox-selected-bg-color, #ffffff);
                border-color: var(--input-checkbox-selected-bg-color, #aaaaaa);
            }

            .checkbox-background:after {
                content: "";
                position: absolute;
                display: none;
            }

            input:disabled {
                cursor: default;
            }

            /* disabled checkbox when hovering */
            :host([disabled]) .wrapper:hover {
                background-color: var(--input-checkbox-disabled-hover-bg-color, #ffffff);
                background: transparent;
            }

            .wrapper input:checked ~ .checkbox-background:after {
                display: block;
            }

            .wrapper .checkbox-background:after {
                left: 3px;
                top: -1px;
                width: 5px;
                height: 11px;
                border: solid white;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        `
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render(){
        return html`
          <div id="wrapper" class="wrapper" ?focus=${this.autofocus}>
              <input id="input" type="checkbox" ?autofocus=${this.autofocus} ?disabled=${this.disabled || this.readonly}    
                  ?checked=${this.checked}  ƒ-.value="--value" @-input="--inputInput(*)" @-focusout="--focusOutReceived" @-focus="--focusReceived"  ƒ-focus="--focus">
              <span class="checkbox-background"></span>
          </div>
        `;
    }

}

customElements.define('furo-checkbox-input', FuroCheckboxInput);
