import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-protobuf-timestamp`
 * The display-google-protobuf-timestamp component displays a FieldNode of type `google.protobuf.Timestamp` in read only mode.
 *
 * ```
 * message Timestamp {
 *  // Represents seconds of UTC time since Unix epoch
 *  // 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
 *  // 9999-12-31T23:59:59Z inclusive.
 *  int64 seconds = 1;
 *
 *  // Non-negative fractions of a second at nanosecond resolution. Negative
 *  // second values with fractions must still have non-negative nanos values
 *  // that count forward in time. Must be from 0 to 999,999,999
 *  // inclusive.
 *  int32 nanos = 2;
 * }
 * ```
 * If you have to represent timestamp using string type for legacy or compatibility reasons,
 * the field names should not include any unit suffix.
 * The string representation should use RFC 3339 format, e.g. "2014-07-30T10:43:17Z".
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-timestamp Basic Usage
 */
class DisplayGoogleProtobufTimestamp extends LitElement {
  constructor() {
    super();
    this._displayValue = '';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayGoogleProtobufTimestamp') ||
      css`
        :host {
          display: inline;
          white-space: nowrap;
        }

        :host([hidden]) {
          display: none;
        }

        :host([tabular-form]) {
          display: block;
          text-align: right;
        }

        :host([disabled]) {
          opacity: var(--_ui5_input_disabled_opacity, 0.4);
        }
      `
    );
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this._formatDisplay();
      });

      this._formatDisplay();
    }
  }

  /**
   * convert google.protobuf.Timestamp object to String according to Intl DateTimeFormat
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * Example output: locale de-CH 15.01.2017, 02:30:15
   * @param fieldNode
   * @returns {string}
   * @private
   */
  static _convertTimestampString(fieldValue) {
    const MS_TO_NANOS = 1000000;
    let date;
    let strDate = '';

    if (typeof fieldValue === 'object') {
      // google.protobuf.Timestamp
      if (fieldValue && fieldValue.seconds > 0){
        date = new Date(fieldValue.seconds * 1000 + Math.round(fieldValue.nanos / MS_TO_NANOS));
      }
    } else {
      // timestamp RFC 3339 e.g. 2014-07-30T10:43:17Z
      date = new Date(fieldValue);
    }

    // eslint-disable-next-line
    if (date && date != 'Invalid Date') {
      strDate = Intl.DateTimeFormat([Env.locale, 'de-CH'], {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(date);
    }
    return strDate;
  }

  _formatDisplay() {
    this._displayValue = DisplayGoogleProtobufTimestamp._convertTimestampString(this._field._value);
    this.requestUpdate();
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._displayValue}
    `;
  }
}

window.customElements.define('display-google-protobuf-timestamp', DisplayGoogleProtobufTimestamp);
