/// <reference path='../../shared/enums/BodyPart.d.ts' />
/// <reference path='../../shared/enums/ClothesType.d.ts' />

/** @noSelfInFile */

declare function getBodyPartName(bodyPart: BodyPart): string;

declare function getClothesByTypeIndex(
  clothesType: ClothesType,
  index: number
): LuaMultiReturn<[string, string]>;

declare function getClothesTypeName(clothesType: ClothesType): string;

declare function getTypeIndexFromClothes(
  clothesTexture: string,
  clothesModel: string
): LuaMultiReturn<[number, number]>;
