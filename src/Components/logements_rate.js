import emptyStar from "../assets/img/star-inactive.png"
import fullStar from "../assets/img/star-active.png"

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate_star-div">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
