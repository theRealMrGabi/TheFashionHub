import { FC } from "react";
import { ProductHeader, ProductList } from "./partials";

const Products: FC = () => {
	return (
		<div className="mb-16">
			<ProductHeader />
			<ProductList />
		</div>
	);
};

export default Products;
