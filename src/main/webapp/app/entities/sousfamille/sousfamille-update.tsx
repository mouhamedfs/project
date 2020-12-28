import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './sousfamille.reducer';
import { ISousFamille } from 'app/shared/model/sousFamille.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISousFamilleUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ csfam: string }> {}

export const SousFamilleUpdate = (props: ISousFamilleUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.csfam);

  const { sousFamilleEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/ssfamille');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.csfam);
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
        ...sousFamilleEntity,
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
          <h2 id="projectReactSprApp.sousFamille.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.sousFamille.home.createOrEditLabel">Create or edit a sousFamille</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : sousFamilleEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Immo-immo">
                    <Translate contentKey="global.field.id">Immo</Translate>
                  </Label>
                  <AvInput id=" sousFamille- sousFamille" type="text" className="form-control" name="csfam" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="libsfamLabel" for="sousFamille-libimmo">
                      <Translate contentKey="projectReactSprApp.sousFamille.libsfam">libsfam</Translate>
                    </Label>
                    <AvField id="sousFamille-libsfam" type="text" name="libsfam" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cfamLabel" for="sousFamille-cfam">
                      <Translate contentKey="projectReactSprApp.sousFamille.cfam">cfam</Translate>
                    </Label>
                    <AvField id="sousFamille-cfam" type="text" name="cfam" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cptimmoLabel" for="sousFamille-cptimmo">
                      <Translate contentKey="projectReactSprApp.sousFamille.cptimmo">cptimmo</Translate>
                    </Label>
                    <AvField id="sousFamille-cptimmo" type="text" name="cptimmo" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cptamortLabel" for="sousFamille-cptamort">
                      <Translate contentKey="projectReactSprApp.sousFamille.cptamort">cptamort</Translate>
                    </Label>
                    <AvField id="sousFamille-cptamort" type="text" name="cptamort" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="cptdotLabel" for="sousFamille-cptdot">
                      <Translate contentKey="projectReactSprApp.sousFamille.cptdot">cptdot</Translate>
                    </Label>
                    <AvField id="sousFamille-cptdot" type="text" name="cptdot" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="tauxLabel" for="sousFamille-taux">
                      <Translate contentKey="projectReactSprApp.sousFamille.taux">taux</Translate>
                    </Label>
                    <AvField id="sousFamille-taux" type="number" name="taux" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="dureeLabel" for="sousFamille-duree">
                      <Translate contentKey="projectReactSprApp.sousFamille.duree">duree</Translate>
                    </Label>
                    <AvField id="sousFamille-duree" type="number" name="duree" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="itemLabel" for="sousFamille-item">
                      <Translate contentKey="projectReactSprApp.sousFamille.item">item</Translate>
                    </Label>
                    <AvField id="sousFamille-item" type="text" name="item" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="inventaireLabel" for="sousFamille-inventaire">
                      <Translate contentKey="projectReactSprApp.sousFamille.inventaire">inventaire</Translate>
                    </Label>
                    <AvField id="sousFamille-inventaire" type="number" name="inventaire" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="tauxValLocPatenteLabel" for="sousFamille-tauxValLocPatente">
                      <Translate contentKey="projectReactSprApp.sousFamille.tauxValLocPatente">tauxValLocPatente</Translate>
                    </Label>
                    <AvField id="sousFamille-tauxValLocPatente" type="number" name="tauxValLocPatente" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="tauxValLocImpotLabel" for="sousFamille-tauxValLocImpot">
                      <Translate contentKey="projectReactSprApp.sousFamille.tauxValLocImpot">tauxValLocImpot</Translate>
                    </Label>
                    <AvField id="sousFamille-tauxValLocImpot" type="number" name="tauxValLocImpot" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="tauxImpotLabel" for="sousFamille-tauxImpot">
                      <Translate contentKey="projectReactSprApp.sousFamille.tauxImpot">tauxImpot</Translate>
                    </Label>
                    <AvField id="sousFamille-tauxImpot" type="number" name="tauxImpot" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="tauxPatenteLabel" for="sousFamille-tauxPatente">
                      <Translate contentKey="projectReactSprApp.sousFamille.tauxPatente">tauxPatente</Translate>
                    </Label>
                    <AvField id="sousFamille-tauxPatente" type="number" name="tauxPatente" />
                  </AvGroup>
                  <Button tag={Link} id="cancel-save" to="/ssfamille" replace color="info">
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
  sousFamilleEntity: storeState.sousFamille.entity,
  loading: storeState.sousFamille.loading,
  updating: storeState.sousFamille.updating,
  updateSuccess: storeState.sousFamille.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SousFamilleUpdate);
