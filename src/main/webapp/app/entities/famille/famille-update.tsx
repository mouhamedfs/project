import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './famille.reducer';
import { IFamille } from 'app/shared/model/famille.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFamilleUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ cfam: string }> {}

export const FamilleUpdate = (props: IFamilleUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.cfam);

  const { familleEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/famille');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.cfam);
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
        ...familleEntity,
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
          <h2 id="projectReactSprApp.Famille.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Famille.home.createOrEditLabel">Create or edit a Famille</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : familleEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Famille-Famille">
                    <Translate contentKey="global.field.id">Immo</Translate>
                  </Label>
                  <AvInput id=" Famille- Famille" type="text" className="form-control" name="cfam" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="libfamLabel" for="Famille-libfam">
                      <Translate contentKey="projectReactSprApp.Famille.libfam">libfam</Translate>
                    </Label>
                    <AvField id="Famille-libfam" type="text" name="libfam" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cptcolfourLabel" for="Famille-cptcolfour">
                      <Translate contentKey="projectReactSprApp.Famille.cptcolfour">cptcolfour</Translate>
                    </Label>
                    <AvField id="Famille-cptcolfour" type="text" name="cptcolfour" />
                  </AvGroup>
                  <Button tag={Link} id="cancel-save" to="/famille" replace color="info">
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
  familleEntity: storeState.famille.entity,
  loading: storeState.famille.loading,
  updating: storeState.famille.updating,
  updateSuccess: storeState.famille.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FamilleUpdate);
