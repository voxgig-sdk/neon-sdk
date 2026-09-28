import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Credential, CredentialListMatch, CredentialCreateData, CredentialRemoveMatch } from '../NeonTypes';
declare class CredentialEntity extends NeonEntityBase<Credential> {
    constructor(client: NeonSDK, entopts: any);
    make(this: CredentialEntity): CredentialEntity;
    list(this: any, reqmatch?: CredentialListMatch, ctrl?: Control): Promise<CredentialEntity[]>;
    create(this: any, reqdata?: CredentialCreateData, ctrl?: Control): Promise<CredentialEntity>;
    remove(this: any, reqmatch?: CredentialRemoveMatch, ctrl?: Control): Promise<CredentialEntity>;
}
export { CredentialEntity };
