import { FC } from "react";
import { Like, Cancel } from "icons";
import { Button } from "./Button";
import { useSelector } from "react-redux";

type Props = {
	product?: any;
};

type SummaryProps = {
	type?: string;
};

export const CartHolder: FC<Props> = ({ product }) => {
	const { name, subtitle, quantity, price, image } = product;
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
					<p className="font-light text-sm">Quantity</p>
					<p className="font-normal text-base">{quantity}</p>
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

			<div className="pt-4 pr-4 hidden md:block">
				<Cancel size="w-4 h-4" />
			</div>

			{/* Cart mobile View Start */}
			<div className="flex flex-row md:hidden w-full">
				<div className="w-3/6 p-4">
					<img src={image} alt={name} className="mbcart" />
				</div>
				<div className="w-3/6 p-4">
					<div className="flex flex-row justify-between">
						<h4 className="font-bold text-sm">{name || "Nike"}</h4>
						<Cancel size="w-4 h-4" />
					</div>

					<div className="font-light text-sm pt-2">{subtitle}</div>

					<div className="text-sm font-light pt-2">
						Price: <span className="font-bold text-sm">&#8358;{price}</span>
					</div>

					<p className="text-sm font-light pt-2">
						Size: <span className="font-normal text-base">L</span>
					</p>

					<p className="text-sm font-light pt-2">
						Quantity: <span className="font-normal text-base">{quantity}</span>
					</p>

					<div className="flex flex-row items-center cursor-pointer pb-4 pt-2">
						<span className="like pr-2">
							<Like size="w-4 h-4" />
						</span>
						<span className="under font-light text-sm">Move to Wishlist</span>
					</div>
				</div>
			</div>
			{/* Cart mobile View End */}
		</div>
	);
};

export const CartSummary: FC<SummaryProps> = ({ type }) => {
	const { cart } = useSelector((state: any) => state.cart);

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
				<span className="font-bold text-primary-100">&#8358;500</span>
			</div>

			<div className="summary-item">
				<span>Shipping Fee</span>
				<span>&#8358;75</span>
			</div>

			<hr />
			<div className="summary-item my-1">
				<span>Total</span>
				<span className="font-bold text-primary-100">&#8358;575</span>
			</div>

			<Button type="primary" text="Checkout" className="w-full" />
		</div>
	);
};
