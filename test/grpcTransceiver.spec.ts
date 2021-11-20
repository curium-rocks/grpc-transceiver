import { describe, it} from 'mocha';
import { expect } from 'chai';

describe( 'GrpcTransceiver', function() {
    describe( 'addDataEmitter()', function() {
        it( 'Should propagate data events to existing listeners', function() {
            expect(false).to.be.true;
        });
        it('Should propagate status events to existing listeners', function() {
            expect(false).to.be.true;
        });
        it('Should provide a IDisposable object that breaks subscriptions', function() {
            expect(false).to.be.true;
        });
        it('Should propagate events to other end of transceiver', function() {
            expect(false).to.be.true;
        })
    });
    describe('sendCommand()', function(){
        it('Should propagate commmand to emitter on other end of transceiver', function() {
            expect(false).to.be.true;
        });
    });
    describe('applySettings()', function(){
        it('Should propagate settings to emitter on other end of transceiver', function() {
            expect(false).to.be.true;
        });
    });
    describe('probeStatus()', function(){
        it('Should fetch status to from emmiter on other end of transceiver', function() {
            expect(false).to.be.true;
        });
    });
    describe('onStatus()', function(){
        it('Should register a listener that will receive status events', function() {
            expect(false).to.be.true;
        });
    });
    describe('onData()', function(){
        it('Should register a listener that will receive data events', function() {
            expect(false).to.be.true;
        });
    });
    describe('dispose()', function() {
        it('Should break subscriptions', function() {
            expect(false).to.be.true;
        });
    });
    describe('probeCurrentData()', function(){
        it('Should fetch current data from emmiter on other end of transceiver', function() {
            expect(false).to.be.true;
        });
    });
});