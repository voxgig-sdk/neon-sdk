import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Endpoint, EndpointLoadMatch, EndpointListMatch, EndpointCreateData, EndpointUpdateData, EndpointRemoveMatch } from '../NeonTypes';
declare class EndpointEntity extends NeonEntityBase<Endpoint> {
    constructor(client: NeonSDK, entopts: any);
    make(this: EndpointEntity): EndpointEntity;
    load(this: any, reqmatch?: EndpointLoadMatch, ctrl?: Control): Promise<EndpointEntity>;
    list(this: any, reqmatch?: EndpointListMatch, ctrl?: Control): Promise<EndpointEntity[]>;
    create(this: any, reqdata?: EndpointCreateData, ctrl?: Control): Promise<EndpointEntity>;
    update(this: any, reqdata?: EndpointUpdateData, ctrl?: Control): Promise<EndpointEntity>;
    remove(this: any, reqmatch?: EndpointRemoveMatch, ctrl?: Control): Promise<EndpointEntity>;
}
export { EndpointEntity };
