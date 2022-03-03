import classNames from "classnames";
import image from "./images/avatar.png";

export interface AvatarProps {
	size?: "sm" | "md" | "lg";
	src?: string;
	text?: string;
	type?: "rounded" | "circle";
}

export default function Avatar({
	size = "md",
	type = "circle",
	src = image,
	text = "avatar",
}: AvatarProps): JSX.Element {
	const cx = classNames(type, "border-2 border-indigo-300 aspect-ratio-[1/1] object-cover shadow", {
		"rounded-full": type === "circle",
		"rounded-lg": type === "rounded",
		"w-16": size === "sm",
		"w-20": size === "md",
		"w-24": size === "lg",
	});

	return <img className={cx} src={src} alt={text} />;
}
