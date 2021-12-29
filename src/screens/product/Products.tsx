import { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ProductHeader, ProductList } from "./partials";
import SingleProduct from "./SingleProduct";

const Products: FC = () => {
	return (
		<div className="mb-16">
			<Outlet />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<ProductHeader />
							<ProductList />
						</>
					}
				/>
				<Route path=":id" element={<SingleProduct />} />
			</Routes>
		</div>
	);
};

export default Products;
