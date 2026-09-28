import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { DataApi, DataApiLoadMatch, DataApiCreateData, DataApiUpdateData, DataApiRemoveMatch } from '../NeonTypes';
declare class DataApiEntity extends NeonEntityBase<DataApi> {
    constructor(client: NeonSDK, entopts: any);
    make(this: DataApiEntity): DataApiEntity;
    load(this: any, reqmatch?: DataApiLoadMatch, ctrl?: Control): Promise<DataApiEntity>;
    create(this: any, reqdata?: DataApiCreateData, ctrl?: Control): Promise<DataApiEntity>;
    update(this: any, reqdata?: DataApiUpdateData, ctrl?: Control): Promise<DataApiEntity>;
    remove(this: any, reqmatch?: DataApiRemoveMatch, ctrl?: Control): Promise<DataApiEntity>;
}
export { DataApiEntity };
