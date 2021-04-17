import { FC } from "react";
import { Like, Cancel } from "icons";
import { basketballer } from "assets/images";
import { Button } from "./Button";
import { useHistory } from "react-router-dom";

type Props = {
	Title?: any;
	SubTitle?: string;
	Price?: string;
	image?: string;
	type?: string;
	id?: string;
};

export const Card: FC<Props> = ({
	Title,
	SubTitle,
	Price,
	image,
	type,
	id,
}) => {
	const history = useHistory();

	return (
		<div className="card-cont">
			<div
				className="flex justify-center card"
				onClick={() => history.push(`/products/${id}`)}
			>
				<img src={image || basketballer} alt="product" className="img" />

				{!type && (
					<div className="like">
						<Like />
					</div>
				)}

				{type === "wish" && (
					<div className="like">
						<Cancel />
					</div>
				)}
			</div>

			<div className="bg-white mt-3 flex flex-col card-cont--sub-cont">
				<div className="card-cont--sub-cont__title">
					{Title || "Nike Joggers"}
				</div>

				<div className="card-cont--sub-cont__subtitle">
					{SubTitle || "Green and Red Hoodie"}
				</div>

				<div className="card-cont--sub-cont__price">
					&#x20A6;
					{new Intl.NumberFormat().format(
						Number(parseFloat(Price || `50000`).toFixed(2))
					)}
				</div>
			</div>

			<div className="py-4">
				{type === "wish" && (
					<Button
						text="Add to Bag"
						type="secondary"
						className="w-full mx-auto"
					/>
				)}
			</div>
		</div>
	);
};
