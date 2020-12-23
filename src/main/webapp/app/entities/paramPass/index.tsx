import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ParamPass from './paramPass';
import ParamPassDetail from './paramPass-detail';
import ParamPassUpdate from './paramPass-update';
import ParamPassDeleteDialog from './paramPass-delete-dialog';

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
