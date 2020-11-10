import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './personne.reducer';
import { IPersonne } from 'app/shared/model/personne.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPersonneProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Personne = (props: IPersonneProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { personneList, match, loading } = props;
  return (
    <div>
      <h2 id="personne-heading">
        <Translate contentKey="projectReactSprApp.personne.home.title">Personnes</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.personne.home.createLabel">Create new Personne</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {personneList && personneList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.personne.nom">Nom</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.personne.prenom">Prenom</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.personne.age">Age</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.personne.adresse">Adresse</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.personne.email">Email</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {personneList.map((personne, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${personne.id}`} color="link" size="sm">
                      {personne.id}
                    </Button>
                  </td>
                  <td>{personne.nom}</td>
                  <td>{personne.prenom}</td>
                  <td>{personne.age}</td>
                  <td>{personne.adresse}</td>
                  <td>{personne.email}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${personne.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${personne.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${personne.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="projectReactSprApp.personne.home.notFound">No Personnes found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ personne }: IRootState) => ({
  personneList: personne.entities,
  loading: personne.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Personne);
