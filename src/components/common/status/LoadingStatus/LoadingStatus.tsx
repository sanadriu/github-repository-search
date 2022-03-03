import { BallTriangle } from "react-loader-spinner";

export default function LoadingStatus(): JSX.Element {
	const cx = "flex flex-col items-center gap-6 opacity-75";
	const cxTitle = "text-3xl font-medium";

	return (
		<div className={cx}>
			<BallTriangle color="indigo" height={80} width={80} />
			<h3 className={cxTitle}>Loading...</h3>
		</div>
	);
}
