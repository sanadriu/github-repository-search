import classNames from "classnames";
import React from "react";

export interface ButtonProps extends Omit<React.ComponentProps<"button">, "className"> {
	size?: "sm" | "md" | "lg";
	full?: boolean;
}

export default function Button({ size = "md", full = false, children = "Button", ...rest }: ButtonProps): JSX.Element {
	const cx = classNames(
		"py-1 border rounded shadow font-medium ease-out duration-100 bg-indigo-500 text-white border-indigo-500",
		"hover:bg-indigo-400 hover:text-white",
		"active:bg-indigo-600 active:text-white active:scale-[0.98]",
		"disabled:bg-gray-100 disabled:text-gray-500 disabled:border-indigo-100 disabled:hover:bg-gray-100",
		{
			"min-w-[4rem] px-2 text-sm": size === "sm",
			"min-w-[6rem] px-3 text-md": size === "md",
			"min-w-[8rem] px-5 text-lg": size === "lg",
			"w-[100%]": full,
		}
	);

	return (
		<button className={cx} {...rest}>
			{children}
		</button>
	);
}
