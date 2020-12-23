import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './paramPass.reducer';
import { IParamPass } from 'app/shared/model/paramPass.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IParamPassUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ numNumbers: string }> {}

export const ParamPassUpdate = (props: IParamPassUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numNumbers);

  const { paramPassEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/paramPass');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.numNumbers);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...paramPassEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

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
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : paramPassEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="paramPass-numNumbers">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="paramPass-numNumbers" type="text" className="form-control" name="numNumbers" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="numUpper" for="paramPass-numUpper">
                  <Translate contentKey="projectReactSprApp.paramPass.numUpper">numUpper</Translate>
                </Label>
                <AvField id="paramPass-numUpper" type="number" name="numUpper" />
              </AvGroup>
              <AvGroup>
                <Label id="numSpecialLabel" for="paramPass-numSpecial">
                  <Translate contentKey="projectReactSprApp.paramPass.numSpecial">numSpecial</Translate>
                </Label>
                <AvField id="paramPass-numSpecial" type="number" name="numSpecial" />
              </AvGroup>
              <AvGroup>
                <Label id="dateDefLabel" for="paramPass-dateDef">
                  <Translate contentKey="projectReactSprApp.paramPass.dateDef">dateDef</Translate>
                </Label>
                <AvField id="paramPass-dateDef" type="date" className="form-control" name="dateDef" />
              </AvGroup>
              <AvGroup>
                <Label id="minLengthLabel" for="paramPass-minLength">
                  <Translate contentKey="projectReactSprApp.paramPass.minLength">minLength</Translate>
                </Label>
                <AvField id="paramPass-minLength" type="number" name="minLength" />
              </AvGroup>
              <AvGroup>
                <Label id="libelleParamLabel" for="paramPass-libelleParam">
                  <Translate contentKey="projectReactSprApp.paramPass.libelleParam">libelleParam</Translate>
                </Label>
                <AvField id="paramPass-libelleParam" type="text" name="libelleParam" />
              </AvGroup>
              <AvGroup>
                <Label id="freqModifLabel" for="paramPass-freqModif">
                  <Translate contentKey="projectReactSprApp.paramPass.freqModif">freqModif</Translate>
                </Label>
                <AvField id="paramPass-freqModif" type="number" name="freqModif" />
              </AvGroup>
              <AvGroup>
                <Label id="nbreJourActivLabel" for="paramPass-nbreJourActiv">
                  <Translate contentKey="projectReactSprApp.paramPass.nbreJourActiv">nbreJourActiv</Translate>
                </Label>
                <AvField id="paramPass-nbreJourActiv" type="number" name="nbreJourActiv" />
              </AvGroup>
              <AvGroup>
                <Label id="nbrePasseAntLabel" for="paramPass-nbrePasseAnt">
                  <Translate contentKey="projectReactSprApp.paramPass.nbrePasseAnt">nbrePasseAnt</Translate>
                </Label>
                <AvField id="paramPass-nbrePasseAnt" type="number" name="nbrePasseAnt" />
              </AvGroup>
              <AvGroup>
                <Label id="nbJourAvModifLabel" for="paramPass-nbJourAvModif">
                  <Translate contentKey="projectReactSprApp.paramPass.nbJourAvModif">nbJourAvModif</Translate>
                </Label>
                <AvField id="paramPass-nbJourAvModif" type="number" name="nbJourAvModif" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/paramPass" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  paramPassEntity: storeState.paramPass.entity,
  loading: storeState.paramPass.loading,
  updating: storeState.paramPass.updating,
  updateSuccess: storeState.paramPass.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ParamPassUpdate);
