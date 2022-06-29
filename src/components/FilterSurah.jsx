import React from "react";
import {
	BiSkipPreviousCircle,
	BiSkipNextCircle,
	BiPlayCircle,
} from "react-icons/bi";
import { useGlobalContext } from "../context";
function FilterSurah({ item }) {
	const {
		play,
		prev,
		next,
		playerCss,
	} = useGlobalContext();
	return (
		<div className="details" style={playerCss[1]} key={item.id}>
			<div style={playerCss[2]}>
				<p>{item.name}</p>
				<div className="detailsBtnGroup">
					<button>
						<BiSkipPreviousCircle
							className="details-btn"
							onClick={() => {
								prev(item);
							}}
						/>
					</button>
					<button>
						<BiPlayCircle
							className="details-btn"
							onClick={() => {
								play(item);
							}}
						/>
					</button>
					<button>
						<BiSkipNextCircle
							className="details-btn"
							onClick={() => {
								next(item);
							}}
						/>
					</button>
				</div>
				<p>Chapter: {item.id}</p>
				<p>Ayah: {item.ayat}</p>
				<p>Revelation: {item.revelation}</p>
			</div>
		</div>
	);
}

export default FilterSurah;
