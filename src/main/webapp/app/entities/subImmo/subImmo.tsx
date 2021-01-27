import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './subImmo.reducer';
import { ISubImmo } from 'app/shared/model/subImmo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISubImmoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const SubImmo = (props: ISubImmoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { subImmoList, match, loading } = props;
  return (
    <div>
      <h2 id="SubImmo-heading">
        <Translate contentKey="projectReactSprApp.SubImmo.home.title">SubImmo</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.SubImmo.home.createLabel">Create new SubImmo</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {subImmoList && subImmoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.numImmo">numImmo</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.tauxAmort">tauxAmort</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.montant">montant</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.cptResulSub">cptResulSub</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.cptSubRep">cptSubRep</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.tauxSubv">tauxSubv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.dateServImmo">dateServImmo</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.SubImmo.modeAmortSubv">modeAmortSubv</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {subImmoList.map((subImmo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${subImmo.numSub}`} color="link" size="sm">
                      {subImmo.numSub}
                    </Button>
                  </td>
                  <td>{subImmo.numImmo}</td>
                  <td>{subImmo.tauxAmort}</td>
                  <td>{subImmo.montant}</td>
                  <td>{subImmo.cptResulSub}</td>
                  <td>{subImmo.cptSubRep}</td>
                  <td>{subImmo.tauxSubv}</td>
                  <td>{subImmo.dateServImmo}</td>
                  <td>{subImmo.modeAmortSubv}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${subImmo.numSub}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${subImmo.numSub}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${subImmo.numSub}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.SubImmo.home.notFound">No SubImmo found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ subImmo }: IRootState) => ({
  subImmoList: subImmo.entities,
  loading: subImmo.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SubImmo);
