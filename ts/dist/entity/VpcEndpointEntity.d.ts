import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { VpcEndpoint, VpcEndpointLoadMatch, VpcEndpointListMatch } from '../NeonTypes';
declare class VpcEndpointEntity extends NeonEntityBase<VpcEndpoint> {
    constructor(client: NeonSDK, entopts: any);
    make(this: VpcEndpointEntity): VpcEndpointEntity;
    load(this: any, reqmatch?: VpcEndpointLoadMatch, ctrl?: Control): Promise<VpcEndpointEntity>;
    list(this: any, reqmatch?: VpcEndpointListMatch, ctrl?: Control): Promise<VpcEndpointEntity[]>;
}
export { VpcEndpointEntity };
