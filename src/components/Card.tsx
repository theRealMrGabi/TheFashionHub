import { FC } from "react";
import { Like } from "icons";
import { basketballer } from "assets/images";

type Props = {
	Title?: any;
	SubTitle?: string;
	Price?: string;
	image?: string;
};

export const Card: FC<Props> = ({ Title, SubTitle, Price, image }) => {
	return (
		<div className="card-cont">
			<div className="flex justify-center card">
				<img src={image || basketballer} alt="product" className="img" />

				<div className="like like-icon">
					<Like />
				</div>
			</div>

			<div className="bg-white mt-3 flex flex-col">
				<div className="card-cont__title">{Title || "Nike Joggers"}</div>

				<div className="card-cont__subtitle">
					{SubTitle || "Green and Red Hoodie"}
				</div>

				<div className="card-cont__title card-cont__price">
					&#x20A6;
					{new Intl.NumberFormat().format(
						Number(parseFloat(Price || `50000`).toFixed(2))
					)}
				</div>
			</div>
		</div>
	);
};
