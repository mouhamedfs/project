import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import personne, {
  PersonneState
} from 'app/entities/personne/personne.reducer';
// prettier-ignore
import job, {
  JobState
} from 'app/entities/job/job.reducer';
// prettier-ignore
import departement, {
  DepartementState
} from 'app/entities/departement/departement.reducer';

import authority, { AuthorityState } from 'app/entities/authority/authority.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

import prepaImmo, { PrepaImmoState } from 'app/entities/prepaImmo/prepaImmo.reducer';
import immobilisation, { ImmoState } from 'app/entities/Immobilisation/Immo.reducer';
import param, { ParamState } from 'app/entities/paramPass/param.reducer';
import sousFamille, { SousFamilleState } from 'app/entities/sousFamille/sousfamille.reducer';
import famille, { FamilleState } from 'app/entities/famille/famille.reducer';
import agence, { AgenceState } from 'app/entities/agence/agence.reducer';
import localisation, { LocalisationState } from 'app/entities/localisation/localisation.reducer';
import site, { SiteState } from 'app/entities/site/site.reducer';
export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly personne: PersonneState;
  readonly job: JobState;
  readonly departement: DepartementState;
  readonly authority: AuthorityState;
  readonly prepaImmo: PrepaImmoState;
  readonly immobilisation: ImmoState;
  readonly param: ParamState;
  readonly sousFamille: SousFamilleState;
  readonly famille: FamilleState;
  readonly agence: AgenceState;
  readonly localisation: LocalisationState;
  readonly site: SiteState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  personne,
  job,
  departement,
  authority,
  prepaImmo,
  immobilisation,
  param,
  sousFamille,
  famille,
  agence,
  localisation,
  site,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
});

export default rootReducer;
