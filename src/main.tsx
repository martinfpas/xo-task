import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Projects } from './components/Projects.tsx';
import { Layout } from './components/Layout.tsx';
import { NewProject } from './components/NewProject.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Projects />
  },
  {
    path: '/project',
    element: < NewProject />
  },
  {
    path: '/project/:id',
    element: <>Edit Project #</>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  </Provider>
);
