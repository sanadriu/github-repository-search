import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons";

export interface IconButtonProps extends Omit<React.ComponentProps<"button">, "className"> {
	size?: number;
	children: IconType;
}

export default function IconButton({ size = 24, children: Component, ...rest }: IconButtonProps): JSX.Element {
	const cx = classNames(
		"text-indigo-500",
		"hover:text-indigo-400",
		"active:text-indigo-600 active:scale-[0.98]",
		"disabled:text-gray-500 disabled:hover:text-gray-500"
	);

	return (
		<button className={cx} {...rest}>
			<Component size={size} title={rest?.title} />
		</button>
	);
}
