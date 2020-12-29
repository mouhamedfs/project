import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './sousfamille.reducer';
import { ISousFamille } from 'app/shared/model/sousFamille.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISousFamilleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ csfam: string }> {}

export const SousFamilleDetail = (props: ISousFamilleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.csfam);
  }, []);

  const { sousFamilleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.sousFamille.detail.title">Role</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="csfam">
              <Translate contentKey="projectReactSprApp.sousFamille.csfam">csfam</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.csfam}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="libsfam">
              <Translate contentKey="projectReactSprApp.sousFamille.libsfam">libsfam</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.libsfam}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="cfam">
              <Translate contentKey="projectReactSprApp.sousFamille.cfam">cfam</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.cfam}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="cptimmo">
              <Translate contentKey="projectReactSprApp.sousFamille.cptimmo">cptimmo</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.cptimmo}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="cptamort">
              <Translate contentKey="projectReactSprApp.sousFamille.cptamort">cptamort</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.cptamort}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="cptdot">
              <Translate contentKey="projectReactSprApp.sousFamille.cptdot">cptdot</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.cptdot}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="intitcpt">
              <Translate contentKey="projectReactSprApp.sousFamille.intitcpt">intitcpt</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.intitcpt}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="taux">
              <Translate contentKey="projectReactSprApp.sousFamille.taux">taux</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.taux}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="item">
              <Translate contentKey="projectReactSprApp.sousFamille.item">item</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.item}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="inventaire">
              <Translate contentKey="projectReactSprApp.sousFamille.inventaire">inventaire</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.inventaire}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="tauxValLocPatente">
              <Translate contentKey="projectReactSprApp.sousFamille.tauxValLocPatente">tauxValLocPatente</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.tauxValLocPatente}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="tauxValLocImpot">
              <Translate contentKey="projectReactSprApp.sousFamille.tauxValLocImpot">tauxValLocImpot</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.tauxValLocImpot}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="tauxImpot">
              <Translate contentKey="projectReactSprApp.sousFamille.tauxImpot">tauxImpot</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.tauxImpot}</dd>
        </dl>
        <dl className="jh-entity-details">
          <dt>
            <span id="tauxPatente">
              <Translate contentKey="projectReactSprApp.sousFamille.tauxPatente">tauxPatente</Translate>
            </span>
          </dt>
          <dd>{sousFamilleEntity.tauxPatente}</dd>
        </dl>
        <Button tag={Link} to="/ssfamille" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ssfamille/${sousFamilleEntity.csfam}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ sousFamille }: IRootState) => ({
  sousFamilleEntity: sousFamille.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SousFamilleDetail);
