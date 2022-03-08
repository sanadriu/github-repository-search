import NoDataImage from "./images/sad.png";

export default function NoDataStatus(): JSX.Element {
	const cx = "flex flex-col items-center gap-2 sm:gap-4 md:gap-6 text-center";
	const cxImage = "w-48 sm:w-56 md:w-64";
	const cxTitle = "text-xl sm:text-2xl md:text-3xl font-medium opacity-75";

	return (
		<div className={cx}>
			<img className={cxImage} src={NoDataImage} alt="search" />
			<h3 className={cxTitle}>Nothing was found</h3>
		</div>
	);
}
