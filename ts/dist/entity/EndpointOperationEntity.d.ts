import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { EndpointOperation, EndpointOperationCreateData } from '../NeonTypes';
declare class EndpointOperationEntity extends NeonEntityBase<EndpointOperation> {
    constructor(client: NeonSDK, entopts: any);
    make(this: EndpointOperationEntity): EndpointOperationEntity;
    create(this: any, reqdata?: EndpointOperationCreateData, ctrl?: Control): Promise<EndpointOperationEntity>;
}
export { EndpointOperationEntity };
