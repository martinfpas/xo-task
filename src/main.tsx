import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Projects } from './components/Projects.tsx';
import { Layout } from './components/Layout.tsx';
import { NewProject } from './components/NewProject.tsx';
import { UpdateProject } from './components/UpdateProject.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
    element: <UpdateProject />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  </Provider>
);
