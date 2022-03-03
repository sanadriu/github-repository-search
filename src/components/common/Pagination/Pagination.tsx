import { useSearchParams } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import classNames from "classnames";

interface PaginationProps {
	lastPage: number;
}

export default function Pagination({ lastPage }: PaginationProps): JSX.Element {
	const [searchParams, setSearchParams] = useSearchParams();

	const page: number = Number(searchParams.get("page")) || 1;

	const allowNextPage: boolean = page < lastPage;
	const allowPreviousPage: boolean = page > 1;

	const objSearchParams: object = Object.fromEntries(searchParams.entries());

	function handleNextPage() {
		if (allowNextPage) setSearchParams({ ...objSearchParams, page: (page + 1).toString() });
	}

	function handlePreviousPage() {
		if (allowPreviousPage) setSearchParams({ ...objSearchParams, page: (page - 1).toString() });
	}

	const cx = "p-1 w-full flex justify-between items-center gap-2 bg-white bg-opacity-40 rounded shadow-md";
	const cxCurrentPage = "text-indigo-800 text-xl font-medium";
	const cxNextPage = classNames("cursor-pointer text-indigo-800", !allowNextPage && "opacity-50");
	const cxPreviousPage = classNames("cursor-pointer text-indigo-800", !allowPreviousPage && "opacity-50");

	return (
		<aside className={cx}>
			<BiLeftArrow
				className={cxPreviousPage}
				onClick={() => {
					handlePreviousPage();
				}}
			/>
			<span className={cxCurrentPage}>
				{page}/{lastPage}
			</span>
			<BiRightArrow
				className={cxNextPage}
				onClick={() => {
					handleNextPage();
				}}
			/>
		</aside>
	);
}
