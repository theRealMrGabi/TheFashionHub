import { useEffect, useCallback, useState } from "react";

type Props = {
	category: string;
	goods: any;
};

export const useFilterProducts = ({ category, goods }: Props) => {
	const [products, setProducts] = useState<any>(goods);

	const filterAndSliceProducts = useCallback(() => {
		const filter = goods?.filter((product: any) =>
			product?.tags?.includes(category)
		);
		const slice = filter?.slice(0, 4);
		return setProducts(slice);
	}, [goods]);

	useEffect(() => {
		filterAndSliceProducts();
	}, [filterAndSliceProducts]);

	return [{ products }];
};
