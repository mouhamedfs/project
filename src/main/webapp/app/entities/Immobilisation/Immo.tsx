import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntities } from './Immo.reducer';
import { ITEMS_PER_PAGES } from 'app/shared/util/pagination.constants';
import { IImmo } from 'app/shared/model/immobilisation.model';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import {
  Translate,
  translate,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  TextFormat,
  JhiPagination,
  JhiItemCount,
  getSortState,
} from 'react-jhipster';
import { AUTHORITIES } from 'app/config/constants';
import { hasAnyAuthority } from 'app/shared/auth/private-route';

export interface IImmoProps extends StateProps, DispatchProps, RouteComponentProps<{}> {
  numero: string;
}

export const Immobilisation = (props: IImmoProps) => {
  const [pagination, setPagination] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGES), props.location.search)
  );

  useEffect(() => {
    props.getEntities(pagination.activePage - 1, pagination.itemsPerPage, `immo,${pagination.order}`);
    const endURL = `?page=${pagination.activePage}&sort=immo,${pagination.order}`;
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
        sort: 'immo',
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () =>
    setPagination({
      ...pagination,
      order: pagination.order === 'asc' ? 'desc' : 'asc',
      sort: 'immo',
    });

  const handlePagination = currentPage =>
    setPagination({
      ...pagination,
      activePage: currentPage,
    });
  const { immobilisationList, match, totalItems } = props;

  return (
    <div>
      <h2 id="Immobilisation-heading">
        <Translate contentKey="projectReactSprApp.Immobilisation.home.title">Immobilisation</Translate>
      </h2>
      {props.totalItems ? (
        <div className={immobilisationList && immobilisationList.length > 0 ? '' : 'd-none'}>
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
      <Row className="justify-content-center">
        <Col md="1">
          <Link to={`${match.url}/recherche`} className="btn btn-info float-right jh-create-entity">
            <FontAwesomeIcon icon="search" />
            <h5>Rechercher</h5>{' '}
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md="8">
          <br />
          <h3>
            <strong>Immobilisation</strong>
          </h3>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-start" onClick={sort('immo')}>
        <Col md="12">
          {immobilisationList.map((immobilisation, i) => (
            <AvForm key={`entity-${i}`}>
              <AvGroup>
                <Label for="Immobilisation-immo">
                  <Translate contentKey="global.field.id">Immo</Translate>
                </Label>
                <AvInput
                  id="Immobilisation-immo"
                  value={immobilisation.immo}
                  type="text"
                  className="form-control"
                  name="numero"
                  required
                  readOnly
                />
              </AvGroup>
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup className="hand" onClick={sort('libimmo')}>
                    <Label id="libimmoLabel" for="Immobilisation-libimmo">
                      <Translate contentKey="projectReactSprApp.Immobilisation.libimmo">Libellé</Translate>
                    </Label>
                    <AvField id="Immobilisation-libimmo" value={immobilisation.libimmo} type="text" name="libimmo" />
                  </AvGroup>
                </Col>
              </Row>
              <div className="group-box">
                <Row className="justify-content-start">
                  <Col md="8">
                    <Label>
                      <strong>Infos Nature</strong>
                    </Label>
                    <AvGroup>
                      <Label id="genreLabel" for="Immobilisation-genre">
                        <Translate contentKey="projectReactSprApp.Immobilisation.genre">genre</Translate>
                      </Label>
                      <AvField id="Immobilisation-genre" value={immobilisation.genre} type="text" name="genre" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="typeLabel" for="Immobilisation-type">
                        <Translate contentKey="projectReactSprApp.Immobilisation.type">type</Translate>
                      </Label>
                      <AvField id="Immobilisation-type" value={immobilisation.type} type="text" name="type" />
                    </AvGroup>
                  </Col>
                </Row>
                <Row className="justify-content-start">
                  <Col md="6">
                    <AvGroup>
                      <Label id="cptimmoLabel" for="Immobilisation-cptimmo">
                        <Translate contentKey="projectReactSprApp.Immobilisation.cptimmo">cptimmo</Translate>
                      </Label>
                      <AvField id="Immobilisation-cptimmo" value={immobilisation.cptimmo} type="text" name="cptimmo" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="cptamortLabel" for="Immobilisation-cptamort">
                        <Translate contentKey="projectReactSprApp.Immobilisation.cptamort">cptamort</Translate>
                      </Label>
                      <AvField id="Immobilisation-cptamort" value={immobilisation.cptamort} type="text" name="cptamort" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="cptdotLabel" for="Immobilisation-cptdot">
                        <Translate contentKey="projectReactSprApp.Immobilisation.cptdot">cptdot</Translate>
                      </Label>
                      <AvField id="Immobilisation-cptdot" type="text" value={immobilisation.cptdot} name="cptdot" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="tauxLabel" for="Immobilisation-taux">
                        <Translate contentKey="projectReactSprApp.Immobilisation.taux">taux</Translate>
                      </Label>
                      <AvField id="Immobilisation-taux" value={immobilisation.taux} type="number" name="taux" />
                    </AvGroup>
                  </Col>
                  <Col md="4">
                    <AvGroup>
                      <Label id="itemLabel" for="Immobilisation-item">
                        <Translate contentKey="projectReactSprApp.Immobilisation.item">item</Translate>
                      </Label>
                      <AvField id="Immobilisation-item" type="text" value={immobilisation.item} name="item" size="20" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="patenteLabel" for="immobilisation-patente">
                        <Translate contentKey="projectReactSprApp.prepaImmo.patente">patente</Translate>
                      </Label>
                      <AvField id="prepaImmo-patente" type="text" value={immobilisation.taux_patente} name="taux_patente" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="impotLabel" for="prepaImmo-impot">
                        <Translate contentKey="projectReactSprApp.prepaImmo.impot">impot</Translate>
                      </Label>
                      <AvField id="prepaImmo-impot" type="text" value={immobilisation.taux_impot} name="taux_impot" />
                    </AvGroup>
                  </Col>
                </Row>
              </div>
              <br />
              <div className="group-box">
                <Label>
                  <strong>Localisation</strong>
                </Label>
                <Row className="justify-content-start">
                  <Col md="6">
                    <AvGroup>
                      <Label id="marqueLabel" for="Immobilisation-marque">
                        <Translate contentKey="projectReactSprApp.Immobilisation.marque">marque</Translate>
                      </Label>
                      <AvField id="Immobilisation-marque" type="text" value={immobilisation.marque} name="marque" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="localLabel" for="Immobilisation-local">
                        <Translate contentKey="projectReactSprApp.Immobilisation.local">local</Translate>
                      </Label>
                      <AvField id="Immobilisation-local" type="text" value={immobilisation.local} name="local" />
                    </AvGroup>
                  </Col>
                </Row>
              </div>
              <br />
              <div className="group-box">
                <Label>
                  <strong>Autres Infos</strong>
                </Label>
                <Row className="justify-content-start">
                  <Col md="7">
                    <AvGroup>
                      <Label id="referenceLabel" for="prepaImmo-reference">
                        <Translate contentKey="projectReactSprApp.prepaImmo.reference">reference</Translate>
                      </Label>
                      <AvField id="Immobilisation-reference" type="text" value={immobilisation.reference} name="reference" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="ancienlocalLabel" for="prepaImmo-ancienlocal">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ancienlocal">ancienlocal</Translate>
                      </Label>
                      <AvField id="Immobilisation-ancienlocal" type="text" value={immobilisation.ancienlocal} name="ancienlocal" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="ImmoRattacheLabel" for="prepaImmo-ImmoRattache">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ImmoRattache">ImmoRattache</Translate>
                      </Label>
                      <AvField id="Immobilisation-ImmoRattache" type="number" value={immobilisation.ImmoRattache} name="ImmoRattache" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="numSubvLabel" for="prepaImmo-numSubv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.numSubv">numSubv</Translate>
                      </Label>
                      <AvField id="Immobilisation-numSubv" type="number" value={immobilisation.numSubv} name="numSubv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="tauxSubvLabel" for="prepaImmo-tauxSubv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.tauxSubv">tauxSubv</Translate>
                      </Label>
                      <AvField id="Immobilisation-tauxSubv" type="number" value={immobilisation.tauxSubv} name="tauxSubv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="amortiLabel" for="Immobilisation-amorti">
                        <Translate contentKey="projectReactSprApp.Immobilisation.amorti">amorti</Translate>
                      </Label>
                      <AvField id="Immobilisation-amorti" type="text" value={immobilisation.amorti} name="amorti" />
                    </AvGroup>
                    <AvGroup>
                      <Label id=" taux2Label" for="prepaImmo- taux2">
                        <Translate contentKey="projectReactSprApp.Immobilisation. taux2"> taux2</Translate>
                      </Label>
                      <AvField id="Immobilisation- taux2" type="text" value={immobilisation.taux2} name="motifRejet" />
                    </AvGroup>
                  </Col>
                  <Col md="5">
                    <Label>
                      <strong>Infos commande/facture</strong>
                    </Label>
                    <AvGroup>
                      <Label id="numBonCommLabel" for="prepaImmo-numBonComm">
                        <Translate contentKey="projectReactSprApp.prepaImmo.numBonComm">numBonComm</Translate>
                      </Label>
                      <AvField id="prepaImmo-numBonComm" type="text" value={immobilisation.numBonComm} name="numBonComm" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dateBonCommLabel" for="prepaImmo-dateBonComm">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dateBonComm">dateBonComm</Translate>
                      </Label>
                      <AvField id="prepaImmo-type" type="date" value={immobilisation.dateBonComm} name="dateBonComm" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="fournLabel" for="prepaImmo-fourn">
                        <Translate contentKey="projectReactSprApp.prepaImmo.fourn">fourn</Translate>
                      </Label>
                      <AvField id="prepaImmo-fourn" type="text" value={immobilisation.fourn} name="fourn" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="bonLivLabel" for="prepaImmo-bonLiv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.bonLiv">bonLiv</Translate>
                      </Label>
                      <AvField id="prepaImmo-bonLiv" type="text" value={immobilisation.bonLiv} name="bonLiv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dateBonLivLabel" for="prepaImmo-dateBonLiv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dateBonLiv">dateBonLiv</Translate>
                      </Label>
                      <AvField id="prepaImmo-dateBonLiv" type="date" value={immobilisation.dateBonLiv} name="dateBonLiv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="numfactLabel" for="prepaImmo-numfact">
                        <Translate contentKey="projectReactSprApp.prepaImmo.numfact">numfact</Translate>
                      </Label>
                      <AvField id="prepaImmo-numfact" type="text" name="numfact" value={immobilisation.numfact} />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dfactLabel" for="prepaImmo-dfact">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dfact">dfact</Translate>
                      </Label>
                      <AvField id="prepaImmo-dfact" type="date" value={immobilisation.dfact} name="dfact" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="mnttaxeLabel" for="prepaImmo-mnttaxe">
                        <Translate contentKey="projectReactSprApp.prepaImmo.mnttaxe">mnttaxe</Translate>
                      </Label>
                      <AvField id="prepaImmo-mnttaxe" type="number" value={immobilisation.mnttaxe} name="mnttaxe" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="mnttaxeLabel" for="prepaImmo-mnttaxe">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ancCompte">ancCompte</Translate>
                      </Label>
                      <AvField id="prepaImmo-ancCompte" type="text" value={immobilisation.ancCompte} name="mnttaxe" />
                    </AvGroup>
                    <AvField type="select" name="comptabilise" value={immobilisation.comptabilise} label="A comptabiliser">
                      <option>1</option>
                    </AvField>
                    <Label>
                      <strong>Dates</strong>
                    </Label>
                    <AvGroup>
                      <Label id="ddacLabel" for="prepaImmo-ddac">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ddac">ddac</Translate>
                      </Label>
                      <AvField id="prepaImmo-ddac" type="date" value={immobilisation.ddac} name="ddac" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dmsLabel" for="prepaImmo-dms">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dms">dms</Translate>
                      </Label>
                      <AvField id="prepaImmo-dms" type="date" value={immobilisation.dms} name="dms" />
                    </AvGroup>
                  </Col>
                </Row>
              </div>
              &nbsp;
              <Row className="justify-content-end">
                <Col md="5">
                  &nbsp;
                  <Button tag={Link} to={`${match.url}/${immobilisation.immo}/edit`} color="success" type="submit">
                    <FontAwesomeIcon icon="pencil-alt" />
                    &nbsp;
                    <Translate contentKey="entity.action.edit">Edit</Translate>
                  </Button>
                  &nbsp;
                  <Button tag={Link} to={`${match.url}/${immobilisation.immo}/delete`} color="danger" type="submit">
                    <FontAwesomeIcon icon="trash" /> &nbsp;
                    <Translate contentKey="entity.action.delete">Delete</Translate>
                  </Button>
                  &nbsp;
                  <Button tag={Link} id="cancel-save" to="/" replace color="info">
                    &nbsp;
                    <span className="d-none d-md-inline">
                      <Translate contentKey="entity.action.quitter">Back</Translate>
                    </span>
                  </Button>
                </Col>
              </Row>
            </AvForm>
          ))}
        </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = (storeState: IRootState) => ({
  immobilisationList: storeState.immobilisation.entities,
  totalItems: storeState.immobilisation.totalItems,
});

const mapDispatchToProps = { getEntities };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Immobilisation);
