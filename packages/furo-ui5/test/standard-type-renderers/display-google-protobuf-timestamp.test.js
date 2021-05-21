import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../../src/standard-type-renderers/display-google-protobuf-timestamp.js';
import { Env } from '@furo/framework';

describe('display-google-protobuf-timestamp', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-google-protobuf-timestamp
            ƒ-bind-data="--dao(*.google_timestamp)"
          ></display-google-protobuf-timestamp>
          <furo-data-object type="experiment.Experiment" @-object-ready="--dao"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, display, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await display.updateComplete;
    await dao.updateComplete;
  });

  it('should be a display-google-protobuf-timestamp element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-google-protobuf-timestamp');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data. Empty value', done => {
    Env.locale = 'de';
    dao.injectRaw({ google_timestamp: { seconds: 0, nanos: 0 } });
    setTimeout(() => {
      assert.equal(display._displayValue, '');

      done();
    }, 110);
  });

  it('should show template according to the value of the data.', done => {
    Env.locale = 'de';
    dao.injectRaw({ google_timestamp: { seconds: 1621577867, nanos: 600000 } });
    setTimeout(() => {
      assert.equal(display._displayValue, '21.05.2021, 08:17:47');

      done();
    }, 110);
  });

  it('should handle timestamp string according RFC 3339', done => {
    Env.locale = 'de';
    dao.injectRaw({ google_timestamp: '2014-07-30T10:43:17Z' });
    setTimeout(() => {
      assert.equal(display._displayValue, '30.07.2014, 12:43:17');

      done();
    }, 110);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
