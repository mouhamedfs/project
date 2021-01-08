import React, { useState, useEffect } from 'react';
import { Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Row, Col, Button,Table } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import PasswordStrengthBar from 'app/shared/layout/password/password-strength-bar';
import { savePassword, reset } from './password.reducer';
import { getParam } from 'app/entities/paramPass/param.reducer';

export interface IUserPasswordProps extends StateProps, DispatchProps {}

export const PasswordPage = (props: IUserPasswordProps) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    props.reset();
    props.getSession();
    props.getParam(1);
    return () => {
      props.reset();
    };
  }, []);

  const { paramPassEntity } = props;

  const handleValidSubmit = (event, values) => {
    props.savePassword(values.currentPassword, values.newPassword);
  };

  const updatePassword = event => setPassword(event.target.value);

  return (
    <>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.numUpper">numUpper</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.numSpecial">numSpecial</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.dateDef">dateDef</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.minLength">minLength</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.libelleParam">libelleParam</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.freqModif">freqModif</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.nbreJourActiv">nbreJourActiv</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.nbrePasseAnt">nbrePasseAnt</Translate>
              </th>
              <th>
                <Translate contentKey="projectReactSprApp.paramPass.nbJourAvModif">nbJourAvModif</Translate>
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{paramPassEntity.numUpper}</td>
              <td>{paramPassEntity.numSpecial}</td>
              <td>{paramPassEntity.dateDef}</td>
              <td>{paramPassEntity.minLength}</td>
              <td>{paramPassEntity.libelleParam}</td>
              <td>{paramPassEntity.freqModif}</td>
              <td>{paramPassEntity.nbreJourActiv}</td>
              <td>{paramPassEntity.nbrePasseAnt}</td>
              <td>{paramPassEntity.nbJourAvModif}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="password-title">
              <Translate contentKey="password.title" interpolate={{ username: props.account.login }}>
                Password for {props.account.login}
              </Translate>
            </h2>
            <AvForm id="password-form" onValidSubmit={handleValidSubmit}>
              <AvField
                name="currentPassword"
                label={translate('global.form.currentpassword.label')}
                placeholder={translate('global.form.currentpassword.placeholder')}
                type="password"
                validate={{
                  required: { value: true, errorMessage: translate('global.messages.validate.newpassword.required') },
                }}
              />
              <AvField
                name="newPassword"
                label={translate('global.form.newpassword.label')}
                placeholder={translate('global.form.newpassword.placeholder')}
                type="password"
                validate={{
                  required: { value: true, errorMessage: translate('global.messages.validate.newpassword.required') },
                  minLength: { value: 4, errorMessage: translate('global.messages.validate.newpassword.minlength') },
                  maxLength: { value: 50, errorMessage: translate('global.messages.validate.newpassword.maxlength') },
                }}
                onChange={updatePassword}
              />
              <PasswordStrengthBar password={password} />
              <AvField
                name="confirmPassword"
                label={translate('global.form.confirmpassword.label')}
                placeholder={translate('global.form.confirmpassword.placeholder')}
                type="password"
                validate={{
                  required: {
                    value: true,
                    errorMessage: translate('global.messages.validate.confirmpassword.required'),
                  },
                  minLength: {
                    value: 4,
                    errorMessage: translate('global.messages.validate.confirmpassword.minlength'),
                  },
                  maxLength: {
                    value: 50,
                    errorMessage: translate('global.messages.validate.confirmpassword.maxlength'),
                  },
                  match: {
                    value: 'newPassword',
                    errorMessage: translate('global.messages.error.dontmatch'),
                  },
                }}
              />
              <Button color="success" type="submit">
                <Translate contentKey="password.form.button">Save</Translate>
              </Button>
            </AvForm>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = ({ authentication, param }: IRootState) => ({
  paramPassEntity: param.entity,
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
});

const mapDispatchToProps = { getSession, savePassword, reset ,getParam};


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);
