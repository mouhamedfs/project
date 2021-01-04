import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './agence.reducer';
import { IAgence } from 'app/shared/model/agence.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAgenceProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Agence = (props: IAgenceProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { agenceList, match, loading } = props;
  return (
    <div>
      <h2 id="Agence-heading">
        <Translate contentKey="projectReactSprApp.Agence.home.title">Agence</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.Agence.home.createLabel">Create new Agence</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {agenceList && agenceList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">id</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Agence.libage">libage</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Agence.csite">csite</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {agenceList.map((agence, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${agence.age}`} color="link" size="sm">
                      {agence.age}
                    </Button>
                  </td>
                  <td>{agence.libage}</td>
                  <td>{agence.csite}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${agence.age}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${agence.age}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${agence.age}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.Agence.home.notFound">No Agence found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ agence }: IRootState) => ({
  agenceList: agence.entities,
  loading: agence.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(Agence);
