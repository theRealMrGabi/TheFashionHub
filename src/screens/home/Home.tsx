import { FC, useEffect } from "react";
import { Hero, MidHome } from "./partials";
import { getAllProducts } from "actions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "components";
import { useFilterProducts } from "utils";

const Home: FC = () => {
	const dispatch = useDispatch();
	const _getAllProducts = getAllProducts();

	const { loading, products } = useSelector((state: any) => state.products);

	useEffect(() => {
		dispatch(_getAllProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [{ products: athlete }] = useFilterProducts({
		category: "athlete",
		goods: products,
	});

	const [{ products: charm }] = useFilterProducts({
		category: "charm",
		goods: products,
	});

	const [{ products: accessories }] = useFilterProducts({
		category: "accessories",
		goods: products,
	});

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Hero />
					<MidHome
						Title="JUST IN / Carefully selecting from the world’s best brands and boutiques"
						CardDetails={athlete}
					/>
					<MidHome Title="CHARM" CardDetails={accessories} />

					<div className="mb-8 h-full">
						<img
							src="https://res.cloudinary.com/gabirated/image/upload/v1618490615/theGadgetHub/jcdw7pnzolry5iy5xwwd.png"
							alt="chronicles"
						/>

						<div className="flex justify-between w-full my-4 items-center">
							<div className="w-3/12 flex flex-col">
								<h3 className="font-bold text-base">LOREM IPSUM</h3>

								<p className="text-primaryGrey font-normal text-sm">
									Lorem ipsum dolor sit amet consectetur.
								</p>
							</div>

							<div className="flex justify-end w-9/12">
								<p className="w-7/12 text-primaryGrey font-normal text-xs">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Mollitia laboriosam dicta optio deleniti, error deserunt vitae
									nisi perspiciatis reprehenderit nobis.
								</p>
							</div>
						</div>
					</div>

					<MidHome Title="CHOICE" CardDetails={charm} />

					<div className="footer-hero flex flex-col md:flex-row justify-between mb-16 h-2/3">
						<img
							src="https://res.cloudinary.com/gabirated/image/upload/v1618489786/theGadgetHub/emncexdpez7kjoiqvc3z.png"
							alt="yellow jacket"
						/>

						<div className="flex flex-col justify-center w-3/5">
							<div className="footer-hero__title ">PICK OF THE DAY</div>

							<div className="footer-hero__count">101/365</div>

							<small className="footer-hero__description text-left">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reiciendis itaque animi quidem onsequuntur inventore pariatur.
							</small>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
