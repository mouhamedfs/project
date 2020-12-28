import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFamille } from 'app/shared/model/famille.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './famille.reducer';

export interface IFamilleDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ cfam: string }> {}

export const FamilleDeleteDialog = (props: IFamilleDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.cfam);
  }, []);

  const handleClose = () => {
    props.history.push('/famille');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.familleEntity.cfam);
  };

  const { familleEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Famille.delete.question">
        <Translate contentKey="projectReactSprApp.Famille.delete.question" interpolate={{ cfam: familleEntity.cfam }}>
          Are you sure you want to delete this Rôle?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-Famille" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ famille }: IRootState) => ({
  familleEntity: famille.entity,
  updateSuccess: famille.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FamilleDeleteDialog);
