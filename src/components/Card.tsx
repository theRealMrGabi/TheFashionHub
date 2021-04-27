import { FC } from "react";
import { Cancel, Cart } from "icons";
import { Button } from "./Button";
import { useHistory } from "react-router-dom";
import { AddItemsTocart } from "actions";
import { useDispatch, useSelector } from "react-redux";

type Props = {
	type?: string;
	product?: any;
};

export const Card: FC<Props> = ({ type, product }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const addItemsTocart = AddItemsTocart();

	const { name, subtitle, _id: id, price, image } = product;

	const { cart } = useSelector((state: any) => state.cart);

	const addedToCart = cart?.find((item: any) => item._id === id);

	return (
		<div className="card-cont">
			<div className="flex justify-center card">
				<img src={image} alt={subtitle} className="img" />

				{/* {!type && (
					<div className="like">
						<Like />
					</div>
				)} */}

				{type === "wish" && (
					<div className="like">
						<Cancel />
					</div>
				)}

				{!type && (
					<div className="cart">
						{addedToCart ? (
							<div className="font-bold">In Cart</div>
						) : (
							<div onClick={() => dispatch(addItemsTocart(product))}>
								<Cart />
							</div>
						)}
					</div>
				)}
			</div>

			<div
				className="bg-white mt-3 flex flex-col card-cont--sub-cont"
				onClick={() => history.push(`/products/${id}`)}
			>
				<div className="card-cont--sub-cont__title">{name}</div>
				<div className="card-cont--sub-cont__subtitle">{subtitle}</div>
				<div className="card-cont--sub-cont__price">
					&#x20A6;
					{new Intl.NumberFormat().format(Number(parseFloat(price).toFixed(2)))}
				</div>
			</div>

			<div className="py-4">
				{type === "wish" && (
					<Button
						text="Add to Cart"
						type="secondary"
						className="w-full mx-auto"
						onClick={() => dispatch(addItemsTocart(product))}
					/>
				)}
			</div>
		</div>
	);
};
