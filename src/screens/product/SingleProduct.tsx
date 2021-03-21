import { FC } from "react";
import { RouteComponentProps } from "react-router";
import { NikeVest } from "assets/images";
import { Card, Button } from "components";

const SingleProduct: FC<RouteComponentProps> = (props: any) => {
	// const id = props.match.params.id;

	return (
		<div className="flex flex-col single-product">
			<div className="flex flex-col md:flex-row justify-between top mb-8">
				<div className="flex flex-col md:flex-row justify-center img-holder mb-4 md:mb-0 black-border mx-auto">
					<img src={NikeVest} alt="nike" className="" />
				</div>

				<div className="flex flex-col details-holder red-border sm:mx-0 md:mx-16 md:px-4">
					<h3 className="">Nike</h3>
					<p className="title-desc">woven color in prague</p>
					<p className="color">
						color: <span className="color-ans">white</span>
					</p>

					<div className="my-7 flex flex-col">
						<Button text="Add to bag" type="primary" className="my-6" />
						<Button text="Add to Wish List" type="secondary" className="mb-8" />
					</div>

					<hr />

					<div className="editors-note">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						illo voluptas magni fugiat adipisci vel cumque, amet officia dolorem
						tempore quaerat officiis fugit, ab, ipsam illum deserunt at laborum
						ex!
					</div>
				</div>
			</div>

			<hr />

			<div className="flex my-8">
				you may also like
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default SingleProduct;
