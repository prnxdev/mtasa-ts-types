/// <reference path='../classes/Account.d.ts' />
/// <reference path='../classes/Player.d.ts' />

/** @noSelfInFile */

declare function addAccount(
  username: string,
  password: string,
  allowCaseVariations?: boolean
): Account | null;

declare function copyAccountData(
  targetAccount: Account,
  sourceAccount: Account
): boolean;

declare function getAccount(
  username: string,
  password?: string,
  caseSensitive?: boolean
): Account | null;

declare function getAccountData(account: Account, key: string): string | null;

declare function getAccountName(acount: Account): string | null;

declare function getAccountPlayer(account: Account): Player | null;

declare function getAccountSerial(account: Account): string | null;

declare function getAccounts(): Account[];

declare function getAccountsBySerial(serial: string): Account[];

declare function getAllAccountData(account: Account): { [key: string]: any };

declare function getPlayerAccount(player: Player): Account | null;

declare function isGuestAccount(account: Account): boolean;

declare function logIn(
  player: Player,
  account: Account,
  password: string
): boolean;

declare function logOut(player: Player): boolean;

declare function removeAccount(account: Account): boolean;

declare function setAccountData(
  account: Account,
  key: string,
  value: any
): boolean;

declare function setAccountPassword(
  account: Account,
  password: string
): boolean;

declare function getAccountByID(id: number): Account | null;

declare function getAccountID(account: Account): number | null;

declare function getAccountIP(account: Account): string | null;

declare function getAccountsByData(dataName: string, value: string): Account[];

declare function getAccountsByIP(ip: string): Account[];

declare function setAccountName(account: Account, name: string): boolean;
