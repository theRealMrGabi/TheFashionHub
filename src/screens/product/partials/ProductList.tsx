import { FC } from "react";
import { Card, ProductPageProducts } from "components";

export const ProductList: FC = () => {
	return (
		<div className="flex flex-col md:flex-row mt-12 w-full">
			<div className="select w-3/12 mx-auto md:mx-0">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>

			<div className="w-9/12 cards flex flex-col-reverse md:flex-row items-center flex-wrap justify-between mx-auto md:mx-0">
				{ProductPageProducts?.map((product: any, i: number) => (
					<div key={i}>
						<Card
							Title={product?.Title}
							SubTitle={product?.SubTitle}
							Price={product?.Price}
							image={product?.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
