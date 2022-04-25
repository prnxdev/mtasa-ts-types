/// <reference path='../classes/Player.d.ts' />

/** @noSelfInFile */

declare function isCursorShowing(player: Player): boolean;

declare function showCursor(
  player: Player,
  show: boolean,
  toggleControls?: boolean
): boolean;
