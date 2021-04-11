import { FC } from "react";
import { SelectArrow } from "icons";
import { Radio, RadioGroup } from "@uiw/react-radio";

// const data = [
// 	{ value: "all", key: "All" },
// 	{ value: "Nike", key: "Nike" },
// 	{ value: "Nike", key: "Nike" },
// 	{ value: "Adidas", key: "Adidas" },
// 	{ value: "Puma", key: "Puma" },
// ];

// type Props = {
// 	visible: boolean;
// 	category: string;
// };

// export const Dropdown: FC<Props> = ({ visible, category }) => {
// 	return (
// 		<div className="select">
// 			<hr />
// 			<div className="flex flex-row justify-between cursor-pointer items-center">
// 				<h3>{category}</h3>
// 				<SelectArrow />
// 			</div>
// 			{visible && <Select selectData={data} name="Category" />}
// 		</div>
// 	);
// };

type SelectProps = {
	category: string;
	selectData?: any;
	name?: string;
	checked?: boolean;
	disabled?: boolean;
	onChange?: () => void;
};

export const SelectRadio: FC<SelectProps> = ({
	category,
	selectData,
	name,
	checked,
	disabled,
	onChange,
}) => {
	return (
		<div className="select hidden md:block">
			<hr />
			<div className="flex flex-row justify-between cursor-pointer items-center">
				<h3>{category}</h3>
				<SelectArrow />
			</div>

			<RadioGroup className="flex flex-col my-2">
				{selectData?.map((data: any) => (
					<Radio
						value={data.value}
						name={name}
						checked={checked}
						disabled={disabled}
						onChange={onChange}
						className=" py-2"
					>
						{data.key}
					</Radio>
				))}
			</RadioGroup>
		</div>
	);
};
