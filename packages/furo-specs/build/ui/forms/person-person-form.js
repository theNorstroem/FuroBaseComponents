import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"


import "@furo/data-input";
import "@furo/form";

/**
 * `person-person-form`
 * Person message type
 *
 * @customElement
 * @appliesMixin FBP
 */
export class PersonPersonForm extends FBP(LitElement) {
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FormBaseTheme') || css`
            :host {
                display: block;
            }
            :host([hidden]) {
                display: none;
            }
            h1 {
                font-size: 24px;
                line-height: 24px;
                letter-spacing: 0;
                margin: 0;
                font-weight: normal;
                margin-bottom: 4px;
            }
            .secondary{
                padding: var(--spacing-s, 16px);
                color: var(--secondary-color, var(--on-primary-light,#777777));
                line-height: 22px;
                font-size: 14px;
                letter-spacing: 0.1px;
            }
        `
    }
    /**
     * Bind here your furo-data-object event @-object-ready
     * @public
     * @param data
     */
    bindData(data) {
        this._FBPTriggerWire('--data', data);
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <!--   -->
            
            
            <furo-form-layouter four>
                <!-- Name of a person  -->
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.name)"></furo-data-text-input>
                <!-- First name of a person  -->
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.first_name)"></furo-data-text-input>
                <!-- Internal phone number  -->
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.phone_nr)"></furo-data-text-input>
                <!-- List of main skills of a person  -->
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.skills)"></furo-data-text-input>
            </furo-form-layouter>
            
        `;
    }
}

window.customElements.define('person-person-form', PersonPersonForm);
