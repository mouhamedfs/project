import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Localisation from './localisation';
import LocalisationDetail from './localisation-detail';
import LocalisationUpdate from './localisation-update';
import LocalisationDeleteDialog from './localisation-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={LocalisationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:codeLocal/edit`} component={LocalisationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:codeLocal`} component={LocalisationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Localisation} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:codeLocal/delete`} component={LocalisationDeleteDialog} />
  </>
);

export default Routes;
