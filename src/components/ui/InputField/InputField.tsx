import classNames from "classnames";

export interface InputProps extends Omit<React.ComponentProps<"input">, "className"> {
	type?: "text" | "search" | "email" | "password" | "date" | "tel" | "number";
	invalid?: boolean;
}

export default function InputField({ type, invalid = false, ...rest }: InputProps): JSX.Element {
	const cx = classNames(
		"p-1 flex-grow border rounded shadow outline-none ease-out duration-100 font-light disabled:bg-gray-100 disabled:border-gray-200",
		{
			"border-indigo-200 bg-white focus:border-indigo-400": !invalid,
			"border-red-200 bg-white focus:border-red-400": invalid,
		}
	);

	return <input className={cx} type={type} {...rest} />;
}
