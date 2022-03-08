import errorImage from "./images/error.png";

interface ErrorStatusProps {
	message: string;
}

export default function ErrorStatus({ message }: ErrorStatusProps): JSX.Element {
	const cx = "flex flex-col items-center gap-2 sm:gap-4 md:gap-6 opacity-75 text-center";
	const cxImage = "w-48 sm:w-56 md:w-64";
	const cxTitle = "text-3xl sm:text-4xl md:text-5xl font-medium";
	const cxSubtitle = "text-xl sm:text-2xl md:text-3xl font-medium";
	const cxMessage = "text-md sm:text-lg md:text-xl";

	return (
		<div className={cx}>
			<img className={cxImage} src={errorImage} alt="error" />
			<h3 className={cxTitle}>OOPS!</h3>
			<h4 className={cxSubtitle}>Something went wrong :(</h4>
			<h6 className={cxMessage}>{message}</h6>
		</div>
	);
}
