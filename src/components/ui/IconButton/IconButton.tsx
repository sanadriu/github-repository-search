import React from "react";
import { IconType } from "react-icons";

export interface IconButtonProps {
	className?: string;
	title?: string;
	type?: "button" | "submit";
	disabled?: boolean;
	children: IconType;
	handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({
	className,
	title = "Icon",
	type = "button",
	disabled = false,
	children: Icon,
	handleClick = () => {},
}: IconButtonProps): JSX.Element {
	return (
		<button type={type} onClick={(e) => handleClick(e)} disabled={disabled}>
			<Icon className={className} title={title} />
		</button>
	);
}
