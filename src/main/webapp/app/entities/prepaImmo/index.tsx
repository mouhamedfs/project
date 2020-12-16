import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PrepaImmo from './prepaImmo2';
import PrepaImmoDetail from './prepaImmo-detail';
import PrepaImmoUpdate from './prepaImmo-update';
import PrepaImmoDeleteDialog from './prepaImmo-delete-dialog';
import PrepaImmoUpdateDialogProps from './prepaImmo-refus';
import PrepaImmoValidDialogProps from './prepaImmo-validation';

import { AUTHORITIES } from 'app/config/constants';
import PrivateRoute from 'app/shared/auth/private-route';

const Routes = ({ match }) => (
  <>
    <Switch>
      <PrivateRoute path={`${match.url}/new`} component={PrepaImmoUpdate} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.PARAM]} />
      <PrivateRoute path={`${match.url}/:numero/edit`} component={PrepaImmoUpdate} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.MANAGER]} />
      <PrivateRoute path={`${match.url}/:numero/edit2`} component={PrepaImmoUpdateDialogProps} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.PARAM]} />
      <PrivateRoute path={`${match.url}/:numero/valid`} component={PrepaImmoValidDialogProps} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.PARAM]} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numero`} component={PrepaImmoDetail} />
      <PrivateRoute path={`${match.url}/:numero/delete`} component={PrepaImmoDeleteDialog} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.MANAGER,AUTHORITIES.PARAM]} />
      <ErrorBoundaryRoute path={match.url} component={PrepaImmo} />
    </Switch>
    
  </>
);

export default Routes;
