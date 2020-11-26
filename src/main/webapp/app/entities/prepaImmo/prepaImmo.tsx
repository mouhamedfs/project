import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './prepaImmo.reducer';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPrepaImmoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const PrepaImmo = (props: IPrepaImmoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { prepaImmoList, match, loading } = props;
  return (
    <div>
      <h2 id="prepaImmo-heading">
        <Translate contentKey="projectReactSprApp.prepaImmo.home.title">prepaImmo</Translate>
        <Link to={`${match.url}/new`}  className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate  contentKey="projectReactSprApp.prepaImmo.home.createLabel">Create new Immo</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {prepaImmoList && prepaImmoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">numero</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.libimmo">libimmo</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.genre">genre</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.marque">marque</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.type">type</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.reference">reference</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.nbre">nbre</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.fourn">fourn</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.numfact">numfact</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.numBonComm">numBonComm</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.dateBonComm">dateBonComm</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.bonLiv">bonLiv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.dateBonLiv">dateBonLiv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.dfact">dfact</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.mnttaxe">mnttaxe</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.montreeval">montreeval</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.ddac">ddac</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.dms">dms</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.local">local</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.cpttva">cpttva</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptimmo">cptimmo</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptamort">cptamort</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptdot">cptdot</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.taux">taux</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.taux2">taux2</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.cpteBenef">cpteBenef</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.immoamort">immoamort</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.anccodif">anccodif</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.taxe">taxe</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.ancCompte">ancCompte</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.operateurSaisi">operateurSaisi</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.etat">etat</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.motifRejet">motifRejet</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.nummodif">nummodif</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.item">item</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.comptabilise">comptabilise</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.ImmoRattache">ImmoRattache</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.numinv">numinv</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.codevalo">codevalo</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.ancienlocal">ancienlocal</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.numAvance">numAvance</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.numSubv">numSubv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.prepaImmo.tauxSubv">tauxSubv</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {prepaImmoList.map((prepaImmo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${prepaImmo.numero}`} color="link" size="sm">
                      {prepaImmo.numero}
                    </Button>
                  </td>
                  <td>{prepaImmo.libimmo}</td>
                  <td>{prepaImmo.genre}</td>
                  <td>{prepaImmo.marque}</td>
                  <td>{prepaImmo.type}</td>
                  <td>{prepaImmo.reference}</td>
                  <td>{prepaImmo.nbre}</td>
                  <td>{prepaImmo.fourn}</td>
                  <td>{prepaImmo.numfact}</td>
                  <td>{prepaImmo.numBonComm}</td>
                  <td>{prepaImmo.dateBonComm}</td>
                  <td>{prepaImmo.bonLiv}</td>
                  <td>{prepaImmo.dateBonLiv}</td>
                  <td>{prepaImmo.dfact}</td>
                  <td>{prepaImmo.mnttaxe}</td>
                  <td>{prepaImmo.montreeval}</td>
                  <td>{prepaImmo.ddac}</td>
                  <td>{prepaImmo.dms}</td>
                  <td>{prepaImmo.local}</td>
                  <td>{prepaImmo.cpttva}</td>
                  <td>{prepaImmo.cptimmo}</td>
                  <td>{prepaImmo.cptamort}</td>
                  <td>{prepaImmo.cptdot}</td>
                  <td>{prepaImmo.taux}</td>
                  <td>{prepaImmo.taux2}</td>
                  <td>{prepaImmo.cpteBenef}</td>
                  <td>{prepaImmo.immoamort}</td>
                  <td>{prepaImmo.anccodif}</td>
                  <td>{prepaImmo.taxe}</td>
                  <td>{prepaImmo.ancCompte}</td>
                  <td>{prepaImmo.operateurSaisi}</td>
                  <td>{prepaImmo.etat}</td>
                  <td>{prepaImmo.motifRejet}</td>
                  <td>{prepaImmo.nummodif}</td>
                  <td>{prepaImmo.item}</td>
                  <td>{prepaImmo.comptabilise}</td>
                  <td>{prepaImmo.ImmoRattache}</td>
                  <td>{prepaImmo.numinv}</td>
                  <td>{prepaImmo.codevalo}</td>
                  <td>{prepaImmo.ancienlocal}</td>
                  <td>{prepaImmo.numAvance}</td>
                  <td>{prepaImmo.numSubv}</td>
                  <td>{prepaImmo.tauxSubv}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${prepaImmo.numero}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${prepaImmo.numero}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${prepaImmo.numero}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.prepaImmo.home.notFound">No Immobilisations found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ prepaImmo }: IRootState) => ({
  prepaImmoList: prepaImmo.entities,
  loading: prepaImmo.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmo);
