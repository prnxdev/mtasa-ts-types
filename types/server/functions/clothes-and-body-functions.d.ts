/// <reference path='../../shared/enums/BodyPart.d.ts' />
/// <reference path='../../shared/enums/ClothesType.d.ts' />

/** @noSelfInFile */

declare function getBodyPartName(bodyPart: BodyPart): string;

/** @tupleReturn */
declare function getClothesByTypeIndex(
  clothesType: ClothesType,
  index: number
): [string, string];

declare function getClothesTypeName(clothesType: ClothesType): string;

/** @tupleReturn */
declare function getTypeIndexFromClothes(
  clothesTexture: string,
  clothesModel: string
): [number, number];
