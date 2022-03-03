export type InputValue = string | number | readonly string[] | undefined;

export interface InputProps {
	type?: "text" | "search" | "email" | "password" | "date" | "tel";
	placeholder?: string;
	handleChange?: React.ChangeEventHandler<HTMLInputElement>;
	handleBlur?: React.FocusEventHandler<HTMLInputElement>;
	value?: InputValue;
}

export default function InputField({ type, placeholder, handleChange, handleBlur, value }: InputProps): JSX.Element {
	const cx =
		"p-1 flex-grow border border-indigo-200 bg-indigo-100 rounded outline-none active:border-indigo-400 focus:border-indigo-400";

	return (
		<input
			className={cx}
			type={type}
			placeholder={placeholder}
			onChange={handleChange}
			onBlur={handleBlur}
			value={value}
		/>
	);
}
