import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './famille.reducer';
import { IFamille } from 'app/shared/model/famille.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFamilleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ cfam: string }> {}

export const FamilleDetail = (props: IFamilleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.cfam);
  }, []);

  const { familleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Famille.detail.title">Role</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="cfam">
              <Translate contentKey="projectReactSprApp.Famille.cfam">cfam</Translate>
            </span>
          </dt>
          <dd>{familleEntity.cfam}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="libfam">
              <Translate contentKey="projectReactSprApp.Famille.libfam">libfam</Translate>
            </span>
          </dt>
          <dd>{familleEntity.libfam}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="cptcolfour">
              <Translate contentKey="projectReactSprApp.Famille.cptcolfour">cptcolfour</Translate>
            </span>
          </dt>
          <dd>{familleEntity.cptcolfour}</dd>
        </dl>
        <Button tag={Link} to="/famille" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/famille/${familleEntity.cfam}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ famille }: IRootState) => ({
  familleEntity: famille.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FamilleDetail);
