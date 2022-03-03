import Badge from "../../../../ui/Badge";

export interface RepositoryTopicsProps {
	repositoryId: string | number;
	topics: Array<string>;
}

export default function Topics({ repositoryId, topics }: RepositoryTopicsProps): JSX.Element {
	const cx = "flex flex-wrap gap-2 mb-1";

	return (
		<ul className={cx}>
			{topics?.map((topic) => (
				<li key={`${repositoryId}-${topic}`}>
					<Badge text={topic} />
				</li>
			))}
		</ul>
	);
}
