import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntities } from './prepaImmo.reducer';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction,TextFormat, JhiPagination, JhiItemCount, getSortState } from 'react-jhipster';
import { AUTHORITIES } from 'app/config/constants';
import { hasAnyAuthority } from 'app/shared/auth/private-route';

export interface IPrepaImmoProps extends StateProps, DispatchProps, RouteComponentProps<{}> {numero:string}

export const PrepaImmo = (props: IPrepaImmoProps) => {
  const [pagination, setPagination] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );

  useEffect(() => {
    props.getEntities(pagination.activePage - 1, pagination.itemsPerPage, `numero,${pagination.order}`);
    const endURL = `?page=${pagination.activePage}&sort=numero,${pagination.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  }, [pagination.activePage, pagination.order, pagination.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPagination({
        ...pagination,
        activePage: +page,
        sort:'numero',
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () =>
    setPagination({
      ...pagination,
      order: pagination.order === 'asc' ? 'desc' : 'asc',
      sort: 'numero',
    });

  const handlePagination = currentPage =>
    setPagination({
      ...pagination,
      activePage: currentPage,
    });
    const { prepaImmoList,match,totalItems} = props;
   
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
       {props.totalItems ? (
        <div className={prepaImmoList && prepaImmoList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={pagination.activePage} total={totalItems} itemsPerPage={pagination.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={pagination.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={pagination.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
      <Row className="justify-content-start">
        <Col md="8">
          <br />
        <h3><strong>SAISIE ACQUISITION </strong></h3>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-start" onClick={sort('numero')}>
        <Col md="12">
          {prepaImmoList.map((prepaImmo, i) => (
            <AvForm key={`entity-${i}`} >
                <AvGroup >
                  <Label for="prepaImmo-numero">
                    <Translate contentKey="global.field.id">Numero</Translate>
                  </Label>
                  <AvInput id="prepaImmo-numero" value={prepaImmo.numero}  type="text" className="form-control" name="numero" required readOnly />
                </AvGroup>
              <Row className="justify-content-center">
                <Col md="10">
              <AvGroup className="hand" onClick={sort('libimmo')}>
                <Label id="libimmoLabel" for="prepaImmo-libimmo">
                  <Translate contentKey="projectReactSprApp.prepaImmo.libimmo">Libellé</Translate>
                </Label>
                <AvField id="prepaImmo-libimmo" value={prepaImmo.libimmo} type="text" name="libimmo" />
              </AvGroup>
              </Col>
              </Row>
              <div className="group-box">
                <Row className="justify-content-start">
                <Col md="8">
                  <Label><strong>Infos Nature</strong></Label>
              <AvGroup>
                <Label id="genreLabel" for="prepaImmo-genre">
                  <Translate contentKey="projectReactSprApp.prepaImmo.genre">genre</Translate>
                </Label>
                <AvField id="prepaImmo-genre" value={prepaImmo.genre} type="text" name="genre" />
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="prepaImmo-type">
                  <Translate contentKey="projectReactSprApp.prepaImmo.type">type</Translate>
                </Label>
                <AvField id="prepaImmo-type" value={prepaImmo.type} type="text" name="type" />
              </AvGroup>
              </Col></Row>
              <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="cptimmoLabel" for="prepaImmo-cptimmo">
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptimmo">cptimmo</Translate>
                </Label>
                <AvField id="prepaImmo-cptimmo" value={prepaImmo.cptimmo} type="text" name="cptimmo" />
              </AvGroup>
              <AvGroup>
                <Label id="cptamortLabel" for="prepaImmo-cptamort">
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptamort">cptamort</Translate>
                </Label>
                <AvField id="prepaImmo-cptamort"  value={prepaImmo.cptamort} type="text" name="cptamort" />
              </AvGroup>
              <AvGroup>
                <Label id="cptdotLabel" for="prepaImmo-cptdot">
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptdot">cptdot</Translate>
                </Label>
                <AvField id="prepaImmo-cptdot" type="text" value={prepaImmo.cptdot} name="cptdot" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxLabel" for="prepaImmo-taux">
                  <Translate contentKey="projectReactSprApp.prepaImmo.taux">taux</Translate>
                </Label>
                <AvField id="prepaImmo-taux" value={prepaImmo.taux} type="number" name="taux" />
              </AvGroup>
              </Col>
              <Col md="4">
              <AvGroup>
                <Label id="itemLabel" for="prepaImmo-item">
                  <Translate contentKey="projectReactSprApp.prepaImmo.item">item</Translate>
                </Label>
                <AvField id="prepaImmo-item" type="text" value={prepaImmo.item} name="item" size="20" />
              </AvGroup>
              <AvGroup>
                <Label id="patenteLabel" for="prepaImmo-patente">
                  <Translate contentKey="projectReactSprApp.prepaImmo.patente">patente</Translate>
                </Label>
                <AvField id="prepaImmo-patente" type="text" value="0,00%" name="patente" />
              </AvGroup>
              <AvGroup>
                <Label id="impotLabel" for="prepaImmo-impot">
                  <Translate contentKey="projectReactSprApp.prepaImmo.impot">impot</Translate>
                </Label>
                <AvField id="prepaImmo-impot" type="text" value="0,00%" name="impot" />
              </AvGroup>
              </Col>
              </Row>
              </div>
              <br />
              <div className="group-box">
              <Label><strong>Localisation</strong></Label>
                <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="marqueLabel" for="prepaImmo-marque">
                  <Translate contentKey="projectReactSprApp.prepaImmo.marque">marque</Translate>
                </Label>
                <AvField id="prepaImmo-marque" type="text" value={prepaImmo.marque} name="marque" />P
              </AvGroup>
              <AvGroup>
                <Label id="localLabel" for="prepaImmo-local">
                  <Translate contentKey="projectReactSprApp.prepaImmo.local">local</Translate>
                </Label>
                <AvField id="prepaImmo-local" type="text" value={prepaImmo.local} name="local" />
              </AvGroup>
              </Col>
              </Row>
              </div>
              <br />
               <div className="group-box">
              <Label><strong>Autres Infos</strong></Label>
                <Row className="justify-content-start">
                <Col md="7">
              <AvGroup>
                <Label id="referenceLabel" for="prepaImmo-reference">
                  <Translate contentKey="projectReactSprApp.prepaImmo.reference">reference</Translate>
                </Label>
                <AvField id="prepaImmo-reference" type="text" value={prepaImmo.reference} name="reference" />
              </AvGroup>
              <AvGroup>
                <Label id="ancienlocalLabel" for="prepaImmo-ancienlocal">
                  <Translate contentKey="projectReactSprApp.prepaImmo.ancienlocal">ancienlocal</Translate>
                </Label>
                <AvField id="prepaImmo-ancienlocal" type="text" value={prepaImmo.ancienlocal} name="ancienlocal" />
              </AvGroup>
              <AvGroup>
                <Label id="ImmoRattacheLabel" for="prepaImmo-ImmoRattache">
                  <Translate contentKey="projectReactSprApp.prepaImmo.ImmoRattache">ImmoRattache</Translate>
                </Label>
                <AvField id="prepaImmo-ImmoRattache" type="number" value={prepaImmo.ImmoRattache} name="ImmoRattache" />
              </AvGroup>
              <AvGroup>
                <Label id="numSubvLabel" for="prepaImmo-numSubv">
                  <Translate contentKey="projectReactSprApp.prepaImmo.numSubv">numSubv</Translate>
                </Label>
                <AvField id="prepaImmo-numSubv" type="number" value={prepaImmo.numSubv} name="numSubv" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxSubvLabel" for="prepaImmo-tauxSubv">
                  <Translate contentKey="projectReactSprApp.prepaImmo.tauxSubv">tauxSubv</Translate>
                </Label>
                <AvField id="prepaImmo-tauxSubv" type="number" value={prepaImmo.tauxSubv} name="tauxSubv" />
              </AvGroup>
                <AvGroup className={prepaImmo.etat === 'R' && 'M' ?'badge badge-danger':'badge badge-success'}>
                <Label id="etatLabel" for="prepaImmo-etat">
                  <Translate contentKey="projectReactSprApp.prepaImmo.etat">etat</Translate>
                </Label>
                <AvField  id="prepaImmo-etat" type="text"  value={prepaImmo.etat} name="etat" />
              </AvGroup>
              <AvGroup>
                <Label id="motifRejetSubvLabel" for="prepaImmo-motifRejet">
                  <Translate contentKey="projectReactSprApp.prepaImmo.motifRejet">motifRejet</Translate>
                </Label>
                <AvField id="prepaImmo-motifRejet" type="text" value={prepaImmo.motifRejet} name="motifRejet" />
              </AvGroup>
               </Col>
               <Col md="5">
                  <Label><strong>Infos commande/facture</strong></Label>
                  <AvGroup>
                <Label id="numBonCommLabel" for="prepaImmo-numBonComm">
                  <Translate contentKey="projectReactSprApp.prepaImmo.numBonComm">numBonComm</Translate>
                </Label>
                <AvField id="prepaImmo-numBonComm" type="text" value={prepaImmo.numBonComm} name="numBonComm" />
              </AvGroup>
              <AvGroup>
                <Label id="dateBonCommLabel" for="prepaImmo-dateBonComm">
                  <Translate contentKey="projectReactSprApp.prepaImmo.dateBonComm">dateBonComm</Translate>
                </Label>
                <AvField id="prepaImmo-type" type="date" value={prepaImmo.dateBonComm} name="dateBonComm" />
              </AvGroup>
              <AvGroup>
                <Label id="fournLabel" for="prepaImmo-fourn">
                  <Translate contentKey="projectReactSprApp.prepaImmo.fourn">fourn</Translate>
                </Label>
                <AvField id="prepaImmo-fourn" type="text" value={prepaImmo.fourn} name="fourn" />
              </AvGroup>
              <AvGroup>
                <Label id="bonLivLabel" for="prepaImmo-bonLiv">
                  <Translate contentKey="projectReactSprApp.prepaImmo.bonLiv">bonLiv</Translate>
                </Label>
                <AvField id="prepaImmo-bonLiv" type="text" value={prepaImmo.bonLiv} name="bonLiv" />
              </AvGroup>
              <AvGroup>
                <Label id="dateBonLivLabel" for="prepaImmo-dateBonLiv">
                  <Translate contentKey="projectReactSprApp.prepaImmo.dateBonLiv">dateBonLiv</Translate>
                </Label>
                <AvField id="prepaImmo-dateBonLiv" type="date"  value={prepaImmo.dateBonLiv} name="dateBonLiv" />
              </AvGroup>
               <AvGroup>
                <Label id="numfactLabel" for="prepaImmo-numfact">
                  <Translate contentKey="projectReactSprApp.prepaImmo.numfact">numfact</Translate>
                </Label>
                <AvField id="prepaImmo-numfact" type="text" name="numfact" value={prepaImmo.numfact}/>
              </AvGroup>
              <AvGroup>
                <Label id="dfactLabel" for="prepaImmo-dfact">
                  <Translate contentKey="projectReactSprApp.prepaImmo.dfact">dfact</Translate>
                </Label>
                <AvField id="prepaImmo-dfact" type="date" value={prepaImmo.dfact} name="dfact" />
              </AvGroup>
              <AvGroup>
                <Label id="mnttaxeLabel" for="prepaImmo-mnttaxe">
                  <Translate contentKey="projectReactSprApp.prepaImmo.mnttaxe">mnttaxe</Translate>
                </Label>
                <AvField id="prepaImmo-mnttaxe" type="number" value={prepaImmo.mnttaxe} name="mnttaxe" />
              </AvGroup>
              <AvGroup>
                <Label id="nbreLabel" for="prepaImmo-nbre">
                  <Translate contentKey="projectReactSprApp.prepaImmo.nbre">nbre</Translate>
                </Label>
                <AvField id="prepaImmo-nbre" type="number" value={prepaImmo.nbre} name="nbre"/>
              </AvGroup>
              <AvField type="select" name="ancCompte" value={prepaImmo.ancCompte} label="Compte" >
                  <option>3310205860</option>
                  <option>2543453453</option>
                  <option>45345354353</option>
                  <option>4</option>
                  <option>5</option>
                  </AvField>
              <AvField type="select" name="comptabilise" value={prepaImmo.comptabilise} label="A comptabiliser" >
                  <option>1</option>
                  </AvField>
                  <Label><strong>Dates</strong></Label>
                  <AvGroup>
                <Label id="ddacLabel" for="prepaImmo-ddac">
                  <Translate contentKey="projectReactSprApp.prepaImmo.ddac">ddac</Translate>
                </Label>
                <AvField id="prepaImmo-ddac" type="date" value={prepaImmo.ddac} name="ddac" />
              </AvGroup>
              <AvGroup>
                <Label id="dmsLabel" for="prepaImmo-dms">
                  <Translate contentKey="projectReactSprApp.prepaImmo.dms">dms</Translate>
                </Label>
                <AvField id="prepaImmo-dms" type="date" value={prepaImmo.dms} name="dms" />
              </AvGroup>
                </Col>
                </Row>
                 </div>
                  &nbsp;
              <Row className="justify-content-end">
                <Col md="5">
              &nbsp;
               {prepaImmo.etat !=='M' ? <Button tag={Link} color="primary" id="save-entity"  type="submit" disabled>
                <FontAwesomeIcon icon="save" />  &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button> : <Button tag={Link} to={`${match.url}/${prepaImmo.numero}/valid`} color="primary" id="save-entity"  type="submit">
                <FontAwesomeIcon icon="save" />  &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>}
                &nbsp;
                <Button tag={Link} to={`${match.url}/${prepaImmo.numero}/edit`} color="success" type="submit">
                <FontAwesomeIcon icon="pencil-alt" />
                &nbsp;
                 <Translate contentKey="entity.action.edit">Edit</Translate>
              </Button>
                &nbsp;
                <Button  tag={Link} to={`${match.url}/${prepaImmo.numero}/delete`} color="danger" type="submit">
                <FontAwesomeIcon icon="trash" />{' '}
                &nbsp;
                <Translate contentKey="entity.action.delete">Delete</Translate>
              </Button>
                &nbsp;
               <Button  tag={Link} to={`${match.url}/${prepaImmo.numero}/edit2`} color="warning" type="submit">
                <FontAwesomeIcon icon="times" />{' '}
                &nbsp;
                <Translate contentKey="entity.action.rejet">rejet</Translate>
              </Button>
              &nbsp;
              <Button tag={Link} id="cancel-save" to="/" replace color="info">
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.quitter">Back</Translate>
                </span>
              </Button>
              </Col></Row>
            </AvForm>
          ))}
      </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = (storeState: IRootState) => ({
  prepaImmoList: storeState.prepaImmo.entities,
   totalItems: storeState.prepaImmo.totalItems,
});

const mapDispatchToProps = { getEntities};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmo);
