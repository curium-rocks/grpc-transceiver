import { describe, it} from 'mocha';
import { expect } from 'chai';
import { ISettings } from '@curium.rocks/data-emitter-base';
import { GrpcTransceiver } from '../src/grpcTransceiver';
import { GrpcTransceiverFactory } from '../src/grpcTransceiverFactory';
import { PingPongEmitter } from '@curium.rocks/ping-pong-emitter';
import exp from 'constants';

const defaultOptions : ISettings = {
    id: 'TEST_ID',
    name: 'TEST_NAME',
    description: 'TEST_DESCRIPTION',
    additional: {}
}


const defaultFactory = new GrpcTransceiverFactory();

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
    describe('getEmitters()', async function() {
        it('Should return a list of emitters', async function() {
            const transceiver:GrpcTransceiver = await defaultFactory.buildTransceiver(defaultOptions);
            const emitter =  new PingPongEmitter('test-ping-pong', 'test-ping-pong', 'test-ping-pong', 350);
            try {
                const emitters = transceiver.getEmitters();
                expect(emitters).to.be.an('array');
                expect(emitters.length).to.be.eq(0);
                await transceiver.addDataEmitter(emitter);
                expect(transceiver.getEmitters().length).to.be.eq(1);
                expect(transceiver.getEmitters()[0]).to.be.eq(emitter);
            } finally {
                emitter.dispose();
                await transceiver.disposeAsync();
            }
        });
    });
    describe('getIndividualEmitter()', async function() {
        it('Should fetch the specified emitter', async function() {
            const transceiver:GrpcTransceiver = await defaultFactory.buildTransceiver(defaultOptions);
            const emitter =  new PingPongEmitter('test-ping-pong', 'test-ping-pong', 'test-ping-pong', 350);
            try {
                await transceiver.addDataEmitter(emitter);
                const retEmitter = transceiver.getIndividualEmitter(emitter.id);
                expect(emitter).to.be.eq(retEmitter);
            } finally {
                emitter.dispose();
                await transceiver.disposeAsync();
            }
        });
    })
});