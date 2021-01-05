import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IDirection } from 'app/shared/model/direction.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './direction.reducer';

export interface IDirectionDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ cdir: string }> {}

export const DirectionDeleteDialog = (props: IDirectionDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.cdir);
  }, []);

  const handleClose = () => {
    props.history.push('/direction');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.directionEntity.cdir);
  };

  const { directionEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Direction.delete.question">
        <Translate contentKey="projectReactSprApp.Direction.delete.question" interpolate={{ cdir: directionEntity.cdir }}>
          Are you sure you want to delete this Direction?
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

const mapStateToProps = ({ direction }: IRootState) => ({
  directionEntity: direction.entity,
  updateSuccess: direction.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DirectionDeleteDialog);
