import { FC } from "react";
import { Card, ProductPageProducts } from "components";
import { Radio, RadioGroup } from "@uiw/react-radio";

export const ProductList: FC = () => {
	return (
		<div className="flex flex-col md:flex-row mt-12 w-full">
			{/* <hr /> */}
			{/* <div className="w-3/12 mx-auto md:mx-0">
				<h4>By Designer</h4>
				<RadioGroup className="flex flex-col">
					<Radio value="all">All</Radio>
					<Radio value="Nike">Nike</Radio>
					<Radio value="Adidas">Adidas</Radio>
					<Radio value="Fenti">All</Radio>
				</RadioGroup>
			</div> */}
			<div className="w-3/12 mx-auto md:mx-0 mr-8 pr-16">
				<hr />
				<h4>By Designer</h4>
				<RadioGroup className="flex flex-col text-r">
					<Radio value="all">All</Radio>
					<Radio value="Nike">Nike</Radio>
					<Radio value="Adidas">Adidas</Radio>
					<Radio value="Fenti">All</Radio>
				</RadioGroup>
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
