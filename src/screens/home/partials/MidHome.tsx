import { FC } from "react";
import { Button, Card } from "components";

type Props = {
	Title?: string;
	CardDetails: any;
};

export const MidHome: FC<Props> = ({ Title, CardDetails }) => {
	return (
		<div className="mb-8">
			{Title && (
				<div className="font-normal text-base text-center mb-8">{Title}</div>
			)}

			<div className="cards flex flex-col-reverse md:flex-row items-center flex-wrap justify-between">
				{CardDetails?.map((card: any, i: number) => {
					const { name, subtitle, image, price, _id: id } = card;

					return (
						<div key={id}>
							<Card
								Title={name}
								SubTitle={subtitle}
								Price={price}
								image={image}
								id={id}
							/>
						</div>
					);
				})}
			</div>

			{Title && (
				<div className="flex justify-center items-center my-8">
					<Button text="Shop Now" type="primary" />
				</div>
			)}
		</div>
	);
};
