import { FC } from "react";
import { basketballer } from "assets/images";
import { Like, Cancel } from "icons";

type Props = {
	Title?: any;
	SubTitle?: string;
	Price?: number;
	image?: string;
	quantity?: number;
};

export const CartHolder: FC<Props> = ({
	Title,
	SubTitle,
	Price,
	image,
	quantity,
}) => {
	return (
		<div className="cart cont w-6/12 md:w-full flex flex-row grey-border my-2">
			<div className="image hidden md:block">
				<img src={image || basketballer} alt={Title} />
			</div>

			<div className="w-1/4 pt-4 hidden md:block">
				<h4 className="font-bold text-sm">{Title || "Nike"}</h4>
				<div className="font-light text-sm">
					{SubTitle || "Black and White Hoodie"}
				</div>
			</div>

			<div className="md:w-1/4 pt-4 font-bold text-sm hidden md:block">
				&#8358;{Price || 10000}
			</div>

			<div className="size hidden md:flex flex-col justify-between w-1/4 pt-4">
				<div className="flex flex-col">
					<p className="font-light text-sm">Size</p>
					<p className="font-normal text-base">L</p>
				</div>

				<div className="flex flex-col">
					<p className="font-light text-sm">Quantity</p>
					<p className="font-normal text-base">{quantity || 1}</p>
				</div>

				<div className="flex flex-row items-center cursor-pointer pb-4">
					<span className="like pr-2">
						<Like size="w-4 h-4" />
					</span>
					<span className="under underline font-light text-sm">
						Move to Wishlist
					</span>
				</div>
			</div>

			<div className="pt-4 pr-4 hidden md:block">
				<Cancel size="w-4 h-4" />
			</div>

			{/* Cart mobile View Start */}
			<div className="flex flex-row md:hidden w-full">
				<div className="w-3/6 p-4">
					<img src={image || basketballer} alt={Title} />
				</div>
				<div className="w-3/6 p-4">
					<div className="flex flex-row justify-between">
						<h4 className="font-bold text-sm">{Title || "Nike"}</h4>
						<Cancel size="w-4 h-4" />
					</div>

					<div className="font-light text-sm pt-2">
						{SubTitle || "Black and White Hoodie"}
					</div>

					<div className="text-sm font-light pt-2">
						Price:{" "}
						<span className="font-bold text-sm">&#8358;{Price || 10000}</span>
					</div>

					<p className="text-sm font-light pt-2">
						Size: <span className="font-normal text-base">L</span>
					</p>

					<p className="text-sm font-light pt-2">
						Quantity: <span className="font-normal text-base">1</span>
					</p>

					<div className="flex flex-row items-center cursor-pointer pb-4 pt-2">
						<span className="like pr-2">
							<Like size="w-4 h-4" />
						</span>
						<span className="under font-light text-sm">Move to Wishlist</span>
					</div>
				</div>
			</div>
			{/* Cart mobile View End */}
		</div>
	);
};
