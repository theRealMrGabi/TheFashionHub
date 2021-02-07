import { FC } from "react";
import { productHeader } from "assets/images";

export const ProductHeader: FC = () => {
	return (
		<div>
			<div className="md:hidden mt-16 md:mt-0">
				<img src={productHeader} alt="" className="block md:hidden" />
			</div>

			<div className="hidden md:block product-header">
				<div className="product-header--overlay">
					<h4 className="text-xl font-light mb-4">WOMEN</h4>
					<p className="font-normal text-xs text-primaryGrey">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
						laboriosam sequi repellendus iste dignissimos molestias assumenda
						odio nesciunt quod sint recusandae laudantium minima excepturi ipsa
						rem quae consequatur, eaque reprehenderit?
					</p>
				</div>
			</div>
		</div>
	);
};
