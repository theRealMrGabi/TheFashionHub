import { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Button, Loader } from "components";
import { MidHome } from "screens/home/partials";
import { GetAllProducts, GetSingleProduct } from "actions";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFilterProducts } from "utils";

const SingleProduct: FC<RouteComponentProps> = (props: any) => {
	const id = props.match.params.id;
	const dispatch = useDispatch();
	const history = useHistory();
	const getSingleProduct = GetSingleProduct();
	const getAllProducts = GetAllProducts();

	const { loading, product, products } = useSelector(
		(state: any) => state.products
	);

	useEffect(() => {
		if (id === "undefined") return history.push("/");
		batch(() => {
			dispatch(getAllProducts());
			dispatch(getSingleProduct(id));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const [{ products: relatedProducts }] = useFilterProducts({
		category: product?.tags?.[0],
		goods: products && products,
	});

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="flex flex-col single-product">
					<div className="flex flex-col md:flex-row justify-between top mb-8">
						<div className="flex flex-col md:flex-row justify-center img-holder mb-4 md:mb-0  mx-auto">
							<img src={product?.image?.[0]} alt={product?.name} />
						</div>

						<div className="flex flex-col details-holder sm:mx-0 md:mx-16 md:px-4">
							<h3 className="">{product?.name}</h3>
							<p className="title-desc">{product?.subtitle}</p>
							<p className="color">
								color: <span className="color-ans">white</span>
							</p>
							<p>
								Price:{" "}
								<span className="text-primary-100 font-bold">
									&#x20A6;
									{new Intl.NumberFormat().format(
										Number(parseFloat(product?.price).toFixed(2))
									)}
								</span>
							</p>

							<div className="my-7 flex flex-col">
								<Button text="Add to Cart" type="primary" className="my-6" />
								<Button
									text="Add to Wish List"
									type="secondary"
									className="mb-8"
								/>
							</div>

							<hr />
							<div className="editors-note">{product?.description}</div>
						</div>
					</div>

					<hr />

					<div className="flex flex-col my-8 may-like">
						<div className="others">YOU MAY ALSO LIKE</div>
						<MidHome CardDetails={relatedProducts} />
					</div>
				</div>
			)}
		</>
	);
};

export default SingleProduct;
