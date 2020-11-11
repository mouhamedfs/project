import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Personne from './personne';
import Job from './job';
import Departement from './departement';
import Authority from './authority';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}personne`} component={Personne} />
      <ErrorBoundaryRoute path={`${match.url}job`} component={Job} />
      <ErrorBoundaryRoute path={`${match.url}departement`} component={Departement} />
      <ErrorBoundaryRoute path={`${match.url}authority`} component={Authority} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
