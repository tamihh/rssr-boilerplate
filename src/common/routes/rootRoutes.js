import App from '../components/containers/App/App'
import HomePage from '../components/containers/HomePage/HomePage'
import NotFoundPage from '../components/containers/NotFoundPage/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
