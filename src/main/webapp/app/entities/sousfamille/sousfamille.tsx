import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './sousfamille.reducer';
import { ISousFamille } from 'app/shared/model/sousFamille.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISousFamilleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const SousFamille = (props: ISousFamilleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { sousFamilleList, match, loading } = props;
  return (
    <div>
      <h2 id="sousFamille-heading">
        <Translate contentKey="projectReactSprApp.sousFamille.home.title">sousFamille</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.sousFamille.home.createLabel">Create new sousFamille</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {sousFamilleList && sousFamilleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">id</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.libsfam">libsfam</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.cfam">cfam</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.cptimmo">cptimmo</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.cptamort">cptamort</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.cptdot">cptdot</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.intitcpt">intitcpt</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.taux">taux</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.item">item</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.inventaire">inventaire</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.tauxValLocPatente">tauxValLocPatente</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.tauxValLocImpot">tauxValLocImpot</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.tauxImpot">tauxImpot</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.sousFamille.tauxPatente">tauxPatente</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sousFamilleList.map((sousFamille, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${sousFamille.csfam}`} color="link" size="sm">
                      {sousFamille.csfam}
                    </Button>
                  </td>
                  <td>{sousFamille.libsfam}</td>
                  <td>{sousFamille.cfam}</td>
                  <td>{sousFamille.cptimmo}</td>
                  <td>{sousFamille.cptamort}</td>
                  <td>{sousFamille.cptdot}</td>
                  <td>{sousFamille.intitcpt}</td>
                  <td>{sousFamille.taux}</td>
                  <td>{sousFamille.item}</td>
                  <td>{sousFamille.tauxValLocPatente}</td>
                  <td>{sousFamille.tauxValLocImpot}</td>
                  <td>{sousFamille.tauxImpot}</td>
                  <td>{sousFamille.tauxPatente}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${sousFamille.csfam}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${sousFamille.csfam}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${sousFamille.csfam}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.sousFamille.home.notFound">No sousFamille found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ sousFamille }: IRootState) => ({
  sousFamilleList: sousFamille.entities,
  loading: sousFamille.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(SousFamille);
