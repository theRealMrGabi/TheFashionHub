import { useState } from "react";
import { EyeOpen, EyeClose, SearchIcon } from "icons";

export const Input = ({
	placeholder,
	label,
	password,
	suffix,
	...rest
}: any) => {
	const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

	return (
		<div className="input">
			<div className="flex justify-between">
				{label && (
					<span className="text-left font-medium text-sm block text-blackish mb-2">
						{label}
					</span>
				)}
			</div>

			<div className="flex">
				<input
					{...rest}
					type={
						password ? (passwordVisibility ? "text" : "password") : rest.type
					}
					className={`px-4 py-2 border border-solid rounded overflow-hidden border-primary-400 ${
						password || rest.type === "search" ? `input-border` : ""
					}`}
					placeholder={placeholder}
				/>

				{password && (
					<div className="py-2 password-cont border-solid bg-purple-200">
						<PasswordSuffix
							onClick={() => {
								setPasswordVisibility(!passwordVisibility);
							}}
							iconVisibility={passwordVisibility}
							visible={suffix}
						/>
					</div>
				)}

				{rest.type === "search" && (
					<div className="py-2 search-border">
						<SearchSuffix />
					</div>
				)}
			</div>
		</div>
	);
};

const PasswordSuffix = ({ onClick, iconVisibility }: any) => {
	return (
		<div
			onClick={onClick}
			className="flex justify-center items-center w-12 cursor-pointer"
		>
			{iconVisibility ? <EyeOpen /> : <EyeClose />}
		</div>
	);
};

const SearchSuffix = ({ onClick }: any) => {
	return (
		<div
			onClick={onClick}
			className="flex justify-center items-center w-12 cursor-pointer"
		>
			{<SearchIcon />}
		</div>
	);
};
