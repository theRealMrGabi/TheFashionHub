import { FC } from "react";
import { CartHolder, CartSummary } from "components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart: FC = () => {
	const { cart } = useSelector((state: any) => state.cart);

	const navigate = useNavigate();
	return (
		<div className="cart mb-8">
			<div className="w-full">
				<div className="flex mb-8">
					<h3 className="title font-semibold text-xl">
						Cart ({cart?.length || 0})
					</h3>
					<div
						className="continue font-normal hidden md:block text-sm under"
						onClick={() => navigate("/products")}
					>
						Continue shopping
					</div>
				</div>

				<div className="flex md:flex-row flex-col-reverse items-start">
					<div className="flex flex-col w-full md:w-4/5 mr-4">
						{cart.length > 0 ? (
							<>
								{cart?.map((product: any) => (
									<div key={product?._id}>
										<CartHolder product={product} />
									</div>
								))}
							</>
						) : (
							<h2 className="font-bold text-4xl text-center">
								No Item in Cart
							</h2>
						)}
					</div>

					{cart.length > 0 ? <CartSummary type="cart" /> : null}
				</div>
			</div>
		</div>
	);
};

export default Cart;
