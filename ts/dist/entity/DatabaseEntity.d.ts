import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Database, DatabaseLoadMatch, DatabaseListMatch, DatabaseCreateData, DatabaseUpdateData, DatabaseRemoveMatch } from '../NeonTypes';
declare class DatabaseEntity extends NeonEntityBase<Database> {
    constructor(client: NeonSDK, entopts: any);
    make(this: DatabaseEntity): DatabaseEntity;
    load(this: any, reqmatch?: DatabaseLoadMatch, ctrl?: Control): Promise<DatabaseEntity>;
    list(this: any, reqmatch?: DatabaseListMatch, ctrl?: Control): Promise<DatabaseEntity[]>;
    create(this: any, reqdata?: DatabaseCreateData, ctrl?: Control): Promise<DatabaseEntity>;
    update(this: any, reqdata?: DatabaseUpdateData, ctrl?: Control): Promise<DatabaseEntity>;
    remove(this: any, reqmatch?: DatabaseRemoveMatch, ctrl?: Control): Promise<DatabaseEntity>;
}
export { DatabaseEntity };
