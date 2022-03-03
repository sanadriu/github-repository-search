import styles from "./Layout.module.css";

export interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
	const cx = `h-[100vh] min-h-full flex flex-col items-center ${styles["layout-bg"]}`;

	return <div className={cx}>{children}</div>;
}
