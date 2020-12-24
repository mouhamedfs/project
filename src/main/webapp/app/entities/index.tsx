import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Personne from './personne';
import Job from './job';
import Departement from './departement';
import Authority from './authority';
import PrepaImmo from './prepaImmo';
import Immobilisation from './immobilisation';
import ParamPass from './paramPass';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}personne`} component={Personne} />
      <ErrorBoundaryRoute path={`${match.url}job`} component={Job} />
      <ErrorBoundaryRoute path={`${match.url}departement`} component={Departement} />
      <ErrorBoundaryRoute path={`${match.url}authority`} component={Authority} />
      <ErrorBoundaryRoute path={`${match.url}prepaImmo`} component={PrepaImmo} />
      <ErrorBoundaryRoute path={`${match.url}immo`} component={Immobilisation} />
      <ErrorBoundaryRoute path={`${match.url}paramPass`} component={ParamPass} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
