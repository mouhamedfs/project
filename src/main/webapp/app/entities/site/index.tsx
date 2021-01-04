import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Site from './site';
import SiteDetail from './site-detail';
import SiteUpdate from './site-update';
import SiteDeleteDialog from './site-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SiteUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:codesite/edit`} component={SiteUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:codesite`} component={SiteDetail} />
      <ErrorBoundaryRoute path={match.url} component={Site} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:codesite/delete`} component={SiteDeleteDialog} />
  </>
);

export default Routes;
