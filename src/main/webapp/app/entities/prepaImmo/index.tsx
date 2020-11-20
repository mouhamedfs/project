import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PrepaImmo from './prepaImmo';
import PrepaImmoDetail from './prepaImmo-detail';
import PrepaImmoUpdate from './prepaImmo-update';
import PrepaImmoDeleteDialog from './prepaImmo-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PrepaImmoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numero/edit`} component={PrepaImmoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numero`} component={PrepaImmoDetail} />
      <ErrorBoundaryRoute path={match.url} component={PrepaImmo} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:numero/delete`} component={PrepaImmoDeleteDialog} />
  </>
);

export default Routes;
