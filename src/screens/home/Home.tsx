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
			<div className="chronicles mx-8 md:mx-16 mb-8 h-full">
				<img src={midHero} alt="chronicles" />
				<div className="flex justify-between">
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
						mollitia.
					</div>
					<div>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						laboriosam dicta optio deleniti, error deserunt vitae nisi
						perspiciatis reprehenderit nobis.
					</div>
				</div>
			</div>
			<MidHome Title="CHOICE" CardDetails={CharmProducts} />

			<div className="footer-hero flex justify-between red-border mx-8 md:mx-16 mb-16 h-2/3 ">
				<img src={footerHero} alt="yellow jacket" className="black-border" />
				<div className="flex flex-col justify-center">
					<div>PICK OF THE DAY</div>
					<div>101/365</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						itaque animi quidem. Consequuntur inventore pariatur qui ut, nemo
						molestiae ad.
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
