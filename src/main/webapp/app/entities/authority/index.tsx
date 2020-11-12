import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Authority from './authority';
import AuthorityDetail from './authority-detail';
import AuthorityUpdate from './authority-update';
import AuthorityDeleteDialog from './authority-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AuthorityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:name/edit`} component={AuthorityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:name`} component={AuthorityDetail} />
      <ErrorBoundaryRoute path={match.url} component={Authority} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:name/delete`} component={AuthorityDeleteDialog} />
  </>
);

export default Routes;
