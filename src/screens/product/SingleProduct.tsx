import { useEffect } from "react";
// import { RouteComponentProps } from "react-router";
import { Button, Loader } from "components";
import { MidHome } from "screens/home/partials";
import { AddItemsTocart, GetAllProducts, GetSingleProduct } from "actions";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFilterProducts } from "utils";

// const SingleProduct: FC<RouteComponentProps> = (props: any) => {
// const SingleProduct = (props: any) => {
const SingleProduct = () => {
	const params = useParams();
	console.log("params -->", params);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	// console.log("navigate -->", navigate);

	// const id = props.match.params.id;
	const id = params.id || "";
	const getSingleProduct = GetSingleProduct();
	const getAllProducts = GetAllProducts();
	const addItemsTocart = AddItemsTocart();

	const { loading, product, products } = useSelector(
		(state: any) => state.products
	);

	useEffect(() => {
		if (id === "undefined") return navigate("/products");
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
					<div className="flex flex-col md:flex-row justify-between top mb-8 w-full">
						<div className="w-full md:w-6/12  img-holder mb-4 md:mb-0 mx-auto">
							<img src={product?.image?.[0]} alt={product?.name} />
						</div>

						<div className="w-full md:w-6/12 flex flex-col details-holder sm:mx-0 md:mx-16 md:px-4">
							<h3 className="my-1">{product?.name}</h3>
							<p className="title-desc my-1">{product?.subtitle}</p>
							<p className="color my-1">
								Color: <span className="color-ans">white</span>
							</p>
							<p className="my-1">
								Price:{" "}
								<span className="text-primary-100 font-bold">
									&#x20A6;
									{new Intl.NumberFormat().format(
										Number(parseFloat(product?.price).toFixed(2))
									) || 0.0}
								</span>
							</p>

							<div className="my-7 flex flex-col">
								<Button
									onClick={() => dispatch(addItemsTocart(product))}
									text="Add to Cart"
									btnType="primary"
									className="my-6"
								/>

								<Button
									text="Add to Wish List"
									btnType="secondary"
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
