import * as routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Repositories from "./components/views/Repositories";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path={routes.ROOT} element={<Navigate to="/repositories" />} />
					<Route path={routes.REPOSITORIES} element={<Repositories />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
