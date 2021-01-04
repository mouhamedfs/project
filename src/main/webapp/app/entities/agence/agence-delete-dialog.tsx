import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IAgence } from 'app/shared/model/agence.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './agence.reducer';

export interface IAgenceDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ age: string }> {}

export const AgenceDeleteDialog = (props: IAgenceDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.age);
  }, []);

  const handleClose = () => {
    props.history.push('/agence');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.agenceEntity.age);
  };

  const { agenceEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Agence.delete.question">
        <Translate contentKey="projectReactSprApp.Agence.delete.question" interpolate={{ age: agenceEntity.age }}>
          Are you sure you want to delete this Agence?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-Agence" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ agence }: IRootState) => ({
  agenceEntity: agence.entity,
  updateSuccess: agence.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AgenceDeleteDialog);
