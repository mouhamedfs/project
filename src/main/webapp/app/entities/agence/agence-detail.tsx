import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './agence.reducer';
import { IAgence } from 'app/shared/model/agence.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAgenceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ age: string }> {}

export const AgenceDetail = (props: IAgenceDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.age);
  }, []);

  const { agenceEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Agence.detail.title">Agence</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="age">
              <Translate contentKey="projectReactSprApp.Agence.age">age</Translate>
            </span>
          </dt>
          <dd>{agenceEntity.age}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="libage">
              <Translate contentKey="projectReactSprApp.Agence.libage">libage</Translate>
            </span>
          </dt>
          <dd>{agenceEntity.libage}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="csite">
              <Translate contentKey="projectReactSprApp.Famille.csite">csite</Translate>
            </span>
          </dt>
          <dd>{agenceEntity.csite}</dd>
        </dl>
        <Button tag={Link} to="/agence" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/agence/${agenceEntity.age}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ agence }: IRootState) => ({
  agenceEntity: agence.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AgenceDetail);
