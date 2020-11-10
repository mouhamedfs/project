import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Departement from './departement';
import DepartementDetail from './departement-detail';
import DepartementUpdate from './departement-update';
import DepartementDeleteDialog from './departement-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DepartementUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DepartementUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DepartementDetail} />
      <ErrorBoundaryRoute path={match.url} component={Departement} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DepartementDeleteDialog} />
  </>
);

export default Routes;
