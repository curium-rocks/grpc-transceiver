import { ISettings } from "@curium.rocks/data-emitter-base";
import { GrpcTransceiver, GrpcTransceiverClient } from "./grpcTransceiver";

/**
 * Builds a grpc-transceiver.
 */
export class GrpcTransceiverFactory {
    
    /**
     * 
     * @param {ISettings} settings 
     * @return {Promise<ICompoundDataEmitter>}
     */
    buildTransceiver(settings: ISettings): Promise<GrpcTransceiver> {
        const result =  new GrpcTransceiverClient(settings);
        return Promise.resolve(result);
    }
}