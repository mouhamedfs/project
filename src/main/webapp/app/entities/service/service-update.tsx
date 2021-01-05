import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './service.reducer';
import { IService } from 'app/shared/model/service.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IServiceUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ cserv: string }> {}

export const ServiceUpdate = (props: IServiceUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.cserv);

  const { serviceEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/service');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.cserv);
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
        ...serviceEntity,
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
          <h2 id="projectReactSprApp.Service.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Service.home.createOrEditLabel">Create or edit a Service</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : serviceEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Service-Service">
                    <Translate contentKey="global.field.id">Immo</Translate>
                  </Label>
                  <AvInput id=" Service-Service" type="text" className="form-control" name="cserv" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="intservLabel" for="Service-intserv">
                      <Translate contentKey="projectReactSprApp.Service.intserv">intserv</Translate>
                    </Label>
                    <AvField id="Service-intserv" type="text" name="intserv" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cdirLabel" for="Service-cdir">
                      <Translate contentKey="projectReactSprApp.Service.cdir">cdir</Translate>
                    </Label>
                    <AvField id="Service-cdir" type="number" name="cdir" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="typeLabel" for="Service-type">
                      <Translate contentKey="projectReactSprApp.Service.type">type</Translate>
                    </Label>
                    <AvField id="Service-type" type="number" name="type" />
                  </AvGroup>
                  <Button tag={Link} id="cancel-save" to="/service" replace color="info">
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
  serviceEntity: storeState.service.entity,
  loading: storeState.service.loading,
  updating: storeState.service.updating,
  updateSuccess: storeState.service.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ServiceUpdate);
