import { FC } from "react";
import { Card, ProductPageProducts, SelectRadio } from "components";

const data = [
	{ value: "all", key: "All" },
	{ value: "Nike", key: "Nike" },
	{ value: "Nike", key: "Nike" },
	{ value: "Adidas", key: "Adidas" },
	{ value: "Puma", key: "Puma" },
];

export const ProductList: FC = () => {
	return (
		<div className="flex flex-col md:flex-row mt-12 w-full">
			<div className="w-3/12 mx-auto md:mx-0 mr-8 pr-16">
				{/* <div onClick={handleVisibility}>
					<Dropdown category="Brands" visible={visible} />
				</div> */}
				<SelectRadio category="Brands" selectData={data} />
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
