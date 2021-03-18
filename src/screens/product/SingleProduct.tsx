import { FC } from "react";
import { RouteComponentProps } from "react-router";

const SingleProduct: FC<RouteComponentProps> = (props: any) => {
	console.log("product props --->", props);
	const id = props.match.params.id;
	console.log("product id --->", id);

	return (
		<div>
			<h3>SingleProduct</h3>
		</div>
	);
};

export default SingleProduct;
