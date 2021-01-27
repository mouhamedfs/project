import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './subvention.reducer';
import { ISubvention } from 'app/shared/model/subvention.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISubventionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ numSub: string }> {}

export const SubventionUpdate = (props: ISubventionUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numSub);

  const { subventionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/subvention');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.numSub);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...subventionEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectReactSprApp.personne.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.subvention.home.createOrEditLabel">Create or edit an subvention</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : subventionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="subvention-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="subvention-id" type="text" className="form-control" name="numSub" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="mntSubvLabel" for="subvention-mntSubv">
                  <Translate contentKey="projectReactSprApp.subvention.mntSubv">mntSubv</Translate>
                </Label>
                <AvField id="subvention-mntSubv" type="number" name="mntSubv" />
              </AvGroup>
              <AvGroup>
                <Label id="dateOctSubLabel" for="subvention-dateOctSub">
                  <Translate contentKey="projectReactSprApp.subvention.dateOctSub">dateOctSub</Translate>
                </Label>
                <AvField id="subvention-dateOctSub" type="date" name="dateOctSub" />
              </AvGroup>
              <AvGroup>
                <Label id="libSubvLabel" for="personne-libSubv">
                  <Translate contentKey="projectReactSprApp.subvention.libSubv">libSubv</Translate>
                </Label>
                <AvField id="subvention-libSubv" type="text" className="form-control" name="libSubv" />
              </AvGroup>
              <AvGroup>
                <Label id="dejaDepenseLabel" for="subvention-dejaDepense">
                  <Translate contentKey="projectReactSprApp.subvention.dejaDepense">dejaDepense</Translate>
                </Label>
                <AvField id="subvention-dejaDepense" type="text" name="dejaDepense" />
              </AvGroup>
              <AvGroup>
                <Label id="cptSubVireLabel" for="subvention-cptSubVire">
                  <Translate contentKey="projectReactSprApp.subvention.cptSubVire">cptSubVire</Translate>
                </Label>
                <AvField id="subvention-cptSubVire" type="text" name="cptSubVire" />
              </AvGroup>
              <AvGroup>
                <Label id="cptSubRepLabel" for="subvention-cptSubRep">
                  <Translate contentKey="projectReactSprApp.subvention.cptSubRep">cptSubRep</Translate>
                </Label>
                <AvField id="subvention-cptSubRep" type="text" name="cptSubRep" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/subvention" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  subventionEntity: storeState.subvention.entity,
  loading: storeState.subvention.loading,
  updating: storeState.subvention.updating,
  updateSuccess: storeState.subvention.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SubventionUpdate);
