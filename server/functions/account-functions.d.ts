/// <reference path='../classes/Account.d.ts' />
/// <reference path='../classes/Player.d.ts' />

/** @noSelfInFile */

export declare function addAccount(
  username: string,
  password: string,
  allowCaseVariations?: boolean
): Account | null;

export declare function copyAccountData(
  targetAccount: Account,
  sourceAccount: Account
): boolean;

export declare function getAccount(
  username: string,
  password?: string,
  caseSensitive?: boolean
): Account | null;

export declare function getAccountData(account: Account, key: string): string | null;

export declare function getAccountName(acount: Account): string | null;

export declare function getAccountPlayer(account: Account): Player | null;

export declare function getAccountSerial(account: Account): string | null;

export declare function getAccounts(): Account[];

export declare function getAccountsBySerial(serial: string): Account[];

export declare function getAllAccountData(account: Account): { [key: string]: any };

export declare function getPlayerAccount(player: Player): Account | null;

export declare function isGuestAccount(account: Account): boolean;

export declare function logIn(
  player: Player,
  account: Account,
  password: string
): boolean;

export declare function logOut(player: Player): boolean;

export declare function removeAccount(account: Account): boolean;

export declare function setAccountData(
  account: Account,
  key: string,
  value: any
): boolean;

export declare function setAccountPassword(
  account: Account,
  password: string
): boolean;

export declare function getAccountByID(id: number): Account | null;

export declare function getAccountID(account: Account): number | null;

export declare function getAccountIP(account: Account): string | null;

export declare function getAccountsByData(dataName: string, value: string): Account[];

export declare function getAccountsByIP(ip: string): Account[];

export declare function setAccountName(account: Account, name: string): boolean;
