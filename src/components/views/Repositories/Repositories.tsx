import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useRepositories from "../../../hooks/api/useRepositories";
import Search from "../../common/Search";
import Layout from "../../Layout";
import { Repository, RepositoryData } from "../../../types";
import { normalizeRepository } from "../../../utils/normalizers/normalizeRepository";
import RepositoryList from "../../common/repository/RepositoryList";
import Pagination from "../../common/Pagination";
import ErrorStatus from "../../common/status/ErrorStatus";
import IdleStatus from "../../common/status/IdleStatus";
import LoadingStatus from "../../common/status/LoadingStatus";
import NoDataStatus from "../../common/status/NoDataStatus";
import config from "../../../config";

export default function Repositories(): JSX.Element {
	const [searchParams] = useSearchParams();
	const q: string = searchParams.get("q") || "";
	const page: number = Number(searchParams.get("page")) || 1;

	const { data, error, isError, isLoading, isSuccess, isIdle, refetch } = useRepositories(
		{ q, per_page: config.queryParams.per_page, page },
		false
	);

	useEffect(() => {
		if (q.length > 0) {
			refetch();
		}
	}, [q, page, refetch]);

	const items: Array<Repository> =
		(data?.items &&
			Array.isArray(data.items) &&
			data.items.map((item: RepositoryData): Repository => normalizeRepository(item))) ||
		[];

	const total: number = data?.total_count || 0;
	const lastPage: number = Math.ceil(total / config.queryParams.per_page);

	const cxMain = "p-2 sm:p-4 md:p-8 container max-w-5xl flex flex-col gap-4 h-full";
	const cxSection = "p-1 flex-grow bg-white bg-opacity-40 rounded overflow-hidden flex flex-col justify-center";
	const cxExplorer = "h-full flex flex-col justify-between gap-2";

	return (
		<Layout>
			<main className={cxMain}>
				<Search searchKey="q" />
				<section className={cxSection}>
					{isError && error instanceof Error && <ErrorStatus message={error.message} />}
					{isIdle && <IdleStatus />}
					{isLoading && <LoadingStatus />}
					{isSuccess && items.length === 0 && <NoDataStatus />}
					{isSuccess && items.length > 0 && (
						<div className={cxExplorer}>
							<RepositoryList list={items} total={total} />
							<Pagination lastPage={lastPage} />
						</div>
					)}
				</section>
			</main>
		</Layout>
	);
}
