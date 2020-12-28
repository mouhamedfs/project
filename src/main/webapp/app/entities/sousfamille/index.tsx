import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SousFamille from './sousfamille';
import SousFamilleDetail from './sousfamille-detail';
import SousFamilleUpdate from './sousfamille-update';
import SousFamilleDeleteDialog from './sousfamille-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SousFamilleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:csfam/edit`} component={SousFamilleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:csfam`} component={SousFamilleDetail} />
      <ErrorBoundaryRoute path={match.url} component={SousFamille} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:csfam/delete`} component={SousFamilleDeleteDialog} />
  </>
);

export default Routes;
