import { FC } from "react";
import { CartSummary } from "components";
import { PaymentCheckout, ReviewCheckout, ShippingCheckout } from "./partials";
import StepWizard from "react-step-wizard";
import { packageBox } from "assets/images";

type Props = {
	step?: number;
};

const Checkout: FC<Props> = ({ step = 1 }) => {
	return (
		<div className="checkout flex flex-col md:flex-row md:justify-between">
			<div className="main steps bg-white">
				<div className="track">
					<div
						className={`step-item ${step === 1 ? "completed" : ""}`}
						style={{ left: "3%" }}
					>
						<img
							src={packageBox}
							alt="checkout"
							className="step-lock hidden lg:block w-6 h-6"
						/>
						<div className="key hidden lg:block"></div>
						<span className="title">1. Shipping</span>
					</div>

					<div
						className={`step-item ${step === 2 ? "completed" : ""}`}
						style={{ left: "45%" }}
					>
						<img
							src={packageBox}
							alt="checkout"
							className="step-lock hidden lg:block w-6 h-6"
						/>
						<div className="key hidden lg:block"></div>
						<span className="title">2. Payment</span>
					</div>

					<div
						className={`step-item ${step === 3 ? "completed" : ""}`}
						style={{ left: "83%" }}
					>
						<img
							src={packageBox}
							alt="checkout"
							className="step-lock hidden lg:block w-6 h-6"
						/>
						<div className="key hidden lg:block"></div>
						<span className="title ">3. Review</span>
					</div>
				</div>

				<div className="mt-8">
					<StepWizard>
						<ShippingCheckout />
						<PaymentCheckout />
						<ReviewCheckout />
					</StepWizard>
				</div>
			</div>

			<div className="summary">
				<CartSummary type="checkout" />
			</div>
		</div>
	);
};

export default Checkout;
