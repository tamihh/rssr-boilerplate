import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../Header/Header';
import { applicationStatus } from './store/action';
import { hot } from 'react-hot-loader';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default hot(module)({
  component: App,
  loadData: (dispatch) => dispatch(applicationStatus())
});
