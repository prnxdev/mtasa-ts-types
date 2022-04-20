/// <reference path='../classes/ACL.d.ts' />
/// <reference path='../classes/ACLGroup.d.ts' />
/// <reference path='../classes/MTAElement.d.ts' />

/** @noSelfInFile */

declare function aclCreate(name: string): ACL;

declare function aclCreateGroup(name: string): ACLGroup;

declare function aclDestroy(acl: ACL): boolean;

declare function aclDestroyGroup(aclGroup: ACLGroup): boolean;

declare function aclGet(name: string): ACL | null;

declare function aclGetGroup(name: string): ACLGroup | null;

declare function aclGetName(acl: ACL): string;

declare function aclGetRight(acl: ACL, rightName: string): boolean;

declare function aclGroupAddACL(aclGroup: ACLGroup, acl: ACL): boolean;

declare function aclGroupAddObject(
  aclGroup: ACLGroup,
  objectName: string
): boolean;

declare function aclGroupGetName(aclGroup: ACLGroup): string;

declare function aclGroupList(): ACLGroup[];

declare function aclGroupListACL(aclGroup: ACLGroup): ACL[];

declare function aclGroupListObjects(aclGroup: ACLGroup): string[];

declare function aclGroupRemoveACL(aclGroup: ACLGroup, acl: ACL): boolean;

declare function aclGroupRemoveObject(
  aclGroup: ACLGroup,
  objectString: string
): boolean;

declare function aclList(): ACL[];

declare function aclListRights(acl: ACL, allowedType: string): string[];

declare function aclReload(): boolean;

declare function aclRemoveRight(acl: ACL, rightName: string): boolean;

declare function aclSave(): void;

declare function aclSetRight(
  acl: ACL,
  rightName: string,
  hasAccess: boolean
): boolean;

declare function hasObjectPermissionTo(
  object: MTAElement | string,
  action: string,
  defaultPermission?: boolean
): boolean;

declare function isObjectInACLGroup(
  objectName: string,
  group: ACLGroup
): boolean;
