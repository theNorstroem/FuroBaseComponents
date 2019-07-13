import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "./furo-markdown"
/**
 * `furo-doc-element`
 * Renders a analysis file
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-element.html
 * @appliesMixin FBP
 */
class FuroDocElement extends FBP(LitElement) {

  constructor() {
    super();

    this.element =  {
      "description": "`furo-vertical-flex`\n\n Für vertikales anordnen von Komponenten. Die Breite ist automatisch auf 100% gesetzt (display block).\n\n Setze auf dem flexiblen Element das Attribut **flex**\n\n\n```\n<furo-vertical-flex>\n  <div>small</div>\n  <div flex>full width</div>\n  <div>small</div>\n</furo-vertical-flex>\n```\n Tags: layout",
      "summary": "",
      "path": "packages/furo-layout/furo-vertical-flex.js",
      "properties": [
        {
          "name": "_hasConnected",
          "type": "?",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 469,
              "column": 4
            },
            "end": {
              "line": 471,
              "column": 5
            }
          },
          "metadata": {
            "polymer": {
              "readOnly": true
            }
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_hasRequestedUpdate",
          "type": "?",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 472,
              "column": 4
            },
            "end": {
              "line": 474,
              "column": 5
            }
          },
          "metadata": {
            "polymer": {
              "readOnly": true
            }
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "hasUpdated",
          "type": "?",
          "description": "",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 475,
              "column": 4
            },
            "end": {
              "line": 477,
              "column": 5
            }
          },
          "metadata": {
            "polymer": {
              "readOnly": true
            }
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "updateComplete",
          "type": "Promise",
          "description": "Returns a Promise that resolves when the element has completed updating.\nThe Promise value is a boolean that is `true` if the element completed the\nupdate without triggering another update. The Promise result is `false` if\na property was set inside `updated()`. If the Promise is rejected, an\nexception was thrown during the update. This getter can be implemented to\nawait additional state. For example, it is sometimes useful to await a\nrendered element before fulfilling this Promise. To do this, first await\n`super.updateComplete` then any subsequent state.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 542,
              "column": 4
            },
            "end": {
              "line": 544,
              "column": 5
            }
          },
          "metadata": {
            "polymer": {
              "readOnly": true
            }
          },
          "inheritedFrom": "UpdatingElement"
        }
      ],
      "methods": [
        {
          "name": "initialize",
          "description": "Performs element initialization. By default this calls `createRenderRoot`\nto create the element `renderRoot` node and captures any pre-set values for\nregistered properties.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 91,
              "column": 4
            },
            "end": {
              "line": 101,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "LitElement"
        },
        {
          "name": "_saveInstanceProperties",
          "description": "Fixes any properties set on the instance before upgrade time.\nOtherwise these would shadow the accessor and break these properties.\nThe properties are stored in a Map which is played back after the\nconstructor runs. Note, on very old versions of Safari (<=9) or Chrome\n(<=41), properties created for native platform properties like (`id` or\n`name`) may not have default values set in the element constructor. On\nthese browsers native properties appear on instances and therefore their\ndefault value will overwrite any element default (e.g. if the element sets\nthis.id = 'id' in the constructor, the 'id' will become '' since this is\nthe native platform default).",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 278,
              "column": 4
            },
            "end": {
              "line": 292,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_applyInstanceProperties",
          "description": "Applies previously saved instance properties.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 296,
              "column": 4
            },
            "end": {
              "line": 302,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "connectedCallback",
          "description": "",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 144,
              "column": 4
            },
            "end": {
              "line": 151,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "LitElement"
        },
        {
          "name": "disconnectedCallback",
          "description": "Allows for `super.disconnectedCallback()` in extensions while\nreserving the possibility of making non-breaking feature additions\nwhen disconnecting at some point in the future.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 319,
              "column": 4
            },
            "end": {
              "line": 320,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "attributeChangedCallback",
          "description": "Synchronizes property values when attributes change.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 324,
              "column": 4
            },
            "end": {
              "line": 328,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name"
            },
            {
              "name": "old"
            },
            {
              "name": "value"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_propertyToAttribute",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 329,
              "column": 4
            },
            "end": {
              "line": 356,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name"
            },
            {
              "name": "value"
            },
            {
              "name": "options",
              "defaultValue": "defaultPropertyDeclaration"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_attributeToProperty",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 357,
              "column": 4
            },
            "end": {
              "line": 375,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name"
            },
            {
              "name": "value"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_requestUpdate",
          "description": "This private version of `requestUpdate` does not access or return the\n`updateComplete` promise. This promise can be overridden and is therefore\nnot free to access.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 381,
              "column": 4
            },
            "end": {
              "line": 411,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name"
            },
            {
              "name": "oldValue"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "requestUpdate",
          "description": "Requests an update which is processed asynchronously. This should\nbe called when an element should update based on some state not triggered\nby setting a property. In this case, pass no arguments. It should also be\ncalled when manually implementing a property setter. In this case, pass the\nproperty `name` and `oldValue` to ensure that any configured property\noptions are honored. Returns the `updateComplete` Promise which is resolved\nwhen the update completes.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 425,
              "column": 4
            },
            "end": {
              "line": 428,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name",
              "description": "{PropertyKey} (optional) name of requesting property"
            },
            {
              "name": "oldValue",
              "description": "{any} (optional) old value of requesting property"
            }
          ],
          "return": {
            "type": "Promise",
            "desc": "A Promise that is resolved when the update completes."
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_enqueueUpdate",
          "description": "Sets up the element to asynchronously update.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 432,
              "column": 4
            },
            "end": {
              "line": 468,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "performUpdate",
          "description": "Performs an element update. Note, if an exception is thrown during the\nupdate, `firstUpdated` and `updated` will not be called.\n\nYou can override this method to change the timing of updates. If this\nmethod is overridden, `super.performUpdate()` must be called.\n\nFor instance, to schedule updates to occur just before the next frame:\n\n```\nprotected async performUpdate(): Promise<unknown> {\n  await new Promise((resolve) => requestAnimationFrame(() => resolve()));\n  super.performUpdate();\n}\n```",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 494,
              "column": 4
            },
            "end": {
              "line": 524,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_markUpdated",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 525,
              "column": 4
            },
            "end": {
              "line": 528,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "shouldUpdate",
          "description": "Controls whether or not `update` should be called when the element requests\nan update. By default, this method always returns `true`, but this can be\ncustomized to control when to update.\n\n* @param _changedProperties Map of changed properties with old values",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 552,
              "column": 4
            },
            "end": {
              "line": 554,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "_changedProperties"
            }
          ],
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "update",
          "description": "Updates the element. This method reflects property values to attributes\nand calls `render` to render DOM via lit-html. Setting properties inside\nthis method will *not* trigger another update.\n* @param _changedProperties Map of changed properties with old values",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 158,
              "column": 4
            },
            "end": {
              "line": 176,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "changedProperties"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "LitElement"
        },
        {
          "name": "updated",
          "description": "Invoked whenever the element is updated. Implement to perform\npost-updating tasks via DOM APIs, for example, focusing an element.\n\nSetting properties inside this method will trigger the element to update\nagain after this update cycle completes.\n\n* @param _changedProperties Map of changed properties with old values",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 581,
              "column": 4
            },
            "end": {
              "line": 582,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "_changedProperties"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "firstUpdated",
          "description": "Invoked when the element is first updated. Implement to perform one time\nwork on the element after update.\n\nSetting properties inside this method will trigger the element to update\nagain after this update cycle completes.\n\n* @param _changedProperties Map of changed properties with old values",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 592,
              "column": 4
            },
            "end": {
              "line": 593,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "_changedProperties"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "createRenderRoot",
          "description": "Returns the node into which the element should render and by default\ncreates and returns an open shadowRoot. Implement to customize where the\nelement's DOM is rendered. For example, to render into the element's\nchildNodes, return `this`.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 109,
              "column": 4
            },
            "end": {
              "line": 111,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "(Element | DocumentFragment)",
            "desc": "Returns a node into which to render."
          },
          "inheritedFrom": "LitElement"
        },
        {
          "name": "adoptStyles",
          "description": "Applies styling to the element shadowRoot using the `static get styles`\nproperty. Styling will apply using `shadowRoot.adoptedStyleSheets` where\navailable and will fallback otherwise. When Shadow DOM is polyfilled,\nShadyCSS scopes styles and adds them to the document. When Shadow DOM\nis available but `adoptedStyleSheets` is not, styles are appended to the\nend of the `shadowRoot` to [mimic spec\nbehavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 121,
              "column": 4
            },
            "end": {
              "line": 143,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "LitElement"
        },
        {
          "name": "render",
          "description": "",
          "privacy": "private",
          "sourceRange": {
            "start": {
              "line": 75,
              "column": 2
            },
            "end": {
              "line": 80,
              "column": 3
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "TemplateResult"
          }
        }
      ],
      "staticMethods": [
        {
          "name": "_ensureClassProperties",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 116,
              "column": 4
            },
            "end": {
              "line": 126,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "createProperty",
          "description": "Creates a property accessor on the element prototype if one does not exist.\nThe property setter calls the property's `hasChanged` property option\nor uses a strict identity check to determine whether or not to request\nan update.",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 134,
              "column": 4
            },
            "end": {
              "line": 164,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name"
            },
            {
              "name": "options",
              "defaultValue": "defaultPropertyDeclaration"
            }
          ],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "finalize",
          "description": "",
          "privacy": "public",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 47,
              "column": 4
            },
            "end": {
              "line": 55,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "return": {
            "type": "void"
          },
          "inheritedFrom": "LitElement"
        },
        {
          "name": "_attributeNameForProperty",
          "description": "Returns the property name for the given attribute `name`.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 210,
              "column": 4
            },
            "end": {
              "line": 217,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "name"
            },
            {
              "name": "options"
            }
          ],
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_valueHasChanged",
          "description": "Returns true if a property should request an update.\nCalled when a property value is set and uses the `hasChanged`\noption for the property if present or a strict identity check.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 224,
              "column": 4
            },
            "end": {
              "line": 226,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "value"
            },
            {
              "name": "old"
            },
            {
              "name": "hasChanged",
              "defaultValue": "notEqual"
            }
          ],
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_propertyValueFromAttribute",
          "description": "Returns the property value for the given attribute value.\nCalled via the `attributeChangedCallback` and uses the property's\n`converter` or `converter.fromAttribute` property option.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 233,
              "column": 4
            },
            "end": {
              "line": 238,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "value"
            },
            {
              "name": "options"
            }
          ],
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_propertyValueToAttribute",
          "description": "Returns the attribute value for the given property value. If this\nreturns undefined, the property will *not* be reflected to an attribute.\nIf this returns null, the attribute will be removed, otherwise the\nattribute will be set to the value.\nThis uses the property's `reflect` and `type.toAttribute` property options.",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lib/updating-element.js",
            "start": {
              "line": 247,
              "column": 4
            },
            "end": {
              "line": 256,
              "column": 5
            }
          },
          "metadata": {},
          "params": [
            {
              "name": "value"
            },
            {
              "name": "options"
            }
          ],
          "inheritedFrom": "UpdatingElement"
        },
        {
          "name": "_getUniqueStyles",
          "description": "",
          "privacy": "protected",
          "sourceRange": {
            "file": "../../../lit-element/lit-element.js",
            "start": {
              "line": 57,
              "column": 4
            },
            "end": {
              "line": 85,
              "column": 5
            }
          },
          "metadata": {},
          "params": [],
          "inheritedFrom": "LitElement"
        }
      ],
      "demos": [
        {
          "url": "demo/furo-vertical-flex.html",
          "description": ""
        }
      ],
      "metadata": {},
      "sourceRange": {
        "start": {
          "line": 24,
          "column": 0
        },
        "end": {
          "line": 82,
          "column": 1
        }
      },
      "privacy": "public",
      "superclass": "LitElement",
      "name": "FuroVerticalFlex",
      "attributes": [],
      "events": [],
      "styling": {
        "cssVariables": [],
        "selectors": []
      },
      "slots": [],
      "tagname": "furo-vertical-flex",
      "mixins": [
        "FBP"
      ]
    };


  }

  print(analysisElement) {

  }



  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    this._FBPTraceWires()

    this._FBPTriggerWire("--data", this.element);

  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
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
   */
  render() {
    // language=HTML

    return html`
      <h1>${this.element.name}</h1>
      <furo-markdown ƒ-parse-markdown="--data(*.description)" theme="coy"></furo-markdown>
    `;
  }
}

window.customElements.define('furo-doc-element', FuroDocElement);
