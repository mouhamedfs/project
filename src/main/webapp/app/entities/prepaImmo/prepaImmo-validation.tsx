import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button,Row, Col, Label, } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity,deleteEntity} from './prepaImmo.reducer';
import { updateEntity, createEntity, reset } from 'app/entities/Immobilisation/Immobilisation.reducer';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPrepaImmoValidDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ numero: string, immo : string }> {}

export const PrepaImmoValidDialogProps = (props: IPrepaImmoValidDialogProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numero);

  const { prepaImmoEntity,immobilisationEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/prepaImmo');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.numero);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.prepaImmoEntity.numero);
  };

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...immobilisationEntity,
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
      <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="projectReactSprApp.prepaImmo.delete.refus">Confirm refus operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.prepaImmo.delete.indiquation">
      </ModalBody>
      <br />
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : prepaImmoEntity} onSubmit={saveEntity} onClick={confirmDelete}>
              {!isNew ? (
                <AvGroup>
                  <Label for="prepaImmo-numero">
                    <Translate contentKey="global.field.id">Numero</Translate>
                  </Label>
                  <AvInput id="prepaImmo-numero" type="text" className="form-control" name="numero" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                  <AvInput hidden id="prepaImmo-immo" type="text" className="form-control" value={prepaImmoEntity.numero} name="immo" required readOnly />
                </AvGroup>
              <Row className="justify-content-center">
                <Col md="10">
              <AvGroup>
                <Label id="libimmoLabel" for="prepaImmo-libimmo">
                  <Translate contentKey="projectReactSprApp.Immobilisation.libimmo">Libellé</Translate>
                </Label>
                <AvField id="Immobilisation-libimmo" type="text" name="libimmo" />
              </AvGroup>
              </Col>
              </Row>
              <div className="group-box">
                <Row className="justify-content-start">
                <Col md="8">
                  <Label><strong>Infos Nature</strong></Label>
              <AvGroup>
                <Label id="genreLabel" for="Immobilisation-genre">
                  <Translate contentKey="projectReactSprApp.Immobilisation.genre">genre</Translate>
                </Label>
                <AvField id="Immobilisation-genre" type="text" name="genre" />
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="Immobilisation-type">
                  <Translate contentKey="projectReactSprApp.Immobilisation.type">type</Translate>
                </Label>
                <AvField id="Immobilisation-type" type="text" name="type" />
              </AvGroup>
              </Col></Row>
              <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="cptimmoLabel" for="Immobilisation-cptimmo">
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptimmo">cptimmo</Translate>
                </Label>
                <AvField id="Immobilisation-cptimmo" type="text" name="cptimmo" />
              </AvGroup>
              <AvGroup>
                <Label id="cptamortLabel" for="Immobilisation-cptamort">
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptamort">cptamort</Translate>
                </Label>
                <AvField id="Immobilisation-cptamort" type="text" name="cptamort" />
              </AvGroup>
              <AvGroup>
                <Label id="cptdotLabel" for="Immobilisation-cptdot">
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptdot">cptdot</Translate>
                </Label>
                <AvField id="Immobilisation-cptdot" type="text" name="cptdot" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxLabel" for="Immobilisation-taux">
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux">taux</Translate>
                </Label>
                <AvField id="Immobilisation-taux" type="number" name="taux" />
              </AvGroup>
              </Col>
              <Col md="4">
              <AvGroup>
                <Label id="itemLabel" for="Immobilisation-item">
                  <Translate contentKey="projectReactSprApp.Immobilisation.item">item</Translate>
                </Label>
                <AvField id="Immobilisation-item" type="text" name="item" size="20" />
              </AvGroup>
              <AvGroup>
                <Label id="patenteLabel" for="Immobilisation-taux_patente">
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux_patente">patente</Translate>
                </Label>
                <AvField id="Immobilisation-taux_patente" type="text" name="taux_patente"/>
              </AvGroup>
              <AvGroup>
                <Label id="impotLabel" for="Immobilisation-taux_impot">
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux_impot">taux_impot</Translate>
                </Label>
                <AvField id="Immobilisation-taux_impot" type="text"  name="impot" />
              </AvGroup>
              </Col>
              </Row>
              </div>
              <br />
              <div className="group-box">
              <Label><strong>Localisation</strong></Label>
                <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="marqueLabel" for="Immobilisation-marque">
                  <Translate contentKey="projectReactSprApp.Immobilisation.marque">marque</Translate>
                </Label>
                <AvField id="Immobilisation-marque" type="text" name="marque" />P
              </AvGroup>
              <AvGroup>
                <Label id="localLabel" for="Immobilisation-local">
                  <Translate contentKey="projectReactSprApp.Immobilisation.local">local</Translate>
                </Label>
                <AvField id="Immobilisation-local" type="text" name="local" />
              </AvGroup>
                 <ModalFooter>
              <Button tag={Link} id="cancel-save" to="/prepaImmo" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit"  disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
                &nbsp;
                </ModalFooter> 
                </Col></Row>
                </div>
              </AvForm>
               )}
               </Col>
              </Row>
             </Modal>
          )}
const mapStateToProps = (storeState: IRootState) => ({
  prepaImmoEntity: storeState.prepaImmo.entity,
  immobilisationEntity: storeState.immobilisation.entity,
  loading: storeState.immobilisation.loading,
  updating: storeState.immobilisation.updating,
  updateSuccess: storeState.immobilisation.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  deleteEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmoValidDialogProps);
