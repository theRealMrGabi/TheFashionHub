import { FC } from "react";
import { Like, Cancel, Cart } from "icons";
import { basketballer } from "assets/images";
import { Button } from "./Button";
import { useHistory } from "react-router-dom";
import { AddItemsTocart } from "actions";
import { useSelector, useDispatch } from "react-redux";

type Props = {
	type?: string;
	product?: any;
};

export const Card: FC<Props> = ({ type, product }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const addItemsTocart = AddItemsTocart();

	const { cart } = useSelector((state: any) => state.cart);
	console.log("item added to cart --->", cart);

	const { name, subtitle, _id: id, price, image } = product;

	return (
		<div className="card-cont">
			<div
				className="flex justify-center card"
				// onClick={() => history.push(`/products/${id}`)}
			>
				<img src={image || basketballer} alt={subtitle} className="img" />

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

				{!type && (
					<div
						className="cart"
						onClick={() => dispatch(addItemsTocart(product))}
					>
						<Cart />
					</div>
				)}
			</div>

			<div
				className="bg-white mt-3 flex flex-col card-cont--sub-cont"
				onClick={() => history.push(`/products/${id}`)}
			>
				<div className="card-cont--sub-cont__title">
					{name || "Nike Joggers"}
				</div>

				<div className="card-cont--sub-cont__subtitle">
					{subtitle || "Green and Red Hoodie"}
				</div>

				<div className="card-cont--sub-cont__price">
					&#x20A6;
					{new Intl.NumberFormat().format(
						Number(parseFloat(price || `50000`).toFixed(2))
					)}
				</div>
			</div>

			<div className="py-4">
				{type === "wish" && (
					<Button
						text="Add to Cart"
						type="secondary"
						className="w-full mx-auto"
					/>
				)}
			</div>
		</div>
	);
};
