import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISousFamille } from 'app/shared/model/sousFamille.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './sousfamille.reducer';

export interface ISousFamilleDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ csfam: string }> {}

export const SousFamilleDeleteDialog = (props: ISousFamilleDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.csfam);
  }, []);

  const handleClose = () => {
    props.history.push('/ssfamille');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.sousFamilleEntity.csfam);
  };

  const { sousFamilleEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.sousFamille.delete.question">
        <Translate contentKey="projectReactSprApp.sousFamille.delete.question" interpolate={{ csfam: sousFamilleEntity.csfam }}>
          Are you sure you want to delete this Rôle?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-sousFamille" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ sousFamille }: IRootState) => ({
  sousFamilleEntity: sousFamille.entity,
  updateSuccess: sousFamille.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SousFamilleDeleteDialog);
