import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './localisation.reducer';
import { ILocalisation } from 'app/shared/model/localisation.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ILocalisationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ codeLocal: string }> {}

export const LocalisationUpdate = (props: ILocalisationUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.codeLocal);

  const { localisationEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/localisation');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.codeLocal);
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
        ...localisationEntity,
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
          <h2 id="projectReactSprApp.Localisation.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Localisation.createOrEditLabel">Create or edit a Localisation</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : localisationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Localisation-codeLocal">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="Localisation-codeLocal" type="text" className="form-control" name="codeLocal" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="ageLabel" for="Localisation-age">
                  <Translate contentKey="projectReactSprApp.Localisation.age">age</Translate>
                </Label>
                <AvField id="Localisation-age" type="number" name="age" />
              </AvGroup>
              <AvGroup>
                <Label id="intLocalLabel" for="Localisation-intLocal">
                  <Translate contentKey="projectReactSprApp.Localisation.intLocal">intLocal</Translate>
                </Label>
                <AvField id="Localisation-intLocal" type="text" name="intLocal" />
              </AvGroup>
              <AvGroup>
                <Label id="codeSiteLabel" for="Localisation-codeSite">
                  <Translate contentKey="projectReactSprApp.Localisation.codeSite">codeSite</Translate>
                </Label>
                <AvField id="Localisation-codeSite" type="number" className="form-control" name="codeSite" />
              </AvGroup>
              <AvGroup>
                <Label id="codeServiceLabel" for="personne-codeService">
                  <Translate contentKey="projectReactSprApp.personne.codeService">codeService</Translate>
                </Label>
                <AvField id="personne-codeService" type="text" name="codeService" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/localisation" replace color="info">
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
  localisationEntity: storeState.localisation.entity,
  loading: storeState.localisation.loading,
  updating: storeState.localisation.updating,
  updateSuccess: storeState.localisation.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LocalisationUpdate);
