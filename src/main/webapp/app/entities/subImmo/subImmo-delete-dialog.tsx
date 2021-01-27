import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISubImmo } from 'app/shared/model/subImmo.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './subImmo.reducer';

export interface ISubImmoDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ numSub: string }> {}

export const SubImmoDeleteDialog = (props: ISubImmoDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numSub);
  }, []);

  const handleClose = () => {
    props.history.push('/subImmo');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.subImmoEntity.numSub);
  };

  const { subImmoEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.SubImmo.delete.question">
        <Translate contentKey="projectReactSprApp.SubImmo.delete.question" interpolate={{ numSub: subImmoEntity.numSub }}>
          Are you sure you want to delete this subImmoEntity?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-subImmo" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ subImmo }: IRootState) => ({
  subImmoEntity: subImmo.entity,
  updateSuccess: subImmo.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SubImmoDeleteDialog);
