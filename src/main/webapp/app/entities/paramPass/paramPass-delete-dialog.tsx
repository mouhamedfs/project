import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IParamPass } from 'app/shared/model/paramPass.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './paramPass.reducer';

export interface IParamPassDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ numNumbers: string }> {}

export const ParamPassDeleteDialog = (props: IParamPassDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numNumbers);
  }, []);

  const handleClose = () => {
    props.history.push('/paramPass');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.paramPassEntity.numNumbers);
  };

  const { paramPassEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.personne.delete.question">
        <Translate contentKey="projectReactSprApp.paramPass.delete.question" interpolate={{ numNumbers: paramPassEntity.numNumbers }}>
          Are you sure you want to delete this Param?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-personne" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ paramPass }: IRootState) => ({
  paramPassEntity: paramPass.entity,
  updateSuccess: paramPass.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ParamPassDeleteDialog);
