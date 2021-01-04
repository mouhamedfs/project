import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISite } from 'app/shared/model/site.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './site.reducer';

export interface ISiteDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ codesite: string }> {}

export const SiteDeleteDialog = (props: ISiteDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.codesite);
  }, []);

  const handleClose = () => {
    props.history.push('/site');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.siteEntity.codesite);
  };

  const { siteEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="projectReactSprApp.Site.delete.question">
        <Translate contentKey="projectReactSprApp.Site.delete.question" interpolate={{ codesite: siteEntity.codesite }}>
          Are you sure you want to delete this Rôle?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-Site" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ site }: IRootState) => ({
  siteEntity: site.entity,
  updateSuccess: site.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SiteDeleteDialog);
