import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Member, MemberLoadMatch, MemberUpdateData, MemberRemoveMatch } from '../NeonTypes';
declare class MemberEntity extends NeonEntityBase<Member> {
    constructor(client: NeonSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    load(this: any, reqmatch?: MemberLoadMatch, ctrl?: Control): Promise<MemberEntity>;
    update(this: any, reqdata?: MemberUpdateData, ctrl?: Control): Promise<MemberEntity>;
    remove(this: any, reqmatch?: MemberRemoveMatch, ctrl?: Control): Promise<MemberEntity>;
}
export { MemberEntity };
