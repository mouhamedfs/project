import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SubImmo from './subImmo';
import SubImmoDetail from './subImmo-detail';
import SubImmoUpdate from './subImmo-update';
import SubImmoDeleteDialog from './subImmo-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SubImmoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numSub/edit`} component={SubImmoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:numSub`} component={SubImmoDetail} />
      <ErrorBoundaryRoute path={match.url} component={SubImmo} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:numSub/delete`} component={SubImmoDeleteDialog} />
  </>
);

export default Routes;
