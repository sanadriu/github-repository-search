import searchImage from "./images/search.png";

export default function IdleStatus(): JSX.Element {
	const cx = "flex flex-col items-center gap-2 sm:gap-4 md:gap-6 opacity-75 text-center";
	const cxImage = "w-48 sm:w-56 md:w-64";
	const cxTitle = "text-xl sm:text-2xl md:text-3xl font-medium";

	return (
		<div className={cx}>
			<img className={cxImage} src={searchImage} alt="search" />
			<h3 className={cxTitle}>Type something in the search bar and press the button</h3>
		</div>
	);
}
