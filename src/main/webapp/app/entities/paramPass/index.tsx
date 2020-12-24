import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ParamPass from './param';
import ParamPassDetail from './param-detail';
import ParamPassUpdate from './param-update';
import ParamPassDeleteDialog from './param-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ParamPassUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numNumbers/edit`} component={ParamPassUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numNumbers`} component={ParamPassDetail} />
      <ErrorBoundaryRoute path={match.url} component={ParamPass} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:numNumbers/delete`} component={ParamPassDeleteDialog} />
  </>
);

export default Routes;
