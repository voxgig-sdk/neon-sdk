import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { EmailProvider, EmailProviderLoadMatch } from '../NeonTypes';
declare class EmailProviderEntity extends NeonEntityBase<EmailProvider> {
    constructor(client: NeonSDK, entopts: any);
    make(this: EmailProviderEntity): EmailProviderEntity;
    load(this: any, reqmatch?: EmailProviderLoadMatch, ctrl?: Control): Promise<EmailProviderEntity>;
}
export { EmailProviderEntity };
