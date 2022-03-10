import classNames from "classnames";

export interface InputProps extends Omit<React.ComponentProps<"input">, "className"> {
	type?: "text" | "search" | "email" | "password" | "date" | "tel" | "number";
	invalid?: boolean;
}

export default function InputField({ type, invalid = false, disabled, ...rest }: InputProps): JSX.Element {
	const cx = classNames(
		"p-1 flex-grow border rounded shadow outline-none ease-out duration-100 bg-white/70 placeholder:text-black",
		disabled && "bg-gray-100 border-gray-200",
		invalid && "border-red-200 focus:border-red-400",
		!invalid && "border-indigo-200 focus:border-indigo-400"
	);

	return <input className={cx} type={type} disabled={disabled} {...rest} />;
}
