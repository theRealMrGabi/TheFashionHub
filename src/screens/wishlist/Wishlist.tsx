import { FC } from "react";
import { Card, ProductPageProducts } from "components";

const Wishlist: FC = () => {
	return (
		<>
			<h3 className="my-12 flex justify-center font-bold">Wishlist(4)</h3>
			<div className="cards flex flex-col-reverse md:flex-row items-center flex-wrap justify-between mt-4">
				{ProductPageProducts?.map((card: any, i: number) => {
					const { Title, SubTitle, Price, image } = card;
					return (
						<div key={i}>
							<Card
								Title={Title}
								SubTitle={SubTitle}
								Price={Price}
								image={image}
								type="wish"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Wishlist;
