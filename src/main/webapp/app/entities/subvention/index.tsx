import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Subvention from './subvention';
import SubventionDetail from './subvention-detail';
import SubventionUpdate from './subvention-update';
import SubventionDeleteDialog from './subvention-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SubventionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numSub/edit`} component={SubventionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numSub`} component={SubventionDetail} />
      <ErrorBoundaryRoute path={match.url} component={Subvention} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:numSub/delete`} component={SubventionDeleteDialog} />
  </>
);

export default Routes;
