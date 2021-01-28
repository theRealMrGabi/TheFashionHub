import { FC } from "react";
import { Button, Card } from "components";

export const MidHome: FC = () => {
	return (
		<div className="border-black my-16 mx-8 md:mx-16">
			<div className="font-medium text-base text-center mb-8">
				JUST IN / Carefully selecting from the world’s best brands and boutiques
			</div>

			<div className="cards flex flex-col-reverse md:flex-row items-center justify-evenly">
				<Card
					Title="Nike Joggers"
					SubTitle="Green and Red Hoodie"
					Price="50000"
				/>
				<Card
					Title="Nike Joggers"
					SubTitle="Green and Red Hoodie"
					Price="50000"
				/>
				<Card
					Title="Nike Joggers"
					SubTitle="Green and Red Hoodie"
					Price="50000"
				/>
				<Card
					Title="Nike Joggers"
					SubTitle="Green and Red Hoodie"
					Price="50000"
				/>
			</div>
			<div className="flex justify-center items-center my-8">
				<Button text="Shop Now" />
			</div>
		</div>
	);
};
