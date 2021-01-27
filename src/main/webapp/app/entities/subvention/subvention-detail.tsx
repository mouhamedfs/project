import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './subvention.reducer';
import { ISubvention } from 'app/shared/model/subvention.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISubventionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ numSub: string }> {}

export const PersonneDetail = (props: ISubventionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numSub);
  }, []);

  const { subventionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.subvention.detail.title">subvention</Translate> [<b>{subventionEntity.numSub}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="nom">
              <Translate contentKey="projectReactSprApp.subvention.mntSubv">mntSubv</Translate>
            </span>
          </dt>
          <dd>{subventionEntity.mntSubv}</dd>
          <dt>
            <span id="dateOctSub">
              <Translate contentKey="projectReactSprApp.subvention.dateOctSub">dateOctSub</Translate>
            </span>
          </dt>
          <dd>{subventionEntity.dateOctSub}</dd>
          <dt>
            <span id="libSubv">
              <Translate contentKey="projectReactSprApp.subvention.libSubv">libSubv</Translate>
            </span>
          </dt>
          <dd>{subventionEntity.libSubv}</dd>
          <dt>
            <span id="dejaDepense">
              <Translate contentKey="projectReactSprApp.subvention.dejaDepense">dejaDepense</Translate>
            </span>
          </dt>
          <dd>{subventionEntity.dejaDepense}</dd>
          <dt>
            <span id="cptSubVire">
              <Translate contentKey="projectReactSprApp.subvention.cptSubVire">cptSubVire</Translate>
            </span>
          </dt>
          <dd>{subventionEntity.cptSubVire}</dd>
          <dt>
            <span id="cptSubRep">
              <Translate contentKey="projectReactSprApp.subvention.cptSubRep">cptSubRep</Translate>
            </span>
          </dt>
          <dd>{subventionEntity.cptSubRep}</dd>
        </dl>
        <Button tag={Link} to="/subvention" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/subvention/${subventionEntity.numSub}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ subvention }: IRootState) => ({
  subventionEntity: subvention.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PersonneDetail);
