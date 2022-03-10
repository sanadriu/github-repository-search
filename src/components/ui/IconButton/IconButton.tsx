import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons";

export interface IconButtonProps extends Omit<React.ComponentProps<"button">, "className"> {
	size?: number;
	children: IconType;
}

export default function IconButton({
	size = 24,
	children: Component,
	disabled,
	...rest
}: IconButtonProps): JSX.Element {
	const cx = classNames(
		!disabled && "text-indigo-500",
		!disabled && "hover:text-indigo-400",
		!disabled && "active:text-indigo-600 active:scale-95",
		disabled && "text-gray-300"
	);

	return (
		<button aria-label={rest["aria-label"] || "icon-button"} className={cx} disabled={disabled} {...rest}>
			<Component aria-hidden={true} className="pointer-events-none" size={size} title={rest?.title} />
		</button>
	);
}
