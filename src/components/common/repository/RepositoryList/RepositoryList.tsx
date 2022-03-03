import config from "../../../../config";
import { Repository } from "../../../../types";
import RepositoryItem from "../RepositoryItem";

interface RepositoryListProps {
	list: Array<Repository>;
	total: number;
}

export default function RepositoryList({ list, total }: RepositoryListProps): JSX.Element {
	const cxFrame = "min-h-0 flex flex-col";
	const cxTitle = "p-2 mb-1 bg-white text-zinc-900 text-xl bg-opacity-40 rounded shadow-md";
	const cxList = "flex flex-col gap-1 overflow-y-scroll";

	return (
		<div className={cxFrame}>
			<h3 className={cxTitle}>{config.numberFormatter.format(total)} repositories found</h3>
			<ul className={cxList}>
				{list.map((repository: Repository) => (
					<li key={repository.id}>
						<RepositoryItem item={repository} />
					</li>
				))}
			</ul>
		</div>
	);
}
