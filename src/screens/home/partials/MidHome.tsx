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

			<div className="flex flex-col-reverse md:flex-row items-center flex-wrap justify-between">
				{CardDetails?.map((card: any) => (
					<div key={card?._id}>
						<Card product={card} />
					</div>
				))}
			</div>

			{Title && (
				<div className="flex justify-center items-center my-8">
					<Button text="Shop Now" btnType="primary" />
				</div>
			)}
		</div>
	);
};
