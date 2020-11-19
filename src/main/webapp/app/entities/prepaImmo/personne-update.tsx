import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './prepaImmo.reducer';
import { IPersonne } from 'app/shared/model/personne.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPersonneUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PersonneUpdate = (props: IPersonneUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { personneEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/personne');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
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
        ...personneEntity,
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
            <Translate contentKey="projectReactSprApp.personne.home.createOrEditLabel">Create or edit a Personne</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : personneEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="personne-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="personne-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nomLabel" for="personne-nom">
                  <Translate contentKey="projectReactSprApp.personne.nom">Nom</Translate>
                </Label>
                <AvField id="personne-nom" type="text" name="nom" />
              </AvGroup>
              <AvGroup>
                <Label id="prenomLabel" for="personne-prenom">
                  <Translate contentKey="projectReactSprApp.personne.prenom">Prenom</Translate>
                </Label>
                <AvField id="personne-prenom" type="text" name="prenom" />
              </AvGroup>
              <AvGroup>
                <Label id="ageLabel" for="personne-age">
                  <Translate contentKey="projectReactSprApp.personne.age">Age</Translate>
                </Label>
                <AvField id="personne-age" type="number" className="form-control" name="age" />
              </AvGroup>
              <AvGroup>
                <Label id="adresseLabel" for="personne-adresse">
                  <Translate contentKey="projectReactSprApp.personne.adresse">Adresse</Translate>
                </Label>
                <AvField id="personne-adresse" type="text" name="adresse" />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="personne-email">
                  <Translate contentKey="projectReactSprApp.personne.email">Email</Translate>
                </Label>
                <AvField id="personne-email" type="text" name="email" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/personne" replace color="info">
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
  personneEntity: storeState.personne.entity,
  loading: storeState.personne.loading,
  updating: storeState.personne.updating,
  updateSuccess: storeState.personne.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PersonneUpdate);
