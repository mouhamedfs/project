import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './prepaImmo.reducer';

export interface IPrepaImmoDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ numero: string }> {}

export const PrepaImmoDeleteDialog = (props: IPrepaImmoDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numero);
  }, []);

  const handleClose = () => {
    props.history.push('/prepaImmo');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.prepaImmoEntity.numero);
  };

  const { prepaImmoEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.personne.delete.question">
        <Translate contentKey="projectReactSprApp.prepaImmo.delete.question" interpolate={{ numero: prepaImmoEntity.numero }}>
          Are you sure you want to delete this Immobilisation?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-prepaImmo" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ prepaImmo }: IRootState) => ({
  prepaImmoEntity: prepaImmo.entity,
  updateSuccess: prepaImmo.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmoDeleteDialog);
