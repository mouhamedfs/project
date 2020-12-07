import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button,Row, Col, Label, } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './prepaImmo.reducer';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPrepaImmoUpdateDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ numero: string }> {}

export const PrepaImmoUpdateDialogProps = (props: IPrepaImmoUpdateDialogProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numero);

  const { prepaImmoEntity, loading, updating } = props;

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

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...prepaImmoEntity,
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
            <AvForm model={isNew ? {} : prepaImmoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="prepaImmo-numero">
                    <Translate contentKey="global.field.id">Numero</Translate>
                  </Label>
                  <AvInput id="prepaImmo-numero" type="text" className="form-control" name="numero" required readOnly />
                </AvGroup>
              ) : null}
              
              <AvGroup>
                <Label id="etatLabel" for="prepaImmo-etat">
                  <Translate contentKey="projectReactSprApp.prepaImmo.etat">etat</Translate>
                </Label>
                <AvField id="prepaImmo-etat" type="text"  name="etat" value="R" />
              </AvGroup>
              <AvGroup>
                <Label id="motifRejetSubvLabel" for="prepaImmo-motifRejet">
                  <Translate contentKey="projectReactSprApp.prepaImmo.motifRejet">motifRejet</Translate>
                </Label>
                <AvField id="prepaImmo-motifRejet" type="text"  name="motifRejet" />
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
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
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
  loading: storeState.prepaImmo.loading,
  updating: storeState.prepaImmo.updating,
  updateSuccess: storeState.prepaImmo.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmoUpdateDialogProps);
