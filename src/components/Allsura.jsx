import { BiPlayCircle } from "react-icons/bi";
import bg from "../bg1.png";
import { useGlobalContext } from "../context";
function Surah({ item }) {
	const { play } = useGlobalContext();
	return (
		<div
			className="details"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
			}}
		>
			<p>{item.name}</p>
			<button>
				<BiPlayCircle
					className="details-btn"
					onClick={() => {
						play(item);
					}}
				/>
			</button>
			<p>Chapter: {item.id}</p>
			<p>Ayah: {item.ayat}</p>
			<p>Revelation: {item.revelation}</p>
		</div>
	);
}

export default Surah;
