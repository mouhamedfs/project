import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntities } from './Immo.reducer';
import { IImmo } from 'app/shared/model/immobilisation.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IImmoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ImmobilisationRecherche = (props: IImmoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { immobilisationList, match, loading } = props;
  return (
    <div>
      <h2>Rechercher une immobilisation</h2>
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    type="search"
                    placeholder="Search topics or keywords"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <div className="table-responsive">
          {immobilisationList && immobilisationList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="projectReactSprApp.Immobilisation.libimmo">libimmo</Translate>
                  </th>
                  <th>
                    <Translate contentKey="projectReactSprApp.Immobilisation.reference">reference</Translate>
                  </th>
                  <th>
                    <Translate contentKey="projectReactSprApp.Immobilisation.local">local</Translate>
                  </th>
                  <th>
                    <Translate contentKey="projectReactSprApp.Immobilisation.type">type</Translate>
                  </th>
                  <th>
                    <Translate contentKey="projectReactSprApp.Immobilisation.cptimmo">cptimmo</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {immobilisationList.map((immobilisation, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${immobilisation.immo}`} color="link" size="sm">
                        {immobilisation.immo}
                      </Button>
                    </td>
                    <td>{immobilisation.libimmo}</td>
                    <td>{immobilisation.reference}</td>
                    <td>{immobilisation.local}</td>
                    <td>{immobilisation.type}</td>
                    <td>{immobilisation.cptimmo}</td>
                    <td className="text-right"></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            !loading && (
              <div className="alert alert-warning">
                <Translate contentKey="projectReactSprApp.Immobilisation.home.notFound">No Immobilisations found</Translate>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  immobilisationList: storeState.immobilisation.entities,
  loading: storeState.immobilisation.loading,
  totalItems: storeState.immobilisation.totalItems,
});

const mapDispatchToProps = { getEntities };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ImmobilisationRecherche);
