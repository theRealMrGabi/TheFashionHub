import { FC } from "react";
import { Button, CartHolder } from "components";

const Cart: FC = () => {
	return (
		<div className="cart mb-8">
			<div className="w-full">
				<div className="flex mb-8">
					<h3 className="title font-semibold text-xl">Cart (5)</h3>
					<div className="continue font-normal hidden md:block text-sm under">
						Continue shopping
					</div>
				</div>

				<div className="flex md:flex-row flex-col-reverse items-center">
					<div className="flex flex-col w-full md:w-4/5 mr-4">
						<CartHolder />
					</div>

					<div className="flex flex-col w-full md:w-1/5 grey-border px-4 pt-2 mb-2 md:mb-0 summary-cont">
						<h4 className="font-bold text-sm">Summary</h4>
						<p className="summary-item pt-3">
							<span>Total Qty</span>
							<span>5</span>
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

						{/* <div> */}
						<Button type="primary" text="Go to Checkout" className="w-full" />
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
