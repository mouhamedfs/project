import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './job.reducer';
import { IJob } from 'app/shared/model/job.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJobDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const JobDetail = (props: IJobDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { jobEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.job.detail.title">Job</Translate> [<b>{jobEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="nomJob">
              <Translate contentKey="projectReactSprApp.job.nomJob">Nom Job</Translate>
            </span>
          </dt>
          <dd>{jobEntity.nomJob}</dd>
          <dt>
            <span id="salaireMin">
              <Translate contentKey="projectReactSprApp.job.salaireMin">Salaire Min</Translate>
            </span>
          </dt>
          <dd>{jobEntity.salaireMin}</dd>
          <dt>
            <span id="salaireMax">
              <Translate contentKey="projectReactSprApp.job.salaireMax">Salaire Max</Translate>
            </span>
          </dt>
          <dd>{jobEntity.salaireMax}</dd>
        </dl>
        <Button tag={Link} to="/job" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/job/${jobEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ job }: IRootState) => ({
  jobEntity: job.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
