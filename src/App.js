
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Components/routes/routes';
import store from './State/Store/store';



function App() {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
