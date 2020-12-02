import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Immobilisation from './immobilisation';
import ImmobilisationDetail from './Immobilisation-detail';
import ImmobilisationUpdate from './Immobilisation-update';
import ImmobilisationDeleteDialog from './Immobilisation-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ImmobilisationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:immo/edit`} component={ImmobilisationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:immo`} component={ImmobilisationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Immobilisation} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:immo/delete`} component={ImmobilisationDeleteDialog} />
  </>
);

export default Routes;
