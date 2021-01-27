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
import SousFamille from './sousfamille';
import Famille from './famille';
import Agence from './agence';
import Localisation from './localisation';
import Site from './site';
import Direction from './direction';
import Service from './service';
import Subvention from './subvention';
import SubImmo from './subImmo';
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
      <ErrorBoundaryRoute path={`${match.url}ssfamille`} component={SousFamille} />
      <ErrorBoundaryRoute path={`${match.url}famille`} component={Famille} />
      <ErrorBoundaryRoute path={`${match.url}agence`} component={Agence} />
      <ErrorBoundaryRoute path={`${match.url}localisation`} component={Localisation} />
      <ErrorBoundaryRoute path={`${match.url}site`} component={Site} />
      <ErrorBoundaryRoute path={`${match.url}direction`} component={Direction} />
      <ErrorBoundaryRoute path={`${match.url}service`} component={Service} />
      <ErrorBoundaryRoute path={`${match.url}subvention`} component={Subvention} />
      <ErrorBoundaryRoute path={`${match.url}subImmo`} component={SubImmo} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
