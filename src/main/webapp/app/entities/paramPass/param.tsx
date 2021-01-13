import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntities } from './param.reducer';
import { IParamPass } from 'app/shared/model/paramPass.model';


export interface IParamPassProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ParamPass = (props: IParamPassProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { paramPassList, match} = props;

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectReactSprApp.personne.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.paramPass.home.createOrEditLabel">Create or edit a Param</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="5">
          {paramPassList.map((param, i) => (
            <AvForm key={param.numNumbers}>
              <AvGroup>
                <Label for="paramPass-numNumbers">
                  <Translate contentKey="global.field.id">ID</Translate>
                </Label>
                <AvInput
                  id="paramPass-numNumbers"
                  value={param.numNumbers}
                  type="text"
                  className="form-control"
                  name="numNumbers"
                  required
                  readOnly
                />
              </AvGroup>
              <AvGroup>
                <Label id="numUpper" for="paramPass-numUpper">
                  <Translate contentKey="projectReactSprApp.paramPass.numUpper">numUpper</Translate>
                </Label>
                <AvField id="paramPass-numUpper" value={param.numUpper} type="number" name="numUpper" />
              </AvGroup>
              <AvGroup>
                <Label id="numSpecialLabel" for="paramPass-numSpecial">
                  <Translate contentKey="projectReactSprApp.paramPass.numSpecial">numSpecial</Translate>
                </Label>
                <AvField id="paramPass-numSpecial" value={param.numSpecial} type="number" name="numSpecial" />
              </AvGroup>
              <AvGroup>
                <Label id="dateDefLabel" for="paramPass-dateDef">
                  <Translate contentKey="projectReactSprApp.paramPass.dateDef">dateDef</Translate>
                </Label>
                <AvField id="paramPass-dateDef" value={param.dateDef} type="date" className="form-control" name="dateDef" />
              </AvGroup>
              <AvGroup>
                <Label id="minLengthLabel" for="paramPass-minLength">
                  <Translate contentKey="projectReactSprApp.paramPass.minLength">minLength</Translate>
                </Label>
                <AvField id="paramPass-minLength" value={param.minLength} type="number" name="minLength" />
              </AvGroup>
              <AvGroup>
                <Label id="libelleParamLabel" for="paramPass-libelleParam">
                  <Translate contentKey="projectReactSprApp.paramPass.libelleParam">libelleParam</Translate>
                </Label>
                <AvField id="paramPass-libelleParam" value={param.libelleParam} type="text" name="libelleParam" />
              </AvGroup>
              <AvGroup>
                <Label id="freqModifLabel" for="paramPass-freqModif">
                  <Translate contentKey="projectReactSprApp.paramPass.freqModif">freqModif</Translate>
                </Label>
                <AvField id="paramPass-freqModif" value={param.freqModif} type="number" name="freqModif" />
              </AvGroup>
              <AvGroup>
                <Label id="nbreJourActivLabel" for="paramPass-nbreJourActiv">
                  <Translate contentKey="projectReactSprApp.paramPass.nbreJourActiv">nbreJourActiv</Translate>
                </Label>
                <AvField id="paramPass-nbreJourActiv" value={param.nbreJourActiv} type="number" name="nbreJourActiv" />
              </AvGroup>
              <AvGroup>
                <Label id="nbrePasseAntLabel" for="paramPass-nbrePasseAnt">
                  <Translate contentKey="projectReactSprApp.paramPass.nbrePasseAnt">nbrePasseAnt</Translate>
                </Label>
                <AvField id="paramPass-nbrePasseAnt" value={param.nbrePasseAnt} type="number" name="nbrePasseAnt" />
              </AvGroup>
              <AvGroup>
                <Label id="nbJourAvModifLabel" for="paramPass-nbJourAvModif">
                  <Translate contentKey="projectReactSprApp.paramPass.nbJourAvModif">nbJourAvModif</Translate>
                </Label>
                <AvField id="paramPass-nbJourAvModif" value={param.nbJourAvModif} type="number" name="nbJourAvModif" />
              </AvGroup>
              <Row className="justify-content-end">
                <Col md="5">
                  <Button tag={Link} to={`${match.url}/${param.numNumbers}/edit`} color="primary" size="sm">
                    <FontAwesomeIcon icon="pencil-alt" />{' '}
                    <span className="d-none d-md-inline">
                      <Translate contentKey="entity.action.edit">Edit</Translate>
                    </span>
                  </Button>
                  &nbsp;
                  <Button tag={Link} to={`${match.url}/${param.numNumbers}/delete`} color="danger" size="sm">
                    <FontAwesomeIcon icon="trash" />{' '}
                    <span className="d-none d-md-inline">
                      <Translate contentKey="entity.action.delete">Delete</Translate>
                    </span>
                  </Button>
                </Col>
              </Row>
            </AvForm>
          ))}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
 paramPassList: storeState.param.entities,
});

const mapDispatchToProps = {
   getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ParamPass);
