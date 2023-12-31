import {createRoot} from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './features/store';

createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

