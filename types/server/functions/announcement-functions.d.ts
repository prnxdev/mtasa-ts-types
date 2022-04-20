/** @noSelfInFile */

declare function getGameType(): string;

declare function getMapName(): string;

declare function getRuleValue(key: string): string;

declare function removeRuleValue(key: string): boolean;

declare function setGameType(gameType: string): boolean;

declare function setMapName(mapName: string): boolean;

declare function setRuleValue(key: string, value: string): boolean;