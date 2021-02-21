import { FC } from "react";

const Cart: FC = () => {
	return (
		<div className="cart">
			<div className="w-screen flex">
				<div className="title font-semibold text-xl">Cart Page</div>
				<div className="continue font-normal hidden md:block text-sm">
					Continue shopping
				</div>
			</div>
		</div>
	);
};

export default Cart;
