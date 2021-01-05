import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './service.reducer';
import { IService } from 'app/shared/model/service.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IServiceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ cserv: string }> {}

export const ServiceDetail = (props: IServiceDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.cserv);
  }, []);

  const { serviceEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Service.detail.title">Service</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="cserv">
              <Translate contentKey="projectReactSprApp.Service.cserv">cserv</Translate>
            </span>
          </dt>
          <dd>{serviceEntity.cserv}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="intserv">
              <Translate contentKey="projectReactSprApp.Service.intserv">intserv</Translate>
            </span>
          </dt>
          <dd>{serviceEntity.intserv}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="cdir">
              <Translate contentKey="projectReactSprApp.Service.cdir">cdir</Translate>
            </span>
          </dt>
          <dd>{serviceEntity.cdir}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="type">
              <Translate contentKey="projectReactSprApp.Service.type">type</Translate>
            </span>
          </dt>
          <dd>{serviceEntity.type}</dd>
        </dl>
        <Button tag={Link} to="/service" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/service/${serviceEntity.cserv}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ service }: IRootState) => ({
  serviceEntity: service.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);
