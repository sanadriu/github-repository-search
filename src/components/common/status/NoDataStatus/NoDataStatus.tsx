import NoDataImage from "./images/sad.png";

export default function NoDataStatus(): JSX.Element {
	const cx = "flex flex-col items-center gap-6";
	const cxImage = "w-64";
	const cxTitle = "text-3xl font-medium opacity-75";

	return (
		<div className={cx}>
			<img className={cxImage} src={NoDataImage} alt="search" />
			<h3 className={cxTitle}>Nothing was found</h3>
		</div>
	);
}
