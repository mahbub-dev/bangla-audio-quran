import { createContext, useContext, useEffect, useState } from "react";
import bg1 from "./bg1.png";
import surah from "./sura";
const AppContext = createContext();

const AppProviver = ({ children }) => {
	const [inputDiplay, setInputDisplay] = useState(undefined);
	const [inputedVal, setInputedValue] = useState(0);
	const [filterData, setFilterData] = useState([]);
	const [isPlay, setIspLay] = useState(false);
	const [url, setUrl] = useState("");
	const [playing, setPlaying] = useState();
	const [playStatus, setPlayStatus] = useState("");

	const [playerCss, setPlayerCss] = useState([
		{
			margin: "5rem auto",
			display: "none",
			transition: "all 1s",
			position: "fixed",
		},
	]);
	useEffect(() => {
		const filterSurah = surah.filter(
			(item) =>
				item.id.toString() === inputedVal.toString() ||
				item.name.toLowerCase().includes(inputedVal)
		);
		setFilterData(filterSurah);
		setPlayerCss([
			{ margin: "2rem auto", display: "block" },
			{
				width: "300px",
				height: "300px",
				padding: "0",
			},
			{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: `url(${bg1})`,
				backgroundSize: "cover",
				borderRadius: "5px",
			},
		]);
	}, [inputedVal]);

	const play = (item) => {
		setUrl(item.link);
		!isPlay && setIspLay(true);
		setPlaying({ name: item.name });
	};
	const prev = (item) => {
		setInputedValue(item.id - 1);
		
	};
	const next = (item) => {
		setInputedValue(item.id + 1);
	};
	const handleSearch = (e) => {
		setInputedValue(e.target.value);
		inputedVal === "" && setFilterData([]);
	};
	const searchBtnHnadler = (id) => {
		id === "name" && setInputDisplay(true);
		id === "number" && setInputDisplay(false);
	};
	return (
		<AppContext.Provider
			value={{
				playStatus,
				setPlayStatus,
				prev,
				next,
				play,
				inputDiplay,
				filterData,
				url,
				setUrl,
				isPlay,
				setIspLay,
				playerCss,
				handleSearch,
				searchBtnHnadler,
				setInputedValue,
				inputedVal,
				setFilterData,
				playing,
				setPlaying,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProviver;
export const useGlobalContext = () => useContext(AppContext);
