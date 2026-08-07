/**
 * Fasher Draft League - info page (description, spreadsheet, YouTube playlist)
 */
import { PS } from "./client-main";
import { PSPanelWrapper, PSRoomPanel } from "./panels";

class FasherLeaguePanel extends PSRoomPanel {
	static readonly id = 'fasherleague';
	static readonly routes = ['fasherleague'];
	static readonly icon = <i class="fa fa-trophy" aria-hidden></i>;
	static readonly title = 'Fasher Draft League';

	override render() {
		const { room } = this.props;

		return <PSPanelWrapper room={room}>
			<div className="pad">
				<h2>Fasher Draft League</h2>
				<hr />
				<p>
					{/* TODO: replace with real league description */}
					The Fasher Draft League is a Pokémon draft league run on this server. Each season, {}
					players draft a box of Pokémon within a shared points budget and build teams from {}
					that pool to compete against each other over the course of the season.
				</p>
				<ul>
					<li>
						{/* TODO: replace href="#" with the real spreadsheet URL once it's ready */}
						League Spreadsheet <small>(link coming soon)</small>
					</li>
					<li>
						<a href="https://youtube.com/playlist?list=PLf9KkqHHTpZ4&si=X0pshTfFYqrVpRig" target="_blank">
							YouTube Playlists
						</a>
					</li>
				</ul>
			</div>
		</PSPanelWrapper>;
	}
}

PS.addRoomType(FasherLeaguePanel);
