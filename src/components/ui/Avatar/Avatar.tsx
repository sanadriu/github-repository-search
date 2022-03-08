import classNames from "classnames";
import { useState } from "react";
import image from "./images/avatar.png";

export interface AvatarProps extends Omit<React.ComponentProps<"img">, "className" | "onLoad"> {
	size?: "sm" | "md" | "lg";
	shape?: "rounded" | "circle";
}

export default function Avatar({ size = "md", shape = "circle", src = image, ...rest }: AvatarProps): JSX.Element {
	const [display, setDisplay] = useState<boolean>(false);

	const cx = classNames("border-2 border-indigo-300 aspect-ratio-[1/1] object-cover shadow", {
		"rounded-full": shape === "circle",
		"rounded-lg": shape === "rounded",
		"w-16": size === "sm",
		"w-24": size === "md",
		"w-32": size === "lg",
		invisible: !display,
	});

	return <img className={cx} onLoad={() => setDisplay(true)} src={src} {...rest} />;
}
