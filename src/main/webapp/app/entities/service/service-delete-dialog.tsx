import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IService } from 'app/shared/model/service.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './service.reducer';

export interface IServiceDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ cserv: string }> {}

export const ServiceDeleteDialog = (props: IServiceDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.cserv);
  }, []);

  const handleClose = () => {
    props.history.push('/service');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.serviceEntity.cserv);
  };

  const { serviceEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Service.delete.question">
        <Translate contentKey="projectReactSprApp.Service.delete.question" interpolate={{ cserv: serviceEntity.cserv }}>
          Are you sure you want to delete this Service?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-Service" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ service }: IRootState) => ({
  serviceEntity: service.entity,
  updateSuccess: service.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDeleteDialog);
