import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { CreateCredential, CreateCredentialCreateData } from '../NeonTypes';
declare class CreateCredentialEntity extends NeonEntityBase<CreateCredential> {
    constructor(client: NeonSDK, entopts: any);
    make(this: CreateCredentialEntity): CreateCredentialEntity;
    create(this: any, reqdata?: CreateCredentialCreateData, ctrl?: Control): Promise<CreateCredentialEntity>;
}
export { CreateCredentialEntity };
