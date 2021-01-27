import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './subImmo.reducer';
import { ISubImmo } from 'app/shared/model/subImmo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISubImmoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ numSub: string }> {}

export const SubImmoUpdate = (props: ISubImmoUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numSub);

  const { subImmoEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/subImmo');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.numSub);
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
        ...subImmoEntity,
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
          <h2 id="projectReactSprApp.SubImmo.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.SubImmo.home.createOrEditLabel">Create or edit an SubImmo</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : subImmoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="subImmo-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="subImmo-id" type="text" className="form-control" name="numSub" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="numImmoLabel" for="SubImmo-numImmo">
                  <Translate contentKey="projectReactSprApp.SubImmo.numImmo">numImmo</Translate>
                </Label>
                <AvField id="SubImmo-numImmo" type="number" name="numImmo" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxAmortLabel" for="SubImmo-tauxAmort">
                  <Translate contentKey="projectReactSprApp.SubImmo.tauxAmort">tauxAmort</Translate>
                </Label>
                <AvField id="SubImmo-tauxAmort" type="number" name="tauxAmort" />
              </AvGroup>
              <AvGroup>
                <Label id="montantLabel" for="personne-montant">
                  <Translate contentKey="projectReactSprApp.SubImmo.montant">montant</Translate>
                </Label>
                <AvField id="SubImmo-montant" type="text" className="form-control" name="montant" />
              </AvGroup>
              <AvGroup>
                <Label id="cptResulSubLabel" for="SubImmo-cptResulSub">
                  <Translate contentKey="projectReactSprApp.SubImmo.cptResulSub">cptResulSub</Translate>
                </Label>
                <AvField id="SubImmo-cptResulSub" type="text" name="cptResulSub" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxSubvLabel" for="subvention-tauxSubv">
                  <Translate contentKey="projectReactSprApp.SubImmo.tauxSubv">tauxSubv</Translate>
                </Label>
                <AvField id="SubImmo-tauxSubv" type="number" name="tauxSubv" />
              </AvGroup>
              <AvGroup>
                <Label id="dateServImmoLabel" for="SubImmo-dateServImmo">
                  <Translate contentKey="projectReactSprApp.SubImmo.dateServImmo">dateServImmo</Translate>
                </Label>
                <AvField id="SubImmo-dateServImmo" type="date" name="dateServImmo" />
              </AvGroup>
              <AvGroup>
                <Label id="modeAmortSubvLabel" for="SubImmo-modeAmortSubv">
                  <Translate contentKey="projectReactSprApp.SubImmo.modeAmortSubv">modeAmortSubv</Translate>
                </Label>
                <AvField id="SubImmo-modeAmortSubv" type="number" name="modeAmortSubv" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/subImmo" replace color="info">
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
  subImmoEntity: storeState.subImmo.entity,
  loading: storeState.subImmo.loading,
  updating: storeState.subImmo.updating,
  updateSuccess: storeState.subImmo.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SubImmoUpdate);
