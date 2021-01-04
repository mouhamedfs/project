import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './localisation.reducer';
import { ILocalisation } from 'app/shared/model/localisation.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILocalisationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ codeLocal: string }> {}

export const LocalisationDetail = (props: ILocalisationDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.codeLocal);
  }, []);

  const { localisationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Localisation.detail.title">Localisation</Translate> [
          <b>{localisationEntity.codeLocal}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="age">
              <Translate contentKey="projectReactSprApp.Localisation.age">age</Translate>
            </span>
          </dt>
          <dd>{localisationEntity.age}</dd>
          <dt>
            <span id="intLocal">
              <Translate contentKey="projectReactSprApp.Localisation.intLocal">intLocal</Translate>
            </span>
          </dt>
          <dd>{localisationEntity.intLocal}</dd>
          <dt>
            <span id="codeSite">
              <Translate contentKey="projectReactSprApp.Localisation.codeSite">codeSite</Translate>
            </span>
          </dt>
          <dd>{localisationEntity.codeSite}</dd>
          <dt>
            <span id="codeService">
              <Translate contentKey="projectReactSprApp.Localisation.codeService">codeService</Translate>
            </span>
          </dt>
          <dd>{localisationEntity.codeService}</dd>
        </dl>
        <Button tag={Link} to="/localisation" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/localisation/${localisationEntity.codeLocal}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ localisation }: IRootState) => ({
  localisationEntity: localisation.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LocalisationDetail);
