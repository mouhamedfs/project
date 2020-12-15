import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './Immobilisation.reducer';
import { IImmo } from 'app/shared/model/immobilisation.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IImmoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Immobilisation = (props: IImmoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { immobilisationList, match, loading } = props;
  return (
    <div>
      <h2 id="Immobilisation-heading">
        <Translate contentKey="projectReactSprApp.Immobilisation.home.title">Immobilisation</Translate>
      </h2>
      <div className="table-responsive">
        {immobilisationList && immobilisationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">Immo</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.libimmo">libimmo</Translate>
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
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptdot">cptdot</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux">taux</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.duree">duree</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.dfs">dfs</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amorti">amorti</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amorper">amorper</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amorti1">amorti1</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.valrest">valrest</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.datcalc">datcalc</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.datfam">datfam</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux2">taux2</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.duree2">duree2</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.dfs2">dfs2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.dup">dup</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.durjour">durjour</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.durmois">durmois</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.durjrestacour">durjrestacour</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amortjreeval">amortjreeval</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amortmensreeval">amortmensreeval</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.cpteBenef">cpteBenef</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.nbjrecoul">nbjrecoul</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.durecoul">durecoul</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.durjreeval">durjreeval</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amorti2">amorti2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amorper2">amorper2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.amorti12">amorti12</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.valrest2">valrest2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.datcalc2">datcalc2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.datfam2">datfam2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.cumamort2">cumamort2</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.cumamorttotal">cumamorttotal</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.immoamort">immoamort</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.anccodif">anccodif</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.taxe">taxe</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.ancCompte">ancCompte</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.oper">oper</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.regul">regul</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.item">item</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.comptabilise">comptabilise</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.ImmoRattache">ImmoRattache</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.numinv">numinv</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.codevalo">codevalo</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.ancienlocal">ancienlocal</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.vo_a_reev">vo_a_reev</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.blocnotes">blocnotes</Translate>
                </th>
                 <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.numSubv">numSubv</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Immobilisation.tauxSubv">tauxSubv</Translate>
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
                  <td>{immobilisation.genre}</td>
                  <td>{immobilisation.marque}</td>
                  <td>{immobilisation.type}</td>
                  <td>{immobilisation.reference}</td>
                  <td>{immobilisation.fourn}</td>
                  <td>{immobilisation.numfact}</td>
                  <td>{immobilisation.numBonComm}</td>
                  <td>{immobilisation.dateBonComm}</td>
                  <td>{immobilisation.bonLiv}</td>
                  <td>{immobilisation.dateBonLiv}</td>
                  <td>{immobilisation.dfact}</td>
                  <td>{immobilisation.mnttaxe}</td>
                  <td>{immobilisation.montreeval}</td>
                  <td>{immobilisation.ddac}</td>
                  <td>{immobilisation.dms}</td>
                  <td>{immobilisation.local}</td>
                  <td>{immobilisation.cpttva}</td>
                  <td>{immobilisation.cptimmo}</td>
                  <td>{immobilisation.cptamort}</td>
                  <td>{immobilisation.cptdot}</td>
                  <td>{immobilisation.taux}</td>
                  <td>{immobilisation.duree}</td>
                  <td>{immobilisation.dfs}</td>
                  <td>{immobilisation.amorti}</td>
                  <td>{immobilisation.amorper}</td>
                  <td>{immobilisation.amorti1}</td>
                  <td>{immobilisation.valrest}</td>
                  <td>{immobilisation.datcalc}</td>
                  <td>{immobilisation.datfam}</td>
                  <td>{immobilisation.taux2}</td>
                  <td>{immobilisation.duree2}</td>
                  <td>{immobilisation.dfs2}</td>
                  <td>{immobilisation.dup}</td>
                  <td>{immobilisation.durjour}</td>
                  <td>{immobilisation.durmois}</td>
                  <td>{immobilisation.durjrestacour}</td>
                  <td>{immobilisation.amortjreeval}</td>
                   <td>{immobilisation.amortmensreeval}</td>
                   <td>{immobilisation.cpteBenef}</td>
                  <td>{immobilisation.nbjrecoul}</td>
                  <td>{immobilisation.durecoul}</td>
                  <td>{immobilisation.durjreeval}</td>
                  <td>{immobilisation.amorti2}</td>
                  <td>{immobilisation.amorper2}</td>
                  <td>{immobilisation.amorti12}</td>
                  <td>{immobilisation.valrest2}</td>
                  <td>{immobilisation.datcalc2}</td>
                  <td>{immobilisation.datfam2}</td>
                  <td>{immobilisation.cumamort2}</td>
                  <td>{immobilisation.cumamorttotal}</td>
                  <td>{immobilisation.immoamort}</td>
                  <td>{immobilisation.anccodif}</td>
                  <td>{immobilisation.taxe}</td>
                  <td>{immobilisation.ancCompte}</td>
                  <td>{immobilisation.oper}</td>
                  <td>{immobilisation.regul}</td>
                  <td>{immobilisation.item}</td>
                  <td>{immobilisation.comptabilise}</td>
                  <td>{immobilisation.ImmoRattache}</td>
                  <td>{immobilisation.numinv}</td>
                  <td>{immobilisation.codevalo}</td>
                  <td>{immobilisation.ancienlocal}</td>
                  <td>{immobilisation.vo_a_reev}</td>
                  <td>{immobilisation.numSubv}</td>
                  <td>{immobilisation.tauxSubv}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${immobilisation.immo}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${immobilisation.immo}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${immobilisation.immo}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.Immobilisation.home.notFound">No Immobilisations found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ immobilisation }: IRootState) => ({
  immobilisationList: immobilisation.entities,
  loading: immobilisation.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Immobilisation);
