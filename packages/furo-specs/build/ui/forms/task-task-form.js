import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"


import "@furo/data-input";
import "@furo/form";

/**
 * `task-task-form`
 * Task data description
 *
 * @customElement
 * @appliesMixin FBP
 */
export class TaskTaskForm extends FBP(LitElement) {
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

        .secondary {
            padding: var(--spacing-s, 16px);
            color: var(--secondary-color, var(--on-primary-light, #777777));
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
      <!-- Hauptgruppe  -->
      <h1>Title</h1>
      <span class="secondary">secondary</span>
      <furo-form-layouter four>
        <!-- Short task description  -->
        <furo-data-text-input condensed double ƒ-bind-data="--data(*.description)"></furo-data-text-input>
        <!--   -->
        <furo-empty-spacer spacing-xl></furo-empty-spacer>
        <!-- Estimated time in days  -->
        <furo-data-text-input condensed double ƒ-bind-data="--data(*.estimated_time)"></furo-data-text-input>
        <!-- Owner of a task  -->
        <furo-data-text-input condensed double ƒ-bind-data="--data(*.owner)"></furo-data-text-input>
        <!-- List of subtasks  -->
        <furo-data-text-input condensed double ƒ-bind-data="--data(*.subtasks)"></furo-data-text-input>
      </furo-form-layouter>

    `;
  }
}

window.customElements.define('task-task-form', TaskTaskForm);
