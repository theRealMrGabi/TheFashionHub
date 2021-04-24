import { FC, useEffect, useMemo } from "react";
import { Card, Loader } from "components";
import { GetAllProducts } from "actions";
import { useSelector, useDispatch } from "react-redux";

export const ProductList: FC = () => {
	const dispatch = useDispatch();
	const getAllProducts = GetAllProducts();
	const { loading, products } = useSelector((state: any) => state.products);

	const filteredProduct = useMemo(
		() => products?.filter((product: any) => !product?.tags?.includes("utils")),
		[products]
	);

	useEffect(() => {
		dispatch(getAllProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col md:flex-row mt-12 w-full">
			{/* <div className="w-3/12 mx-auto md:mx-0 mr-8 pr-16"> */}
			{/* <div onClick={handleVisibility}>
					<Dropdown category="Brands" visible={visible} />
				</div> */}
			{/* <SelectRadio category="Brands" selectData={data} /> */}
			{/* </div> */}

			{/* <div className="w-9/12 cards flex flex-col-reverse md:flex-row items-center flex-wrap justify-between mx-auto md:mx-0"> */}
			{loading ? (
				<div className="mx-auto">
					<Loader />
				</div>
			) : (
				<div className="cards flex flex-col-reverse md:flex-row items-center flex-wrap justify-between mx-auto md:mx-0">
					{filteredProduct?.map((product: any) => {
						return (
							<div key={product?._id}>
								<Card product={product} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
