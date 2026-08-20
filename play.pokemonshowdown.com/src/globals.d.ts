/* eslint-disable @typescript-eslint/consistent-type-imports */

// dex data
///////////

type AnyObject = { [k: string]: any };
declare const BattleText: { [id: string]: { [templateName: string]: string } };
declare const BattleFormats: { [id: string]: import('./panel-teamdropdown').FormatData };
declare const BattlePokedex: { [id: string]: AnyObject };
declare const BattleMovedex: { [id: string]: AnyObject };
declare const BattleAbilities: { [id: string]: AnyObject };
declare const BattleItems: { [id: string]: AnyObject };
declare const BattleAliases: { [id: string]: string };
declare const BattleStatuses: { [id: string]: AnyObject };
declare const BattlePokemonSprites: { [id: string]: AnyObject };
declare const BattlePokemonSpritesBW: { [id: string]: AnyObject };
declare const NonBattleGames: { [id: string]: string };
/** Fasher Draft League: species name -> point cost, generated from config/fasher-draft-points.ts (server repo). */
declare const FasherDraftPoints: { [species: string]: number };
/** Fasher Draft League: total points a player has to spend drafting a team. */
declare const FasherDraftBudget: number;
/** Fasher Draft League: of the total budget, the most that may be spent (post-tax) on Tera Captain(s). */
declare const FasherCaptainBudget: number;
/** Fasher Draft League: species names banned from using Tera, generated from config/fasher-draft-tera-banlist.ts (server repo). */
declare const FasherTeraBanlist: string[];

// Window
/////////

interface Window {
	[k: string]: any;
}
