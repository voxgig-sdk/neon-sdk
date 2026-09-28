import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Region, RegionListMatch } from '../NeonTypes';
declare class RegionEntity extends NeonEntityBase<Region> {
    constructor(client: NeonSDK, entopts: any);
    make(this: RegionEntity): RegionEntity;
    list(this: any, reqmatch?: RegionListMatch, ctrl?: Control): Promise<RegionEntity[]>;
}
export { RegionEntity };
