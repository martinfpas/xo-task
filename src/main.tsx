import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProjectList } from './components/Project.tsx';
import { Layout } from './components/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectList />
  },
  {
    path: '/project',
    element: <>New Project</>
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
