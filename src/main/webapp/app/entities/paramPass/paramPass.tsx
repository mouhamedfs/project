import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './paramPass.reducer';
import { IParamPass } from 'app/shared/model/paramPass.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IParamPassProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ParamPass = (props: IParamPassProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { paramPassList, match, loading } = props;
  return (
    <div>
      <h2 id="personne-heading">
        <Translate contentKey="projectReactSprApp.paramPass.home.title">paramPass</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.paramPass.home.createLabel">Create new paramPass</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {paramPassList && paramPassList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.numUpper">numUpper</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.numSpecial">numSpecial</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.dateDef">dateDef</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.minLength">minLength</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.libelleParam">libelleParam</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.freqModif">freqModif</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.nbreJourActiv">nbreJourActiv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.nbrePasseAnt">nbrePasseAnt</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.paramPass.nbJourAvModif">nbJourAvModif</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {paramPassList.map((paramPass, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${paramPass.numNumbers}`} color="link" size="sm">
                      {paramPass.numNumbers}
                    </Button>
                  </td>
                  <td>{paramPass.numUpper}</td>
                  <td>{paramPass.numSpecial}</td>
                  <td>{paramPass.dateDef}</td>
                  <td>{paramPass.minLength}</td>
                  <td>{paramPass.libelleParam}</td>
                  <td>{paramPass.freqModif}</td>
                  <td>{paramPass.nbreJourActiv}</td>
                  <td>{paramPass.nbrePasseAnt}</td>
                  <td>{paramPass.nbJourAvModif}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${paramPass.numNumbers}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${paramPass.numNumbers}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${paramPass.numNumbers}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.paramPass.home.notFound">No Param found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ paramPass }: IRootState) => ({
  paramPassList: paramPass.entities,
  loading: paramPass.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ParamPass);
