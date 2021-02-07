import { FC } from "react";
import { ProductHeader, ProductList } from "./partials";

const Products: FC = () => {
	return (
		<div className="mb-16">
			<ProductHeader />
			<ProductList />
			{/* <div className="black-border">
				<hr className="bg-primaryGrey black-border" />
			</div> */}
		</div>
	);
};

export default Products;
