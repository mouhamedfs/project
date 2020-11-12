import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IAuthority } from 'app/shared/model/authority.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './authority.reducer';

export interface IAuthorityDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ name: string }> {}

export const AuthorityDeleteDialog = (props: IAuthorityDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.name);
  }, []);

  const handleClose = () => {
    props.history.push('/authority');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.authorityEntity.name);
  };

  const { authorityEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.role.delete.question">
        <Translate contentKey="projectReactSprApp.role.delete.question" interpolate={{ name: authorityEntity.name }}>
          Are you sure you want to delete this Rôle?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-authority" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ authority }: IRootState) => ({
  authorityEntity: authority.entity,
  updateSuccess: authority.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AuthorityDeleteDialog);
