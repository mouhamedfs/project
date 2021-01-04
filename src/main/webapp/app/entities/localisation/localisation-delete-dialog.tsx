import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ILocalisation } from 'app/shared/model/localisation.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './localisation.reducer';

export interface ILocalisationDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ codeLocal: string }> {}

export const LocalisationDeleteDialog = (props: ILocalisationDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.codeLocal);
  }, []);

  const handleClose = () => {
    props.history.push('/localisation');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.localisationEntity.codeLocal);
  };

  const { localisationEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.Localisation.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Localisation.delete.question">
        <Translate contentKey="projectReactSprApp.Localisation.delete.question" interpolate={{ id: localisationEntity.codeLocal }}>
          Are you sure you want to delete this Localisation?
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

const mapStateToProps = ({ localisation }: IRootState) => ({
  localisationEntity: localisation.entity,
  updateSuccess: localisation.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LocalisationDeleteDialog);
