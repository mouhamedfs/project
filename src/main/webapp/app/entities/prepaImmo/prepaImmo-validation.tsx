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
       let n = prepaImmoEntity.nbre;
      if (!isNew) {
         while(n!==0) {
           props.createEntity(entity);
          n-=1;
          }
      }
    }
  };
  return (
      <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="projectReactSprApp.prepaImmo.delete.valid">Confirm refus operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.prepaImmo.delete.quest">
        <Translate contentKey="projectReactSprApp.prepaImmo.delete.quest">Confirm refus operation</Translate>
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
                  <AvInput hidden id="prepaImmo-immo" type="text" className="form-control" value={null} name="immo"/>
                </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-libimmo" type="text" name="libimmo" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-genre" type="text" name="genre" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-type" type="text" name="type" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-cptimmo" type="text" name="cptimmo" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-cptamort" type="text" name="cptamort" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-cptdot" type="text" name="cptdot" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-taux" type="number" name="taux" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-item" type="text" name="item" size="20" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-taux_patente" type="text" name="taux_patente"/>
              </AvGroup>
              <AvGroup>
                <AvField  hidden id="Immobilisation-taux_impot" type="text"  name="impot" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-item" type="text" name="item" size="20" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-taux_patente" type="text" name="taux_patente"/>
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-taux_impot" type="text"  name="impot" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-marque" type="text" name="marque" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-local" type="text" name="local" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-reference" type="text" name="reference" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-ancienlocal" type="text" name="ancienlocal" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-ImmoRattache" type="number" name="ImmoRattache" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-numSubv" type="number" name="numSubv" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-tauxSubv" type="number" name="tauxSubv" />
              </AvGroup>
                  <AvGroup>
                <AvField hidden id="Immobilisation-numBonComm" type="text" name="numBonComm" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-type" type="date" name="dateBonComm" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-fourn" type="text" name="fourn" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-bonLiv" type="text" name="bonLiv" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-dateBonLiv" type="date" name="dateBonLiv" />
              </AvGroup>
               <AvGroup>
                <AvField hidden id="Immobilisation-numfact" type="text" name="numfact" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-dfact" type="date" name="dfact" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-mnttaxe" type="number" name="mnttaxe" />
              </AvGroup>
              <AvField id="prepaImmo-nbre" type="number" value={prepaImmoEntity.nbre} name="nbre"/>
               <AvGroup hidden><AvField hidden type="select" name="ancCompte" label="Compte" >
                  <option>3310205860</option>
                  <option>2543453453</option>
                  <option>45345354353</option>
                  <option>4</option>
                  <option>5</option>
                  </AvField></AvGroup>
               <AvGroup hidden>
                 <AvField hidden type="select" name="comptabilise" label="A comptabiliser" >
                  <option>1</option>
                  </AvField></AvGroup>
                  <AvGroup>
                <AvField hidden id="Immobilisation-ddac" type="date" name="ddac" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-dms" type="date" name="dms" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-marque" type="text" name="marque" />
              </AvGroup>
              <AvGroup>
                <AvField hidden id="Immobilisation-local" type="text" name="local" />
              </AvGroup>
                 <ModalFooter>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit"  disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
                &nbsp;
                </ModalFooter> 
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
