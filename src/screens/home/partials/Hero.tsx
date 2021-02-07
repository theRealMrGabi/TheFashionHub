import { FC } from "react";
import { sweater, sneakers, hero } from "assets/images";

export const Hero: FC = () => {
	return (
		<div className="flex justify-between mb-8 h-full flex-col-reverse md:flex-row">
			{/* <div className="mx-8 md:mx-16 flex justify-between mb-8 h-full flex-col-reverse md:flex-row"> */}
			<div className="flex flex-col justify-between w-full md:w-6/12 md:pr-8">
				<div className="flex flex-col-reverse md:flex-row justify-between">
					<div className="my-4 md:my-0">
						<img src={sweater} alt="blue sweater" />
					</div>

					<div className="font-medium justify-end text-lg md:text-2xl mt-8">
						<p className="text-center md:text-right">
							SHOP YOUR <br /> FAVORITE BRANDS <br /> FROM YOUR <br /> FAVORITE{" "}
							<br /> BOUTIQUES
						</p>
					</div>
				</div>

				<div className="flex justify-between flex-col">
					<div>
						<img src={sneakers} alt="Nike red sneakers" />
					</div>

					<div className="hidden md:flex flex-col mt-4">
						<p className="font-bold text-sm mb-2">SPORT WEARS</p>

						<small>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
							Quam ab magni error vero asperiores eum assumenda rerum!
						</small>
					</div>
				</div>
			</div>

			<div className="w-full md:w-6/12 min-h-full flex justify-between flex-col">
				<div className="w-full h-full md:w-auto">
					<img src={hero} alt="hero" />
				</div>

				<div className="hidden md:flex flex-col mt-4">
					<p className="font-bold text-sm mb-2">UP TO 50% OFF</p>

					<small>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quam
						ab magni error vero asperiores eum assumenda rerum!
					</small>
				</div>
			</div>
		</div>
	);
};
