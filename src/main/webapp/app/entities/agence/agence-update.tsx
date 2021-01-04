import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './agence.reducer';
import { IAgence } from 'app/shared/model/agence.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAgenceUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ age: string }> {}

export const AgenceUpdate = (props: IAgenceUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.age);

  const { agenceEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/agence');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.age);
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
        ...agenceEntity,
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
          <h2 id="projectReactSprApp.Agence.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Agence.home.createOrEditLabel">Create or edit an Agence</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : agenceEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Agence-Agence">
                    <Translate contentKey="global.field.id">Agence</Translate>
                  </Label>
                  <AvInput id=" Agence- Agence" type="text" className="form-control" name="age" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="libageLabel" for="Agence-libage">
                      <Translate contentKey="projectReactSprApp.Agence.libage">libage</Translate>
                    </Label>
                    <AvField id="Agence-libage" type="text" name="libage" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="csiteLabel" for="Agence-csite">
                      <Translate contentKey="projectReactSprApp.Agence.csite">csite</Translate>
                    </Label>
                    <AvField id="Agence-csite" type="text" name="csite" />
                  </AvGroup>
                  <Button tag={Link} id="cancel-save" to="/agence" replace color="info">
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
                </Col>
              </Row>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  agenceEntity: storeState.agence.entity,
  loading: storeState.agence.loading,
  updating: storeState.agence.updating,
  updateSuccess: storeState.agence.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AgenceUpdate);