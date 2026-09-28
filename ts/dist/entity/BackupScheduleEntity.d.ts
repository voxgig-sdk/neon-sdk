import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BackupSchedule, BackupScheduleListMatch } from '../NeonTypes';
declare class BackupScheduleEntity extends NeonEntityBase<BackupSchedule> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BackupScheduleEntity): BackupScheduleEntity;
    list(this: any, reqmatch?: BackupScheduleListMatch, ctrl?: Control): Promise<BackupScheduleEntity[]>;
}
export { BackupScheduleEntity };
