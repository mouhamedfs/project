import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './site.reducer';
import { ISite } from 'app/shared/model/site.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISiteUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ codesite: string }> {}

export const SiteUpdate = (props: ISiteUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.codesite);

  const { siteEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/site');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.codesite);
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
        ...siteEntity,
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
          <h2 id="projectReactSprApp.Site.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Site.home.createOrEditLabel">Create or edit a Site</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : siteEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Site-Site">
                    <Translate contentKey="global.field.id">Site</Translate>
                  </Label>
                  <AvInput id=" Site-codesite" type="text" className="form-control" name="codesite" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="intSiteLabel" for="Site-intSite">
                      <Translate contentKey="projectReactSprApp.Site.intSite">intSite</Translate>
                    </Label>
                    <AvField id="Site-intSite" type="text" name="intSite" />
                  </AvGroup>
                  <AvGroup>
                    <Label id="codeGuichetLabel" for="Site-codeGuichet">
                      <Translate contentKey="projectReactSprApp.Site.codeGuichet">codeGuichet</Translate>
                    </Label>
                    <AvField id="Site-codeGuichet" type="number" name="codeGuichet" />
                  </AvGroup>
                  <Button tag={Link} id="cancel-save" to="/site" replace color="info">
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
                </Col>
              </Row>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  siteEntity: storeState.site.entity,
  loading: storeState.site.loading,
  updating: storeState.site.updating,
  updateSuccess: storeState.site.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SiteUpdate);
