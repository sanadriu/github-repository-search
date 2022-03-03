import classNames from "classnames";

interface BadgeProps {
	text?: string;
	variant?: "filled" | "outline";
}

export default function Badge({ text = "Badge", variant = "filled" }: BadgeProps): JSX.Element {
	const cx = classNames("h-fit px-2 py-[2px] rounded-full font-medium text-xs", {
		[`border border-indigo-500`]: variant === "outline",
		[`bg-indigo-500 text-white pb-[4px]`]: variant === "filled",
	});

	return <span className={cx}>{text}</span>;
}
