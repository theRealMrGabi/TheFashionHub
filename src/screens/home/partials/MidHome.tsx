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
					const { Title, SubTitle, Price, image } = card;
					return (
						<div key={i}>
							<Card
								Title={Title}
								SubTitle={SubTitle}
								Price={Price}
								image={image}
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
