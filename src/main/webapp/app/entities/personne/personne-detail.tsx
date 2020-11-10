import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './personne.reducer';
import { IPersonne } from 'app/shared/model/personne.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPersonneDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PersonneDetail = (props: IPersonneDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { personneEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.personne.detail.title">Personne</Translate> [<b>{personneEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="nom">
              <Translate contentKey="projectReactSprApp.personne.nom">Nom</Translate>
            </span>
          </dt>
          <dd>{personneEntity.nom}</dd>
          <dt>
            <span id="prenom">
              <Translate contentKey="projectReactSprApp.personne.prenom">Prenom</Translate>
            </span>
          </dt>
          <dd>{personneEntity.prenom}</dd>
          <dt>
            <span id="age">
              <Translate contentKey="projectReactSprApp.personne.age">Age</Translate>
            </span>
          </dt>
          <dd>{personneEntity.age}</dd>
          <dt>
            <span id="adresse">
              <Translate contentKey="projectReactSprApp.personne.adresse">Adresse</Translate>
            </span>
          </dt>
          <dd>{personneEntity.adresse}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="projectReactSprApp.personne.email">Email</Translate>
            </span>
          </dt>
          <dd>{personneEntity.email}</dd>
        </dl>
        <Button tag={Link} to="/personne" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/personne/${personneEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ personne }: IRootState) => ({
  personneEntity: personne.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PersonneDetail);
