import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { EmailServer, EmailServerLoadMatch } from '../NeonTypes';
declare class EmailServerEntity extends NeonEntityBase<EmailServer> {
    constructor(client: NeonSDK, entopts: any);
    make(this: EmailServerEntity): EmailServerEntity;
    load(this: any, reqmatch?: EmailServerLoadMatch, ctrl?: Control): Promise<EmailServerEntity>;
}
export { EmailServerEntity };
