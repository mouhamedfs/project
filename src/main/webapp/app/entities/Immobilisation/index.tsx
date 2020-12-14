import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Immobilisation from './immobilisation';
import ImmobilisationDetail from './Immobilisation-detail';
import ImmobilisationUpdate from './Immobilisation-update';
import ImmobilisationDeleteDialog from './Immobilisation-delete-dialog';
import { AUTHORITIES } from 'app/config/constants';
import PrivateRoute from 'app/shared/auth/private-route';

const Routes = ({ match }) => (
  <>
    <Switch>
      <PrivateRoute path={`${match.url}/new`} component={ImmobilisationUpdate} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.PARAM]} />
      <PrivateRoute  path={`${match.url}/:immo/edit`} component={ImmobilisationUpdate} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.MANAGER]} />
      <PrivateRoute  path={`${match.url}/:immo`} component={ImmobilisationDetail} />
      <PrivateRoute path={match.url} component={Immobilisation} />
      <PrivateRoute  path={`${match.url}/:immo/delete`} component={ImmobilisationDeleteDialog}  hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.MANAGER]} />
    </Switch>
  </>
);

export default Routes;
