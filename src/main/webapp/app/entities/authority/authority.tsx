import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './authority.reducer';
import { IAuthority} from 'app/shared/model/authority.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAuthorityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Authority = (props: IAuthorityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { authorityList, match, loading } = props;
  return (
    <div>
      <h2 id="authority-heading">
        <Translate contentKey="projectReactSprApp.role.home.title">Rôle</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.role.home.createLabel">Create new Rôle</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {authorityList && authorityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.name">Name</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {authorityList.map((authority,i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${authority.name}`} color="link" size="sm">
                      {authority.name}
                    </Button>
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${authority.name}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${authority.name}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${authority.name}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.role.home.notFound">No Rôle found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ authority }: IRootState) => ({
  authorityList: authority.entities,
  loading: authority.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(Authority);
