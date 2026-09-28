import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { AvailablePreloadLibrary, AvailablePreloadLibraryListMatch } from '../NeonTypes';
declare class AvailablePreloadLibraryEntity extends NeonEntityBase<AvailablePreloadLibrary> {
    constructor(client: NeonSDK, entopts: any);
    make(this: AvailablePreloadLibraryEntity): AvailablePreloadLibraryEntity;
    list(this: any, reqmatch?: AvailablePreloadLibraryListMatch, ctrl?: Control): Promise<AvailablePreloadLibraryEntity[]>;
}
export { AvailablePreloadLibraryEntity };
