import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Immobilisation from './Immo';
import ImmobilisationRecherche from './immo-recherche';
import ImmobilisationDetail from './Immo-detail';
import ImmobilisationUpdate from './Immo-update';
import ImmobilisationDeleteDialog from './Immo-delete-dialog';
import { AUTHORITIES } from 'app/config/constants';
import PrivateRoute from 'app/shared/auth/private-route';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ImmobilisationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/recherche`} component={ImmobilisationRecherche} />
      <ErrorBoundaryRoute exact path={`${match.url}/:immo/edit`} component={ImmobilisationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:immo`} component={ImmobilisationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Immobilisation} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:immo/delete`} component={ImmobilisationDeleteDialog} />
  </>
);

export default Routes;
