import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"


/**
 * `furo-pretty-json`
 * Pretty json with highlighting
 *
 * @demo demo-furo-pretty-json Simple data display
 * @summary pretty prints json data
 * @customElement
 */
class FuroPrettyJson extends FBP(LitElement) {

    constructor() {
        super();

    }

    static get properties() {
        return {};
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`
            :host {
                display: block;
                font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
                margin: var(--gap-size);
                line-height: 1.5;
            }

            pre {
                background-color: var(--background);
                padding: 0;
            }

            .string {
                color: #080
            }

            .number {
                color: darkorange;
            }

            .boolean {
                color: blue;
            }

            .null {
                color: magenta;
            }

            .key {
                color: #606
            }

        `
    }

    /**
     * Inject JSON data
     * @param json
     */
    injectData(json) {
        if (json) {
            this.markedText = JSON.stringify(json, null, 2);
            this.markedText = this._syntaxHighlight(this.markedText);

            this.shadowRoot.querySelector('#content').innerHTML = this.markedText;
        }
    }

    _syntaxHighlight(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }


    render() {
        // language=HTML
        return html`
            <pre id="content"></pre>
        `;
    }

}

window.customElements.define('furo-pretty-json', FuroPrettyJson);
