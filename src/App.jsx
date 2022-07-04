import "./App.css";
import surah from "./sura";
import ReactPlayer from "react-player";
import { useGlobalContext } from "./context";
import Surah from "./components/Allsura";
import FilterSurah from "./components/FilterSurah";
function App() {
	const {
		handleSearch,
		searchBtnHnadler,
		url,
		playerCss,
		isPlay,
		filterData,
		playStatus,
		setPlayStatus,
		playing,
	} = useGlobalContext();

	return (
		<div className="App">
			<div className="search">
				<div className="input-field">
					<input
						type="text"
						onChange={handleSearch}
						placeholder="type the name of a chapter or number"
					/>
				</div>
			</div>
			<p className="playing">
				{isPlay
					? playStatus !== "error"
						? `Surah ${playing.name} is ${playStatus}`
						: "Please check your internet connection"
					: "The player is off"}
			</p>
			<ReactPlayer
				url={url || "./.mp3"}
				playing={isPlay}
				height="40px"
				controls
				width="300px"
				style={playerCss[0]}
				onBuffer={() => {
					setPlayStatus("buffering");
				}}
				onReady={() => {
					setPlayStatus("playing");
				}}
				onError={() => {
					setPlayStatus("error");
				}}
			/>
			<div className="surah">
				{filterData.length === 0 || filterData.length === 114
					? surah.map((item) => (
							<div key={item.id}>
								<Surah item={item} />
							</div>
					  ))
					: filterData.map((item) => (
							<div key={item.id}>
								<FilterSurah item={item} />
							</div>
					  ))}
			</div>
			<a href="https://www.facebook.com/hsmahbub" className="dev-details">
				<span>Dev</span>
			</a>
		</div>
	);
}

export default App;
