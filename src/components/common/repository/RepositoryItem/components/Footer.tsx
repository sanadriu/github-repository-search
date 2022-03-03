export interface RepositoryFooterProps {
	language?: string;
	license?: string;
	updatedAt?: string;
}

export default function Footer({ language, license, updatedAt }: RepositoryFooterProps): JSX.Element {
	const cx = "flex gap-4 text-xs";

	return (
		<div className={cx}>
			{language && <span>{language}</span>}
			{license && <span>{license}</span>}
			{updatedAt && (
				<span>
					{"Updated on "}
					{updatedAt}
				</span>
			)}
		</div>
	);
}
