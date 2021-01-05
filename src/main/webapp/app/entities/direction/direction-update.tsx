import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './direction.reducer';
import { IDirection } from 'app/shared/model/direction.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDirectionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ cdir: string }> {}

export const DirectionUpdate = (props: IDirectionUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.cdir);

  const { directionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/direction');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.cdir);
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
        ...directionEntity,
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
          <h2 id="projectReactSprApp.Direction.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Direction.home.createOrEditLabel">Create or edit a Direction</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : directionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Direction-Direction">
                    <Translate contentKey="global.field.id">Direction</Translate>
                  </Label>
                  <AvInput id=" Direction-Direction" type="text" className="form-control" name="cdir" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="intdirLabel" for="Direction-intdir">
                      <Translate contentKey="projectReactSprApp.Direction.intdir">intdir</Translate>
                    </Label>
                    <AvField id="Direction-intdir" type="text" name="intdir" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="typeLabel" for="Direction-type">
                      <Translate contentKey="projectReactSprApp.Direction.type">type</Translate>
                    </Label>
                    <AvField id="Direction-type" type="number" name="type" />
                  </AvGroup>
                  <Button tag={Link} id="cancel-save" to="/direction" replace color="info">
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
  directionEntity: storeState.direction.entity,
  loading: storeState.direction.loading,
  updating: storeState.direction.updating,
  updateSuccess: storeState.direction.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DirectionUpdate);
