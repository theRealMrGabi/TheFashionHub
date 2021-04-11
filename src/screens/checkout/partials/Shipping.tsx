import { FC } from "react";
import { Button, Input } from "components";

export const ShippingCheckout: FC = () => {
	return (
		<div className="shipping">
			<div className="pb-4">
				<h3 className="font-medium text-xl pb-4">Add your delivery address</h3>
				<p className="font-normal text-sm">* Required fields</p>
			</div>

			<form className="w-full md:w-9/12">
				<Input label="First Name *" placeholder="Enter first name" />

				<Input label="Last Name *" placeholder="Enter last name" />

				<Input label="Email Address *" placeholder="Enter email address" />

				<Input label="House Address *" placeholder="Enter house address" />

				<Button text="Save & Continue" type="primary" className="w-full" />
			</form>
		</div>
	);
};
