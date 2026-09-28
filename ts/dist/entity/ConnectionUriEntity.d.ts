import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ConnectionUri, ConnectionUriLoadMatch } from '../NeonTypes';
declare class ConnectionUriEntity extends NeonEntityBase<ConnectionUri> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ConnectionUriEntity): ConnectionUriEntity;
    load(this: any, reqmatch?: ConnectionUriLoadMatch, ctrl?: Control): Promise<ConnectionUriEntity>;
}
export { ConnectionUriEntity };
