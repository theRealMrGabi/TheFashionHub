import { FC } from "react";
import { Like, Cancel } from "icons";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
	ClearItemFromcart,
	AddItemsTocart,
	ReduceItemsFromcart,
} from "actions";

type Props = {
	product?: any;
};

type SummaryProps = {
	type?: string;
};

export const CartHolder: FC<Props> = ({ product }) => {
	const { name, subtitle, quantity, price, image } = product;

	const dispatch = useDispatch();
	const addItemsTocart = AddItemsTocart();
	const removeItem = ClearItemFromcart();
	const reduceItem = ReduceItemsFromcart();

	const handleAddItems = () => dispatch(addItemsTocart(product));
	const handleReduceItems = () => dispatch(reduceItem(product));
	const handleRemove = () => dispatch(removeItem(product));

	return (
		<div className="cart cont w-6/12 md:w-full flex flex-row grey-border my-2">
			<div className="image hidden md:block">
				<img src={image} alt={name} />
			</div>

			<div className="w-1/4 pt-4 hidden md:block">
				<h4 className="font-bold text-sm">{name || "Nike"}</h4>
				<div className="font-light text-sm">{subtitle}</div>
			</div>

			<div className="md:w-1/4 pt-4 font-bold text-sm hidden md:block">
				&#8358;{price}
			</div>

			<div className="size hidden md:flex flex-col justify-between w-1/4 pt-4">
				<div className="flex flex-col">
					<p className="font-light text-sm">Size</p>
					<p className="font-normal text-base">L</p>
				</div>

				<div className="flex flex-col">
					<p className="font-light text-sm mb-2">Quantity</p>

					<div className="flex justify-between my-auto qty">
						<div
							className="cursor-pointer flex justify-center first"
							onClick={() => handleReduceItems()}
						>
							-
						</div>
						<div>{quantity}</div>
						<div
							className="cursor-pointer flex justify-center third"
							onClick={() => handleAddItems()}
						>
							+
						</div>
					</div>
				</div>

				<div className="flex flex-row items-center cursor-pointer pb-4">
					<span className="like pr-2">
						<Like size="w-4 h-4" />
					</span>
					<span className="under underline font-light text-sm">
						Move to Wishlist
					</span>
				</div>
			</div>

			<div className="pt-4 pr-4 hidden md:block" onClick={() => handleRemove()}>
				<Cancel size="w-4 h-4" />
			</div>

			{/* Cart mobile View Start */}
			<div className="flex flex-row md:hidden w-full cart-mobile">
				<div className="w-3/6 p-4 img-cont">
					<img src={image} alt={name} />
				</div>
				<div className="w-3/6 p-4 details">
					<div className="flex flex-row justify-between">
						<h4 className="font-bold text-sm cart-title">{name}</h4>
						<div onClick={() => handleRemove()}>
							<Cancel size="w-4 h-4" />
						</div>
					</div>

					<div className="font-light text-sm pt-2 subtitle">{subtitle}</div>

					<div className="text-sm font-light pt-1">
						Price: <span className="font-bold text-sm">&#8358;{price}</span>
					</div>

					<p className="text-sm font-light pt-1">
						Size: <span className="font-normal text-base">L</span>
					</p>

					{/* <p className="text-sm font-light pt-2">
						Quantity: <span className="font-normal text-base">{quantity}</span>
					</p> */}

					{/* <div className="flex flex-row items-center cursor-pointer pb-4 pt-2">
						<span className="like pr-2">
							<Like size="w-4 h-4" />
						</span>
						<span className="under font-light text-sm">Move to Wishlist</span>
					</div> */}

					<div className="flex flex-col pt-1">
						<p className="font-light text-sm mb-2">Quantity</p>

						<div className="flex justify-between my-auto qty">
							<div
								className="cursor-pointer flex justify-center first"
								onClick={() => handleReduceItems()}
							>
								-
							</div>
							<div>{quantity}</div>
							<div
								className="cursor-pointer flex justify-center third"
								onClick={() => handleAddItems()}
							>
								+
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Cart mobile View End */}
		</div>
	);
};

export const CartSummary: FC<SummaryProps> = ({ type }) => {
	const { cart } = useSelector((state: any) => state.cart);

	const price =
		cart
			?.reduce(
				(accumulatedQty: any, cartItem: any) =>
					accumulatedQty + cartItem.quantity * cartItem.price,
				0
			)
			.toFixed(2) || 0.0;

	const shippingFee = (price - price * 0.95).toFixed(2) || 0.0;
	const totalPrice = Number(price) + Number(shippingFee);

	return (
		<div
			className={`cart flex flex-col grey-border px-4 ${
				type === "cart" &&
				`md:w-1/5 w-full pt-2 mt-0 md:mt-2 mb-2 md:mb-0 summary-cont`
			}
			${type === "checkout" && `px-4 py-4`}
			`}
		>
			<h4 className="font-bold text-sm">Summary</h4>
			<p className="summary-item pt-3">
				<span>Total Qty</span>
				<span>{cart?.length || 0}</span>
			</p>

			<div className="summary-item">
				<span>Total Amount</span>
				<span className="font-bold text-primary-100">
					&#8358;{new Intl.NumberFormat().format(price) || 0.0}
				</span>
			</div>

			<div className="summary-item">
				<span>Shipping Fee</span>
				<span>
					&#8358; {new Intl.NumberFormat().format(Number(shippingFee)) || 0.0}
				</span>
			</div>

			<hr />
			<div className="summary-item my-1">
				<span>Total</span>
				<span className="font-bold text-primary-100">
					&#8358; {new Intl.NumberFormat().format(totalPrice) || 0.0}
				</span>
			</div>

			<Button type="primary" text="Checkout" className="w-full" />
		</div>
	);
};
