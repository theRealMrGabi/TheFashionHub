import { FC, useEffect, useMemo } from "react";
import { GetAllProducts } from "actions";
import { Loader, Card } from "components";
import { useSelector, useDispatch } from "react-redux";

type Props = {
	category: string;
};

export const DisplayProducts: FC<Props> = ({ category }) => {
	const dispatch = useDispatch();
	const getAllProducts = GetAllProducts();
	const { loading, products } = useSelector((state: any) => state.products);

	const filteredProduct = useMemo(
		() => products?.filter((product: any) => product?.tags?.includes(category)),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[products]
	);

	useEffect(() => {
		dispatch(getAllProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col md:flex-row mt-12 w-full">
			{loading ? (
				<div className="mx-auto">
					<Loader />
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-x-14">
					{/* <div className="flex flex-col-reverse md:flex-row items-center flex-wrap justify-between mx-auto md:mx-0"> */}
					{filteredProduct?.map((product: any) => (
						<div key={product?._id}>
							<Card product={product} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
