import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthWebhookConfig, NeonAuthWebhookConfigListMatch, NeonAuthWebhookConfigUpdateData } from '../NeonTypes';
declare class NeonAuthWebhookConfigEntity extends NeonEntityBase<NeonAuthWebhookConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthWebhookConfigEntity): NeonAuthWebhookConfigEntity;
    list(this: any, reqmatch?: NeonAuthWebhookConfigListMatch, ctrl?: Control): Promise<NeonAuthWebhookConfigEntity[]>;
    update(this: any, reqdata?: NeonAuthWebhookConfigUpdateData, ctrl?: Control): Promise<NeonAuthWebhookConfigEntity>;
}
export { NeonAuthWebhookConfigEntity };
