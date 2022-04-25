/// <reference path='../classes/Player.d.ts' />
/// <reference path='../classes/MTAElement.d.ts' />

/** @noSelfInFile */

declare function fadeCamera(
  player: Player,
  fadeIn: boolean,
  timeToFade?: number,
  red?: number,
  green?: number,
  blue?: number
): boolean;

declare function getCameraInterior(player: Player): number;

declare function getCameraMatrix(
  player: Player
): LuaMultiReturn<
  [number, number, number, number, number, number, number, number]
>;

declare function getCameraTarget(player: Player): MTAElement;

declare function setCameraInterior(player: Player, interior: number): boolean;

// ( player thePlayer, float positionX, float positionY, float positionZ [, float lookAtX, float lookAtY, float lookAtZ, float roll = 0, float fov = 70 ] )
declare function setCameraMatrix(
  player: Player,
  positionX: number,
  positionY: number,
  positionZ: number,
  lookAtX?: number,
  lookAtY?: number,
  lookAtZ?: number,
  roll?: number,
  fov?: number
): boolean;

declare function setCameraTarget(player: Player, target: Player): boolean;
