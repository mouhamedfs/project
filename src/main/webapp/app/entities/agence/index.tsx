import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Agence from './agence';
import AgenceDetail from './agence-detail';
import AgenceUpdate from './agence-update';
import AgenceDeleteDialog from './agence-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AgenceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:age/edit`} component={AgenceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:age`} component={AgenceDetail} />
      <ErrorBoundaryRoute path={match.url} component={Agence} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:age/delete`} component={AgenceDeleteDialog} />
  </>
);

export default Routes;
