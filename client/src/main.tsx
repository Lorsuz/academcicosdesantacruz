import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@style/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';
import '@library/extensions/String.ts';
console.log( 'ariel'.isValidRangeLength( 2, 4 ) );


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				{/* <div className='bg-green-700 text-white p-2 text-center'>
					Seja bem-vindo a nossa aplicação!!
				</div> */}
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
