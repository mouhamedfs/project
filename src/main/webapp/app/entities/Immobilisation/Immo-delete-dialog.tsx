import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IImmo } from 'app/shared/model/immobilisation.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './Immo.reducer';

export interface IImmoDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ immo: string }> {}

export const ImmoDeleteDialog = (props: IImmoDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.immo);
  }, []);

  const handleClose = () => {
    props.history.push('/immo');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.immobilisationEntity.immo);
  };

  const { immobilisationEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Immobilisation.delete.question">
        <Translate contentKey="projectReactSprApp.Immobilisation.delete.question" interpolate={{ immo: immobilisationEntity.immo }}>
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

const mapStateToProps = ({ immobilisation }: IRootState) => ({
  immobilisationEntity: immobilisation.entity,
  updateSuccess: immobilisation.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ImmoDeleteDialog);
