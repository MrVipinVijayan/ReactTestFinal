import './App.css';
import HomeRouterComponent from './routes/HomeRouterComponent';
import { useHistory } from 'react-router-dom';
import { appName } from './configs/AppConfig';

const App = () => {
	const history = useHistory();

	const backButtonClick = () => history.goBack();

	return (
		<div className="App">
			<nav>
				{appName}
				<button onClick={backButtonClick}>X</button>
			</nav>
			<HomeRouterComponent />
		</div>
	);
};

export default App;
