import { LitElement, html, css } from 'lit-element';

/**
 * `interval-pulse`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/interval-pulse.html
 * @appliesMixin FBP
 */
class IntervalPulse extends (LitElement) {

    constructor() {
        super();
        this.interval = 200;
        if(this.auto){
          this.start();
        }
    }


  static get properties() {
    return {
      interval: {type: Number, value: 200, observer: '_interval'},
      takt: {type: Number, value: 4},
      /**
       * Starts interval automatically
       */
      auto:Boolean
    }
  }

  start() {


    let cnt = 0;
    let tick = 'tick';
    clearInterval(this._intervalObject);
    this._intervalObject = setInterval(() => {
      let pos = cnt++ % this.takt;
      /**
       * Fired when interval is
       * detail payload: position
       * @event tick
       */
      let customEvent = new Event('tick', {bubbles: true});
      customEvent.detail = pos;
      this.dispatchEvent(customEvent);

      if (pos == 0) {
        /**
         * Fired when tock
         * detail payload: position
         * @event tick
         */
        let customEvent = new Event('tock', {bubbles: true});
        customEvent.detail = pos;
        this.dispatchEvent(customEvent);
      }

    }, this.interval)
  }

  stop() {
    clearInterval(this._intervalObject);
  }
}

window.customElements.define('interval-pulse', IntervalPulse);
