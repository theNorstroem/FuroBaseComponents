import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-external-content`
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 *
 * @summary
 * @customElement
 * @demo demo-furo-external-content Basic Usage
 * @appliesMixin FBP
 */
class FuroExternalContent extends FBP(LitElement) {
  /**
   * Fired when the html page finished loading.
   * @event srcloaded
   */

  constructor() {
    super();
    this.src = '';
    this.allow = '';
    this.referrerpolicy = 'no-referrer-when-downgrade';
    this.sandbox = 'allow-scripts';
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  /**
   * Supported attributes
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#Attributes
   *
   * @returns {{src: {reflect: boolean, type: StringConstructor}}}
   */
  static get properties() {
    return {
      /**
       * The URL of the page to embed. Use a value of about:blank to embed an empty page that conforms to the same-origin policy.
       * Also note that programatically removing an <iframe>'s src attribute (e.g. via Element.removeAttribute())
       * causes about:blank to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.
       */
      src: {
        type: String,
        reflect: true,
      },

      /**
       * Specifies a feature policy for the <iframe>. The policy defines what features are available to the <iframe>
       * based on the origin of the request (e.g. access to the microphone, camera, battery, web-share API, etc.).
       * For more information and examples see: Using Feature Policy > The iframe allow attribute.
       */
      allow: {
        type: String,
        refelct: true,
      },

      /**
       * Experimental technology
       * A Content Security Policy enforced for the embedded resource. See HTMLIFrameElement.csp for details.

      csp : {
        type: String,
        reflect: true
      },
      */

      /**
       * A targetable name for the embedded browsing context. This can be used in the target attribute of the <a>, <form>,
       * or <base> elements; the form target attribute of the <input> or <button> elements; or the windowName parameter in the window.open() method.
       */
      name: {
        type: String,
        reflect: true,
      },

      /**
       * Indicates which referrer to send when fetching the frame's resource:
       * - no-referrer: The Referer header will not be sent.
       * - no-referrer-when-downgrade (default): The Referer header will not be sent to origins without TLS (HTTPS).
       * - origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
       * - origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
       * - same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
       * - strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
       * - strict-origin-when-cross-origin: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
       * - unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
       */
      referrerpolicy: {
        type: String,
        reflect: true,
      },

      /**
       * Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply
       * all restrictions, or space-separated tokens to lift particular restrictions:
       * - allow-downloads-without-user-activation : Allows for downloads to occur without a gesture from the user.
       * - allow-downloads: Allows for downloads to occur with a gesture from the user.
       * - allow-forms: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.
       * - allow-modals: Lets the resource open modal windows.
       * - allow-orientation-lock: Lets the resource lock the screen orientation.
       * - allow-pointer-lock: Lets the resource use the Pointer Lock API.
       * - allow-popups: Allows popups (such as window.open(), target="_blank", or showModalDialog()). If this keyword is not used, the popup will silently fail to open.
       * - allow-popups-to-escape-sandbox: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.
       * - allow-presentation: Lets the resource start a presentation session.
       * - allow-same-origin: If this token is not used, the resource is treated as being from a special origin that always fails the same-origin policy.
       * - allow-scripts: Lets the resource run scripts (but not create popup windows).
       * - allow-storage-access-by-user-activation : Lets the resource request access to the parent's storage capabilities with the Storage Access API.
       * - allow-top-navigation: Lets the resource navigate the top-level browsing context (the one named _top).
       * - allow-top-navigation-by-user-activation: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.
       */
      sandbox: {
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * bind FieldNode of type String containing valid url
   * The URL of the page to embed. Use a value of about:blank to embed an empty page that conforms to the same-origin policy.
   * Also note that programatically removing an <iframe>'s src attribute (e.g. via Element.removeAttribute())
   * causes about:blank to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.
   * @param field
   */
  bindData(field) {
    if (field) {
      this._field = field;

      this._field.addEventListener('field-value-changed', () => {
        this.src = this._field._value;
      });
    }
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
          margin: unset;
          padding: unset;
        }
      `,
    ];
  }

  /**
   * Component template
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <iframe
        title="${this.title}"
        aria-label="${this.name}"
        role="presentation"
        src="${this.src}"
        allow="${this.allow}"
        name="${this.name}"
        referrerpolicy="${this.referrerpolicy}"
        sandbox="${this.sandbox}"
        @-load="^^srcloaded(*)"
      ></iframe>
    `;
  }
}

window.customElements.define('furo-external-content', FuroExternalContent);
