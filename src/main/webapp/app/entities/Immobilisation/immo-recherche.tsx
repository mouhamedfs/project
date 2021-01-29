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
  const [search, setSearch] = useState('');
  const [locals, setLocals] = useState('');
  useEffect(() => {
    props.getEntities();
  }, []);

  const { immobilisationList, match, loading } = props;

  const setImmo = immobilisationList.filter(immobilisation =>
    immobilisation.local === search || locals === ''
      ? immobilisation.libimmo === search
      : (immobilisation.libimmo === search && immobilisation.local === locals) || locals === ''
      ? immobilisation.reference === search
      : (immobilisation.reference === search && immobilisation.local === locals) || locals === ''
      ? immobilisation.type === search
      : (immobilisation.type === search && immobilisation.local === locals) || locals === ''
      ? immobilisation.cptimmo === search
      : (immobilisation.cptimmo === search && immobilisation.local === locals) || immobilisation.immo.toString() === search
  );

  const handleRecherche = e => {
    setSearch(e.target.value);
  };

  const handleLocals = e => {
    setLocals(e.target.value);
  };

  function myFunction() {
    const x = document.getElementById('immo');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  function showInput() {
    const x = document.getElementById('local');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  function show() {
    const x = document.getElementById('ssfam');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  return (
    <div>
      <h2>Rechercher une immobilisation</h2>
      <h4 className="text-right">{new Date().toLocaleDateString()}</h4>
      <br />
      <div className="text-center">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="immobilisations" onClick={myFunction} value="immo" />
          <label className="form-check-label">immo</label>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="localisations" onClick={showInput} value="localisation" />
          <label className="form-check-label">localisation</label>
          <br />
          &nbsp;
          <input type="text" onChange={handleLocals} style={{ display: 'none' }} className="form-check-input" id="local" />
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="ssfamilles" onClick={show} value="ssfamille" />
          <label className="form-check-label">Sous-famille</label>
          <br />
          &nbsp;
          <input type="text" style={{ display: 'none' }} className="form-check-input" id="ssfam" />
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="references" value="references" />
          <label className="form-check-label">Reference</label>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
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
                    placeholder="Search an immobilisation"
                    onChange={handleRecherche}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <h4 className="text-center">
          Resultat :{setImmo.length}/{immobilisationList.length}
        </h4>
        <div className="table-responsive">
          {setImmo && setImmo.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th id="immo">
                    <Translate contentKey="projectReactSprApp.Immobilisation.immo">ID</Translate>
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
                {setImmo.map(immobilisation => (
                  <tr key={immobilisation.immo}>
                    <td id="immo">
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
