import { FC } from "react";
import { Hero, MidHome } from "./partials";
import { TrendyProducts, CharmProducts } from "components";
import { midHero, footerHero } from "assets/images";

const Home: FC = () => {
	return (
		<>
			<Hero />

			<MidHome
				Title="JUST IN / Carefully selecting from the world’s best brands and boutiques"
				CardDetails={TrendyProducts}
			/>

			<MidHome Title="CHARM" CardDetails={CharmProducts} />

			<div className="mb-8 h-full">
				<img src={midHero} alt="chronicles" />

				<div className="flex justify-between w-full my-4 items-center">
					<div className="w-3/12 flex flex-col">
						<h3 className="font-bold text-base">LOREM IPSUM</h3>

						<p className="text-primaryGrey font-normal text-sm">
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>

					<div className="flex justify-end w-9/12">
						<p className="w-7/12 text-primaryGrey font-normal text-xs">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
							laboriosam dicta optio deleniti, error deserunt vitae nisi
							perspiciatis reprehenderit nobis.
						</p>
					</div>
				</div>
			</div>

			<MidHome Title="CHOICE" CardDetails={CharmProducts} />

			<div className="footer-hero flex flex-col md:flex-row justify-between mb-16 h-2/3">
				<img src={footerHero} alt="yellow jacket" />

				<div className="flex flex-col justify-center w-3/5">
					<div className="footer-hero__title ">PICK OF THE DAY</div>

					<div className="footer-hero__count">101/365</div>

					<small className="footer-hero__description text-left">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						itaque animi quidem onsequuntur inventore pariatur.
					</small>
				</div>
			</div>
		</>
	);
};

export default Home;
