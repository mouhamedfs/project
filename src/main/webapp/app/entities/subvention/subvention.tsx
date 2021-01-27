import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './subvention.reducer';
import { ISubvention } from 'app/shared/model/subvention.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISubventionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Subvention = (props: ISubventionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { subventionList, match, loading } = props;
  return (
    <div>
      <h2 id="subvention-heading">
        <Translate contentKey="projectReactSprApp.subvention.home.title">subvention</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.subvention.home.createLabel">Create new subvention</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {subventionList && subventionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.subvention.mntSubv">mntSubv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.subvention.dateOctSub">dateOctSub</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.subvention.libSubv">libSubv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.subvention.dejaDepense">dejaDepense</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.subvention.cptSubVire">cptSubVire</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.subvention.cptSubRep">cptSubRep</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {subventionList.map((subvention, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${subvention.numSub}`} color="link" size="sm">
                      {subvention.numSub}
                    </Button>
                  </td>
                  <td>{subvention.mntSubv}</td>
                  <td>{subvention.dateOctSub}</td>
                  <td>{subvention.libSubv}</td>
                  <td>{subvention.dejaDepense}</td>
                  <td>{subvention.cptSubVire}</td>
                  <td>{subvention.cptSubRep}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${subvention.numSub}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${subvention.numSub}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${subvention.numSub}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.subvention.home.notFound">No subvention found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ subvention }: IRootState) => ({
  subventionList: subvention.entities,
  loading: subvention.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Subvention);
