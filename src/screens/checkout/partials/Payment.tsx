import { FC } from "react";
import { Input } from "components";

export const PaymentCheckout: FC = () => {
	return (
		<div className="payment">
			<h1 className="title">Enter Card Details</h1>

			<form action="" className="my-4">
				<div className="w-1/2 mb-4">
					<Input type="card" placeholder="____ ____" label="Card Number" />
				</div>

				<div className="flex justify-between w-3/4 mb-4">
					<div className="w-1/2 red-border">
						<Input placeholder="" label="Name on Card" />
					</div>

					<div className="w-1/4 black-border">
						<Input type="date" label="Expiration Date" />
					</div>
				</div>

				<div className="w-1/4">
					<Input placeholder="***" label="Security code" />
				</div>
			</form>
		</div>
	);
};
