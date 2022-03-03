import { AiFillEye, AiFillStar } from "react-icons/ai";
import { VscRepoForked } from "react-icons/vsc";
import config from "../../../../../config";

interface RepositoryStatsProps {
	numStars: number;
	numWatchers: number;
	numForks: number;
}

export default function Stats({ numStars, numWatchers, numForks }: RepositoryStatsProps): JSX.Element {
	const cxList = "flex xs:flex-col gap-2";
	const cxStat = "flex items-center gap-1";
	const iconSize = 20;

	return (
		<ul className={cxList}>
			<li className={cxStat}>
				<AiFillStar size={iconSize} title="stars" />
				<span>{config.numberFormatter.format(numStars)}</span>
			</li>
			<li className={cxStat}>
				<AiFillEye size={iconSize} title="watchers" />
				<span>{config.numberFormatter.format(numWatchers)}</span>
			</li>
			<li className={cxStat}>
				<VscRepoForked size={iconSize} title="forks" />
				<span>{config.numberFormatter.format(numForks)}</span>
			</li>
		</ul>
	);
}
