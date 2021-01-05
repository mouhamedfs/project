import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './direction.reducer';
import { IDirection } from 'app/shared/model/direction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDirectionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ cdir: string }> {}

export const DirectionDetail = (props: IDirectionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.cdir);
  }, []);

  const { directionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Direction.detail.title">Direction</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="cdir">
              <Translate contentKey="projectReactSprApp.Direction.cdir">cdir</Translate>
            </span>
          </dt>
          <dd>{directionEntity.cdir}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="intdir">
              <Translate contentKey="projectReactSprApp.Direction.intdir">intdir</Translate>
            </span>
          </dt>
          <dd>{directionEntity.intdir}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="type">
              <Translate contentKey="projectReactSprApp.Direction.type">type</Translate>
            </span>
          </dt>
          <dd>{directionEntity.type}</dd>
        </dl>
        <Button tag={Link} to="/direction" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/direction/${directionEntity.cdir}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ direction }: IRootState) => ({
  directionEntity: direction.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DirectionDetail);
