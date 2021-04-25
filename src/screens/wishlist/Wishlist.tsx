import { FC } from "react";
import { Card, ProductPageProducts } from "components";
import { useSelector } from "react-redux";

const Wishlist: FC = () => {
	const { like } = useSelector((state: any) => state.cart);

	return (
		<>
			<h3 className="my-12 flex justify-center font-bold">
				Wishlist ({like?.length || 0})
			</h3>
			<div className="flex flex-col-reverse md:flex-row items-center flex-wrap justify-between mt-4">
				{like?.map((card: any, i: number) => {
					return (
						<div key={i}>
							<Card product={card} type="wish" />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Wishlist;
