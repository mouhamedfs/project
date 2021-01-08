import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntity, updateEntity, createEntity, reset } from './prepaImmo.reducer';
import { get, getUniqueSousFamille } from 'app/entities/sousfamille/sousfamille.reducer';
import { getFamille, getUniqueFamille } from 'app/entities/famille/famille.reducer';
import { getLocalisations, getUniqueLocalisation } from 'app/entities/localisation/localisation.reducer';
import { getSite, getUniqueSite } from 'app/entities/site/site.reducer';
import { getService, getUniqueService } from 'app/entities/service/service.reducer';
import { getDirection, getUniqueDirection } from 'app/entities/direction/direction.reducer';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPrepaImmoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ numero: string }> {}

export const PrepaImmoUpdate = (props: IPrepaImmoUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numero);

  const {
    prepaImmoEntity,
    familleEntity,
    localisationList,
    localisationEntity,
    serviceList,
    serviceEntity,
    directionList,
    directionEntity,
    siteList,
    siteEntity,
    sousFamilleEntity,
    familleList,
    sousFamilleList,
    loading,
    updating,
  } = props;

  const setFilter = serviceList.filter(service => service.cdir === directionEntity.cdir);
  const setFilterLocalisation = localisationList.filter(localisation => localisation.age === siteEntity.codeGuichet);

  const handleClose = () => {
    props.history.push('/prepaImmo');
  };

  
  const handleChange = e => {
    if (e.target.value !== '') {
      props.getUniqueSousFamille(e.target.value[0] + e.target.value[1]);
    }
  };

  const handleChangeFamille = e => {
    if (e.target.value !== '') {
      props.getUniqueFamille(e.target.value[0] + e.target.value[1]);
    }
  };

  const handleChangeLocalisation = e => {
    if (e.target.value !== '') {
      props.getUniqueLocalisation(
        e.target.value[0] +
          e.target.value[1] +
          e.target.value[2] +
          e.target.value[3] +
          e.target.value[4] +
          e.target.value[5] +
          e.target.value[6] +
          e.target.value[7] +
          e.target.value[8] +
          e.target.value[9]
      );
    }
  };

  const handleChangeDirection = e => {
    if (e.target.value !== '') {
      props.getUniqueDirection(e.target.value[0] + e.target.value[1]);
    }
  };

  const handleChangeService = e => {
    if (e.target.value !== '') {
      // eslint-disable-next-line no-console
      console.log(e.target.value);
      props.getUniqueService(e.target.value[0] + e.target.value[1] + e.target.value[2] + e.target.value[3] + e.target.value[4]);
    }
  };

  const handleChangeSite = e => {
    if (e.target.value !== '') {
      props.getUniqueSite(e.target.value[0] + e.target.value[1] + e.target.value[2]);
    }
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
      props.get();
      props.getFamille();
      props.getLocalisations();
      props.getSite();
      props.getService();
      props.getDirection();
    } else {
      props.getEntity(props.match.params.numero);
      props.reset();
      props.get();
      props.getFamille();
      props.getLocalisations();
      props.getSite();
      props.getService();
      props.getDirection();
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...prepaImmoEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };
  return (
    <div>
      <Row className="justify-content-start">
        <Col md="8">
          <h2 id="projectReactSprApp.prepaImmo.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.prepaImmo.home.createOrEditLabel">Create or edit a PrepaImmo</Translate>
          </h2>
          <br />
          <h3>
            <strong>SAISIE ACQUISITION</strong>
          </h3>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-start">
        <Col md="12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : prepaImmoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="prepaImmo-numero">
                    <Translate contentKey="global.field.id">Numero</Translate>
                  </Label>
                  <AvInput id="prepaImmo-numero" type="text" className="form-control" name="numero" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
                  <AvGroup>
                    <Label id="libimmoLabel" for="prepaImmo-libimmo">
                      <Translate contentKey="projectReactSprApp.prepaImmo.libimmo">Libellé</Translate>
                    </Label>
                    <AvField id="prepaImmo-libimmo" type="text" name="libimmo" />
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
                      <AvField type="select" name="famille" onChange={handleChangeFamille} label="famille">
                        <option></option>
                        {familleList.map(famille => (
                          <>
                            <option key={famille.cfam}>
                              {famille.cfam} {famille.libfam}{' '}
                            </option>
                          </>
                        ))}
                      </AvField>
                      <AvField id="prepaImmo-genre" value={familleEntity.libfam} type="text" name="genre" />
                    </AvGroup>
                    <AvField type="select" id="sel" name="Libellé ss famille" label="Sous famille" onChange={handleChange}>
                      {sousFamilleList.map(sousFamille => (
                        <>
                          <option key={sousFamille.csfam}>
                            {sousFamille.csfam} {sousFamille.libsfam}
                          </option>
                        </>
                      ))}
                      <option></option>
                    </AvField>
                    <Label id="typeLabel" for="prepaImmo-type">
                      <Translate contentKey="projectReactSprApp.prepaImmo.type">type</Translate>
                    </Label>
                    <AvField id="prepaImmo-type" value={sousFamilleEntity.libsfam} type="text" name="type" />
                  </Col>
                </Row>
                <Row className="justify-content-start">
                  <Col md="6">
                    <AvGroup>
                      <Label id="cptimmoLabel" for="prepaImmo-cptimmo">
                        <Translate contentKey="projectReactSprApp.prepaImmo.cptimmo">cptimmo</Translate>
                      </Label>
                      <AvField id="prepaImmo-cptimmo" value={sousFamilleEntity.cptimmo} type="text" name="cptimmo" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="cptamortLabel" for="prepaImmo-cptamort">
                        <Translate contentKey="projectReactSprApp.prepaImmo.cptamort">cptamort</Translate>
                      </Label>
                      <AvField id="prepaImmo-cptamort" value={sousFamilleEntity.cptamort} type="text" name="cptamort" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="cptdotLabel" for="prepaImmo-cptdot">
                        <Translate contentKey="projectReactSprApp.prepaImmo.cptdot">cptdot</Translate>
                      </Label>
                      <AvField id="prepaImmo-cptdot" value={sousFamilleEntity.cptdot} type="text" name="cptdot" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="tauxLabel" for="prepaImmo-taux">
                        <Translate contentKey="projectReactSprApp.prepaImmo.taux">taux</Translate>
                      </Label>
                      <AvField id="prepaImmo-taux" value={sousFamilleEntity.taux} type="number" name="taux" />
                    </AvGroup>
                  </Col>
                  <Col md="4">
                    <AvGroup>
                      <Label id="itemLabel" for="prepaImmo-item">
                        <Translate contentKey="projectReactSprApp.prepaImmo.item">item</Translate>
                      </Label>
                      <AvField id="prepaImmo-item" type="text" value={sousFamilleEntity.item} name="item" size="20" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="patenteLabel" for="prepaImmo-patente">
                        <Translate contentKey="projectReactSprApp.prepaImmo.patente">patente</Translate>
                      </Label>
                      <AvField id="prepaImmo-patente" type="text" value={sousFamilleEntity.tauxImpot} name="taux2" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="impotLabel" for="prepaImmo-impot">
                        <Translate contentKey="projectReactSprApp.prepaImmo.impot">impot</Translate>
                      </Label>
                      <AvField id="prepaImmo-impot" type="text" value={sousFamilleEntity.tauxPatente} name="duree2" />
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
                      <AvField type="select" name="Agence/Site" onChange={handleChangeSite} label="Agence/Site">
                        <option></option>
                        {siteList.map(site => (
                          <>
                            <option key={site.codesite}>
                              {site.codesite} {site.intSite}
                            </option>
                          </>
                        ))}
                      </AvField>
                      <Label id="marqueLabel" for="prepaImmo-marque">
                        <Translate contentKey="projectReactSprApp.prepaImmo.marque">marque</Translate>
                      </Label>
                      <AvField id="prepaImmo-marque" type="text" value={siteEntity.intSite} name="marque" />
                      <AvGroup>
                        <AvField type="select" name="Local" onChange={handleChangeLocalisation} label="Local">
                          <option></option>
                          {setFilterLocalisation.map(localisation => (
                            <>
                              <option key={localisation.codeLocal}>
                                {localisation.codeLocal} {localisation.intLocal}
                              </option>
                            </>
                          ))}
                        </AvField>
                        <Label id="localLabel" for="prepaImmo-local">
                          <Translate contentKey="projectReactSprApp.prepaImmo.local">local</Translate>
                        </Label>
                        <AvField id="prepaImmo-local" type="text" value={localisationEntity.codeLocal} name="local" />
                      </AvGroup>
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
                      <AvField type="select" name="direction" onChange={handleChangeDirection} label="Direction">
                        <option></option>
                        {directionList.map(direction => (
                          <>
                            <option key={direction.cdir}>
                              {direction.cdir} {direction.intdir}
                            </option>
                          </>
                        ))}
                      </AvField>
                      <AvField id="prepaImmo-cdir" type="text" value={directionEntity.cdir} name="cdir" />
                    </AvGroup>
                    <AvGroup>
                      <AvField type="select" name="service" onChange={handleChangeService} label="Service">
                        <option></option>
                        {setFilter.map(service => (
                          <>
                            <option key={service.cserv}>
                              {service.cserv} {service.intserv}
                            </option>
                          </>
                        ))}
                      </AvField>
                      <AvField id="prepaImmo-cserv" type="text" value={serviceEntity.cserv} name="cserv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="ancienlocalLabel" for="prepaImmo-ancienlocal">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ancienlocal">ancienlocal</Translate>
                      </Label>
                      <AvField id="prepaImmo-ancienlocal" type="text" name="ancienlocal" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="ImmoRattacheLabel" for="prepaImmo-ImmoRattache">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ImmoRattache">ImmoRattache</Translate>
                      </Label>
                      <AvField id="prepaImmo-ImmoRattache" type="number" name="ImmoRattache" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="referenceLabel" for="prepaImmo-reference">
                        <Translate contentKey="projectReactSprApp.prepaImmo.reference">reference</Translate>
                      </Label>
                      <AvField id="prepaImmo-reference" type="text" name="reference" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="numSubvLabel" for="prepaImmo-numSubv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.numSubv">numSubv</Translate>
                      </Label>
                      <AvField id="prepaImmo-numSubv" type="number" name="numSubv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="tauxSubvLabel" for="prepaImmo-tauxSubv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.tauxSubv">tauxSubv</Translate>
                      </Label>
                      <AvField id="prepaImmo-tauxSubv" type="number" name="tauxSubv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="etatLabel" for="prepaImmo-etat">
                        <Translate contentKey="projectReactSprApp.prepaImmo.etat">etat</Translate>
                      </Label>
                      <AvField id="prepaImmo-etat" type="text" name="etat" value={isNew ? '' : 'M'} />
                    </AvGroup>
                    <AvGroup>
                      <Label id="motifRejetSubvLabel" for="prepaImmo-motifRejet">
                        <Translate contentKey="projectReactSprApp.prepaImmo.motifRejet">motifRejet</Translate>
                      </Label>
                      <AvField id="prepaImmo-motifRejet" type="text" name="motifRejet" />
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
                      <AvField id="prepaImmo-numBonComm" type="text" name="numBonComm" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dateBonCommLabel" for="prepaImmo-dateBonComm">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dateBonComm">dateBonComm</Translate>
                      </Label>
                      <AvField id="prepaImmo-type" type="date" name="dateBonComm" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="fournLabel" for="prepaImmo-fourn">
                        <Translate contentKey="projectReactSprApp.prepaImmo.fourn">fourn</Translate>
                      </Label>
                      <AvField id="prepaImmo-fourn" type="text" name="fourn" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="bonLivLabel" for="prepaImmo-bonLiv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.bonLiv">bonLiv</Translate>
                      </Label>
                      <AvField id="prepaImmo-bonLiv" type="text" name="bonLiv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dateBonLivLabel" for="prepaImmo-dateBonLiv">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dateBonLiv">dateBonLiv</Translate>
                      </Label>
                      <AvField id="prepaImmo-dateBonLiv" type="date" name="dateBonLiv" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="numfactLabel" for="prepaImmo-numfact">
                        <Translate contentKey="projectReactSprApp.prepaImmo.numfact">numfact</Translate>
                      </Label>
                      <AvField id="prepaImmo-numfact" type="text" name="numfact" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dfactLabel" for="prepaImmo-dfact">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dfact">dfact</Translate>
                      </Label>
                      <AvField id="prepaImmo-dfact" type="date" name="dfact" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="mnttaxeLabel" for="prepaImmo-mnttaxe">
                        <Translate contentKey="projectReactSprApp.prepaImmo.mnttaxe">mnttaxe</Translate>
                      </Label>
                      <AvField id="prepaImmo-mnttaxe" type="number" name="mnttaxe" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="nbreLabel" for="prepaImmo-nbre">
                        <Translate contentKey="projectReactSprApp.prepaImmo.nbre">nbre</Translate>
                      </Label>
                      <AvField id="prepaImmo-nbre" type="number" value={1} name="nbre" />
                    </AvGroup>
                    <AvField type="select" name="ancCompte" label="Compte">
                      <option>3310205860</option>
                      <option>2543453453</option>
                      <option>45345354353</option>
                      <option>4</option>
                      <option>5</option>
                    </AvField>
                    <AvField type="select" name="comptabilise" label="A comptabiliser">
                      <option>1</option>
                    </AvField>
                    <Label>
                      <strong>Dates</strong>
                    </Label>
                    <AvGroup>
                      <Label id="ddacLabel" for="prepaImmo-ddac">
                        <Translate contentKey="projectReactSprApp.prepaImmo.ddac">ddac</Translate>
                      </Label>
                      <AvField id="prepaImmo-ddac" type="date" name="ddac" />
                    </AvGroup>
                    <AvGroup>
                      <Label id="dmsLabel" for="prepaImmo-dms">
                        <Translate contentKey="projectReactSprApp.prepaImmo.dms">dms</Translate>
                      </Label>
                      <AvField id="prepaImmo-dms" type="date" name="dms" />
                    </AvGroup>
                  </Col>
                </Row>
              </div>
              &nbsp;
              <Row className="justify-content-end">
                <Col md="5">
                  <Button tag={Link} id="cancel-save" to="/prepaImmo" replace color="info">
                    <FontAwesomeIcon icon="arrow-left" />
                    &nbsp;
                    <span className="d-none d-md-inline">
                      <Translate contentKey="entity.action.back">Back</Translate>
                    </span>
                  </Button>
                  &nbsp;
                  <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                    <FontAwesomeIcon icon="save" />
                    &nbsp;
                    <Translate contentKey="entity.action.save">Save</Translate>
                  </Button>
                  &nbsp;
                </Col>
              </Row>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  prepaImmoEntity: storeState.prepaImmo.entity,
  sousFamilleList: storeState.sousFamille.entities,
  sousFamilleEntity: storeState.sousFamille.entity,
  familleEntity: storeState.famille.entity,
  familleList: storeState.famille.entities,
  serviceEntity: storeState.service.entity,
  serviceList: storeState.service.entities,
  directionEntity: storeState.direction.entity,
  directionList: storeState.direction.entities,
  siteEntity: storeState.site.entity,
  siteList: storeState.site.entities,
  localisationEntity: storeState.localisation.entity,
  localisationList: storeState.localisation.entities,
  loading: storeState.prepaImmo.loading,
  updating: storeState.prepaImmo.updating,
  updateSuccess: storeState.prepaImmo.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
  get,
  getFamille,
  getUniqueSite,
  getSite,
  getUniqueService,
  getService,
  getUniqueDirection,
  getDirection,
  getUniqueSousFamille,
  getUniqueFamille,
  getLocalisations,
  getUniqueLocalisation,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmoUpdate);
