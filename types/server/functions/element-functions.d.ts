/// <reference path='../variables.d.ts' />
/// <reference path='../classes/Player.d.ts' />
/// <reference path='../classes/Marker.d.ts' />
/// <reference path='../classes/ColShape.d.ts' />
/// <reference path='../classes/MTAElement.d.ts' />
/// <reference path='../../shared/enums/RotationOrder.d.ts' />

/** @noSelfInFile */

declare function addElementDataSubscriber(
  element: MTAElement,
  key: string,
  player: Player
): void;

declare function attachElements(
  element: MTAElement,
  attachToElement: MTAElement,
  xPosOffset?: number,
  yPosOffset?: number,
  zPosOffset?: number,
  xRotOffset?: number,
  yRotOffset?: number,
  zRotOffset?: number
): boolean;

declare function clearElementVisibleTo(element: MTAElement): boolean;

declare function cloneElement(
  element: MTAElement,
  xPos?: number,
  yPos?: number,
  zPos?: number,
  cloneChildren?: boolean
): MTAElement;

declare function createElement(elementType: string, id: string): MTAElement;

declare function destroyElement(element: MTAElement): boolean;

declare function detachElements(
  element: MTAElement,
  elementToDetach?: MTAElement
): boolean;

declare function getAllElementData<T>(element: MTAElement): T[];

declare function getAttachedElements(element: MTAElement): MTAElement[];

declare function getElementAlpha(element: MTAElement): number;

declare function getElementAttachedOffsets(
  element: MTAElement
): LuaMultiReturn<[number, number, number, number, number, number]>;

declare function getElementAttachedTo(
  element: MTAElement
): MTAElement | undefined;

declare function getElementCollisionsEnabled(element: MTAElement): boolean;

declare function getElementByID(id: string): MTAElement | undefined;

declare function getElementByIndex(
  type: string,
  index: number
): MTAElement | undefined;

declare function getElementChild(
  element: MTAElement,
  index: number
): MTAElement | undefined;

declare function getElementChildren(
  element: MTAElement,
  type?: string
): MTAElement[];

declare function getElementChildrenCount(element: MTAElement): number;

declare function getElementColShape(element: MTAElement): ColShape | undefined;

declare function getElementData(
  element: MTAElement,
  key: string,
  inherit?: boolean
): unknown;

declare function getElementDimension(element: MTAElement): number;

declare function getElementHealth(element: MTAElement): number;

declare function getElementID(element: MTAElement): string;

declare function getElementInterior(element: MTAElement): number;

declare function getElementMatrix(
  element: MTAElement,
  legacy?: boolean
): number[][];

declare function getElementModel(element: MTAElement): number;

declare function getElementParent(element: MTAElement): MTAElement | undefined;

declare function getElementPosition(
  element: MTAElement
): LuaMultiReturn<[number, number, number]>;

declare function getElementRotation(
  element: MTAElement,
  order?: RotationOrder
): LuaMultiReturn<[number, number, number]>;

declare function getElementSyncer(element: MTAElement): MTAElement | undefined;

declare function getElementType(element: MTAElement): string;

declare function getElementVelocity(
  element: MTAElement
): LuaMultiReturn<[number, number, number]>;

declare function getElementZoneName(
  element: MTAElement,
  citiesOnly?: boolean
): string;

declare function getElementsByType<T = MTAElement>(
  type: string,
  startAt?: MTAElement
): T[];

declare function getElementsWithinColShape(
  colShape: ColShape,
  elementType?: string
): MTAElement[];

declare function getElementsWithinRange(
  x: number,
  y: number,
  z: number,
  range: number,
  elementType?: string,
  interior?: number,
  dimension?: number
): MTAElement[];

declare function getLowLODElement(element: MTAElement): MTAElement | undefined;

declare function getRootElement(): MTARootElement;

declare function hasElementData(
  element: MTAElement,
  key: string,
  inherit?: boolean
): boolean;

declare function hasElementDataSubscriber(
  element: MTAElement,
  key: string,
  player: Player
): boolean;

declare function isElement(value: unknown): boolean;

declare function isElementAttached(element: MTAElement): boolean;

declare function isElementCallPropagationEnabled(element: MTAElement): boolean;

declare function isElementDoubleSided(element: MTAElement): boolean;

declare function isElementFrozen(element: MTAElement): boolean;

declare function isElementInWater(element: MTAElement): boolean;

declare function isElementLowLOD(element: MTAElement): boolean;

declare function isElementVisibleTo(
  element: MTAElement,
  visibleTo: MTAElement
): boolean;

declare function isElementWithinColShape(
  element: MTAElement,
  colShape: ColShape
): boolean;

declare function isElementWithinMarker(
  element: MTAElement,
  marker: Marker
): boolean;

declare function removeElementData(element: MTAElement, key: string): boolean;

declare function removeElementDataSubscriber(
  element: MTAElement,
  key: string,
  player: Player
): boolean;

declare function setElementAlpha(element: MTAElement, alpha: number): boolean;

declare function setElementAngularVelocity(
  element: MTAElement,
  rx: number,
  ry: number,
  rz: number
): void;

declare function getElementAngularVelocity(
  element: MTAElement
): LuaMultiReturn<[number, number, number]>;

declare function setElementAttachedOffsets(
  element: MTAElement,
  xPosOffset?: number,
  yPosOffset?: number,
  zPosOffset?: number,
  xRotOffset?: number,
  yRotOffset?: number,
  zRotOffset?: number
): boolean;

declare function setElementCallPropagationEnabled(
  element: MTAElement,
  enabled: boolean
): boolean;

declare function setElementCollisionsEnabled(
  element: MTAElement,
  enabled: boolean
): boolean;

declare function setElementData(
  element: MTAElement,
  key: string,
  value: unknown,
  synchronize?: boolean
): boolean;

declare function setElementDimension(
  element: MTAElement,
  dimension: number
): boolean;

declare function setElementDoubleSided(
  element: MTAElement,
  doubleSided: boolean
): boolean;

declare function setElementFrozen(
  element: MTAElement,
  frozen: boolean
): boolean;

declare function setElementHealth(element: MTAElement, health: number): boolean;

declare function setElementID(element: MTAElement, id: string): boolean;

declare function setElementInterior(
  element: MTAElement,
  interior: number,
  x?: number,
  y?: number,
  z?: number
): boolean;

declare function setElementModel(element: MTAElement, model: number): boolean;

declare function setElementParent(
  element: MTAElement,
  parent: MTAElement
): boolean;

declare function setElementPosition(
  element: MTAElement,
  x: number,
  y: number,
  z: number
): boolean;

declare function setElementRotation(
  element: MTAElement,
  rx: number,
  ry: number,
  rz: number
): boolean;

declare function setElementSyncer(element: MTAElement, syncer: Player): boolean;

declare function setElementVelocity(
  element: MTAElement,
  speedX: number,
  speedY: number,
  speedZ: number
): boolean;

declare function setElementVisibleTo(
  element: MTAElement,
  visibleTo: MTAElement,
  visible: boolean
): boolean;

declare function setLowLODElement(
  element: MTAElement,
  lowLODElement: MTAElement
): boolean;
