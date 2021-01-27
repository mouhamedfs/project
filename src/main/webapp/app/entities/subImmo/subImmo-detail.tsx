import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './subImmo.reducer';
import { ISubImmo } from 'app/shared/model/subImmo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISubImmoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ numSub: string }> {}

export const SubImmoDetail = (props: ISubImmoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numSub);
  }, []);

  const { subImmoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.SubImmo.detail.title">SubImmo</Translate> [<b>{subImmoEntity.numSub}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="numImmo">
              <Translate contentKey="projectReactSprApp.SubImmo.numImmo">numImmo</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.numImmo}</dd>
          <dt>
            <span id="tauxAmort">
              <Translate contentKey="projectReactSprApp.SubImmo.tauxAmort">tauxAmort</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.tauxAmort}</dd>
          <dt>
            <span id="montant">
              <Translate contentKey="projectReactSprApp.SubImmo.montant">montant</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.montant}</dd>
          <dt>
            <span id="cptResulSub">
              <Translate contentKey="projectReactSprApp.SubImmo.cptResulSub">cptResulSub</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.cptResulSub}</dd>
          <dt>
            <span id="cptSubRep">
              <Translate contentKey="projectReactSprApp.SubImmo.cptSubRep">cptSubRep</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.cptSubRep}</dd>
          <dt>
            <span id="tauxSubv">
              <Translate contentKey="projectReactSprApp.SubImmo.tauxSubv">tauxSubv</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.tauxSubv}</dd>
          <dt>
            <span id="dateServImmo">
              <Translate contentKey="projectReactSprApp.SubImmo.dateServImmo">dateServImmo</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.dateServImmo}</dd>
          <dt>
            <span id="modeAmortSubv">
              <Translate contentKey="projectReactSprApp.SubImmo.modeAmortSubv">modeAmortSubv</Translate>
            </span>
          </dt>
          <dd>{subImmoEntity.modeAmortSubv}</dd>
        </dl>
        <Button tag={Link} to="/subImmo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/subImmo/${subImmoEntity.numSub}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ subImmo }: IRootState) => ({
  subImmoEntity: subImmo.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SubImmoDetail);
