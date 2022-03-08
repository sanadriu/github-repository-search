import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

export interface SearchProps {
	searchKey: string;
}

export default function Search({ searchKey }: SearchProps): JSX.Element {
	const [value, setValue] = useState<string>("");
	const [searchParams, setSearchParams] = useSearchParams();

	const objSearchParams: object = Object.fromEntries(searchParams.entries());

	const searchEnabled: boolean = typeof value === "string" && value.length > 0;

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (searchEnabled) setSearchParams({ ...objSearchParams, [searchKey]: value, page: "1" });
	}

	const cx = "p-1 w-full flex gap-2 bg-white bg-opacity-40 rounded shadow-md";

	return (
		<form className={cx} onSubmit={handleSubmit}>
			<InputField type="search" placeholder="Search..." onChange={handleChange} value={value} />
			<Button type="submit" disabled={!searchEnabled}>
				Search
			</Button>
		</form>
	);
}
