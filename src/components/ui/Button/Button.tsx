import classNames from "classnames";
import React from "react";

export interface ButtonProps {
	type?: "button" | "submit";
	size?: "sm" | "md" | "lg";
	full?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
	handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
	type = "button",
	size = "md",
	full = false,
	disabled = false,
	handleClick = () => {},
	children = "Button",
}: ButtonProps): JSX.Element {
	const cx = classNames(
		"py-1 border bg-indigo-100 rounded active:text-white shadow font-medium ease-out duration-100",
		{
			"border-indigo-400 text-indigo-500 hover:bg-indigo-300 hover:text-white active:bg-indigo-400": !disabled,
			"border-gray-400 text-gray-500 hover:bg-gray-300": disabled,
			"min-w-[4rem] px-2 text-sm": size === "sm",
			"min-w-[6rem] px-3 text-md": size === "md",
			"min-w-[8rem] px-5 text-lg": size === "lg",
			"w-[100%]": full,
		}
	);

	return (
		<button type={type} onClick={(e) => handleClick(e)} disabled={disabled} className={cx}>
			{children}
		</button>
	);
}
