import { Repository } from "../../../../types";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Owner from "./components/Owner";
import Stats from "./components/Stats";
import Topics from "./components/Topics";

export interface RepositoryItemProps {
	item: Repository;
}

export default function RepositoryItem({ item }: RepositoryItemProps): JSX.Element {
	const cxArticle =
		"max-w-full p-3 flex flex-col gap-2 xs:flex-row items-start text-zinc-800 bg-white bg-opacity-50 border border-zinc-400 backdrop-blur-md shadow-lg rounded";

	return (
		<article className={cxArticle}>
			<div className="flex-grow flex flex-col gap-2">
				<Header {...item} />
				{item.user && <Owner {...item.user} />}
				{item.repositoryDescription && <p>{item.repositoryDescription}</p>}
				{item.topics?.length > 0 && <Topics repositoryId={item.id} {...item} />}
				<Footer {...item} />
			</div>
			<Stats {...item} />
		</article>
	);
}

// {item.numStars && <span>{item.numStars}</span>}
// {item.numForks && <span>{item.numForks}</span>}
// {item.numWatchers && <span>{item.numWatchers}</span>}
