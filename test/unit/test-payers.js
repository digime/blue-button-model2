"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/payers');

var expect = chai.expect;

describe('payers unit tests', function () {
    it('sample valid_0', function () {
        bbm.validator.validateComponent(samples.valid_0, 'payers');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample valid_1', function () {
        bbm.validator.validateComponent(samples.valid_1, 'payers');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateComponent(samples.invalid_0, 'payers');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(3);
        var c2p = util.errorsToCodePathMap(result.errors);
        expect(c2p.OBJECT_REQUIRED).to.have.length(1);
        expect(c2p.OBJECT_REQUIRED[0]).to.equal("#/[0]");
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).to.equal("#/[0]/policy/insurance");
        expect(c2p.INVALID_TYPE).to.have.length(1);
        expect(c2p.INVALID_TYPE[0]).to.equal("#/[0]/authorization");
    });
});
