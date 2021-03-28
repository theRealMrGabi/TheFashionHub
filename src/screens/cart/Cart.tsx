import { FC } from "react";
import {
	Button,
	CartHolder,
	ProductPageProducts,
	CartSummary,
} from "components";

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

				<div className="flex md:flex-row flex-col-reverse items-start">
					<div className="flex flex-col w-full md:w-4/5 mr-4">
						{ProductPageProducts?.map((product: any, i: number) => {
							const { Title, SubTitle, Price, image } = product;
							return (
								<div key={i}>
									<CartHolder
										Title={Title}
										SubTitle={SubTitle}
										Price={Price}
										image={image}
									/>
								</div>
							);
						})}
					</div>

					<CartSummary type="cart" />
					{/* <div className="cart flex mt-0 md:mt-2 flex-col grey-border px-4 mb-2 md:mb-0 summary-cont md:w-1/5 w-full pt-2">
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

						<Button type="primary" text="Go to Checkout" className="w-full" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Cart;
