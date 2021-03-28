import { FC } from "react";
import { CartSummary } from "components";
// import { PaymentCheckout, ReviewCheckout, ShippingCheckout } from "./partials";

const Checkout: FC = () => {
	return (
		<div className="checkout flex flex-col md:flex-row md:justify-between">
			<div className="main black-border bg-white">
				<h3>checkout page</h3>
			</div>

			<div className="summary">
				<CartSummary type="checkout" />
			</div>
		</div>
	);
};

export default Checkout;
