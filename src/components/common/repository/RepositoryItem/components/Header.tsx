import Badge from "../../../../ui/Badge";

export interface RepositoryHeaderProps {
	isPrivate: boolean;
	repositoryName: string;
	repositoryUrl?: string;
}

export default function Header({ isPrivate, repositoryName, repositoryUrl }: RepositoryHeaderProps): JSX.Element {
	const cxHeader = "max-w-full mb-1 items-start gap-1 font-medium text-2xl text-clip overflow-hidden";
	const cxLink = "text-blue-700 hover:text-blue-500";

	return (
		<header className={cxHeader}>
			<a className={cxLink} href={repositoryUrl}>
				{repositoryName}
			</a>{" "}
			<Badge text={isPrivate ? "Private" : "Public"} variant="outline" />
		</header>
	);
}
