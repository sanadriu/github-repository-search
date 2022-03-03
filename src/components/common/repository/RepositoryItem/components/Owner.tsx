export interface RepositoryOwnerProps {
	username: string;
	userUrl: string;
}

export default function Owner({ username, userUrl }: RepositoryOwnerProps): JSX.Element {
	const cx = "text-xs font-medium hover:text-zinc-500";

	return (
		<a className={cx} href={userUrl}>
			{"Created by "}
			{username}
		</a>
	);
}
