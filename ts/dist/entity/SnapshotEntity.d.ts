import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Snapshot, SnapshotListMatch, SnapshotCreateData, SnapshotUpdateData, SnapshotRemoveMatch } from '../NeonTypes';
declare class SnapshotEntity extends NeonEntityBase<Snapshot> {
    constructor(client: NeonSDK, entopts: any);
    make(this: SnapshotEntity): SnapshotEntity;
    list(this: any, reqmatch?: SnapshotListMatch, ctrl?: Control): Promise<SnapshotEntity[]>;
    create(this: any, reqdata?: SnapshotCreateData, ctrl?: Control): Promise<SnapshotEntity>;
    update(this: any, reqdata?: SnapshotUpdateData, ctrl?: Control): Promise<SnapshotEntity>;
    remove(this: any, reqmatch?: SnapshotRemoveMatch, ctrl?: Control): Promise<SnapshotEntity>;
}
export { SnapshotEntity };
