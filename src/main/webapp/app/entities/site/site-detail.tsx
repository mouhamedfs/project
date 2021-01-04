import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './site.reducer';
import { ISite } from 'app/shared/model/site.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISiteDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ codesite: string }> {}

export const SiteDetail = (props: ISiteDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.codesite);
  }, []);

  const { siteEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Site.detail.title">Site</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="codesite">
              <Translate contentKey="projectReactSprApp.Site.codesite">codesite</Translate>
            </span>
          </dt>
          <dd>{siteEntity.codesite}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="intSite">
              <Translate contentKey="projectReactSprApp.Site.intSite">intSite</Translate>
            </span>
          </dt>
          <dd>{siteEntity.intSite}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="codeGuichet">
              <Translate contentKey="projectReactSprApp.Site.codeGuichet">codeGuichet</Translate>
            </span>
          </dt>
          <dd>{siteEntity.codeGuichet}</dd>
        </dl>
        <Button tag={Link} to="/site" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/site/${siteEntity.codesite}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ site }: IRootState) => ({
  siteEntity: site.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SiteDetail);
