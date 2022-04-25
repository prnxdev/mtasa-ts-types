/// <reference path='../../shared/enums/BlipIcon.d.ts' />
/// <reference path='../classes/MTAElement.d.ts' />
/// <reference path='../classes/Blip.d.ts' />

/** @noSelfInFile */

declare function createBlip(
  x: number,
  y: number,
  z: number,
  icon?: BlipIcon,
  red?: number,
  green?: number,
  blue?: number,
  alpha?: number,
  ordering?: number,
  visibleDistance?: number,
  visibleTo?: MTAElement
): Blip;

declare function createBlipAttachedTo(
  elementToAttachTo: MTAElement,
  icon?: BlipIcon,
  red?: number,
  green?: number,
  blue?: number,
  alpha?: number,
  ordering?: number,
  visibleDistance?: number,
  visibleTo?: MTAElement
): Blip;

declare function getBlipColor(
  blip: Blip
): LuaMultiReturn<[number, number, number, number]>;

declare function getBlipIcon(blip: Blip): BlipIcon;

declare function getBlipOrdering(blip: Blip): number;

declare function getBlipSize(blip: Blip): number;

declare function getBlipVisibleDistance(blip: Blip): number;

declare function setBlipColor(
  blip: Blip,
  red: number,
  green: number,
  blue: number
): boolean;

declare function setBlipIcon(blip: Blip, icon: BlipIcon): boolean;

declare function setBlipOrdering(blip: Blip, ordering: number): boolean;

declare function setBlipSize(blip: Blip, size: number): boolean;

declare function setBlipVisibleDistance(
  blip: Blip,
  visibleDistance: number
): boolean;
