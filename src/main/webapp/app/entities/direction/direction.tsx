import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './direction.reducer';
import { IDirection } from 'app/shared/model/direction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDirectionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Direction = (props: IDirectionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { directionList, match, loading } = props;
  return (
    <div>
      <h2 id="Direction-heading">
        <Translate contentKey="projectReactSprApp.Direction.home.title">Direction</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.Direction.home.createLabel">Create new Direction</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {directionList && directionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">id</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Direction.intdir">intdir</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Direction.type">type</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {directionList.map((direction, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${direction.cdir}`} color="link" size="sm">
                      {direction.cdir}
                    </Button>
                  </td>
                  <td>{direction.intdir}</td>
                  <td>{direction.type}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${direction.cdir}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${direction.cdir}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${direction.cdir}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.Direction.home.notFound">No Direction found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ direction }: IRootState) => ({
  directionList: direction.entities,
  loading: direction.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(Direction);
