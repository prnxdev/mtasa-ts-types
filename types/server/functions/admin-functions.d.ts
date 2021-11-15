/// <reference path="../classes/Ban.d.ts" />
/// <reference path="../classes/Player.d.ts" />
/// <reference path="../variables.d.ts" />

/** @noSelfInFile */

declare function addBan(ip: string, responsibleElement: MTARootElement | Player, reason: string, seconds: number): Ban;
declare function addBan(username: string, responsibleElement: MTARootElement | Player, reason: string, seconds: number): Ban;
declare function addBan(serial: string, responsibleElement: MTARootElement | Player, reason: string, seconds: number): Ban;

declare function banPlayer(bannedPlayer: Player, bannedByIP?: boolean, bannedByUsername?: boolean, bannedBySerial?: boolean, responsibleElement?: MTARootElement | Player, reason?: string, seconds?: number): Ban;

declare function getBanAdmin(ban: Ban): string | null;

declare function getBanIP(ban: Ban): string | null;

declare function getBanNick(ban: Ban): string | null;

declare function getBanReason(ban: Ban): string | null;

declare function getBanSerial(ban: Ban): string | null;

declare function getBanTime(ban: Ban): number | null;

declare function getBans(): Ban[];

declare function getUnbanTime(ban: Ban): number | null;

declare function isBan(element: MTAElement): boolean;

declare function kickPlayer(player: Player, reason?: string): boolean;
declare function kickPlayer(player: Player, responsibleElement?: MTARootElement | Player, reason?: string): boolean;

declare function setBanAdmin(ban: Ban, adminName: string): boolean;

declare function setBanNick(ban: Ban, nick: string): boolean;

declare function setBanReason(ban: Ban, reason: string): boolean;

declare function setUnbanTime(ban: Ban, unbanTime: number): boolean;

declare function reloadBans(): void;

declare function removeBan(ban: Ban, responsibleElement?: MTARootElement | Player): boolean;