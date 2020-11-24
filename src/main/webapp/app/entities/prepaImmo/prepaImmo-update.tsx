import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './prepaImmo.reducer';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPrepaImmoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ numero: string }> {}

export const PrepaImmoUpdate = (props: IPrepaImmoUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.numero);

  const { prepaImmoEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/prepaImmo');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.numero);
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
        <h3><strong>SAISIE ACQUISITION</strong></h3>
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
                <Row className="justify-content-start">
                <Col md="8">
                  <Label><strong>Infos Nature</strong></Label>
              <AvGroup>
                <Label id="genreLabel" for="prepaImmo-genre">
                  <Translate contentKey="projectReactSprApp.prepaImmo.genre">genre</Translate>
                </Label>
                <AvField id="prepaImmo-genre" type="text" name="genre" />
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="prepaImmo-type">
                  <Translate contentKey="projectReactSprApp.prepaImmo.type">type</Translate>
                </Label>
                <AvField id="prepaImmo-type" type="text" name="type" />
              </AvGroup>
              </Col></Row>
              <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="cptimmoLabel" for="prepaImmo-cptimmo">
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptimmo">cptimmo</Translate>
                </Label>
                <AvField id="prepaImmo-cptimmo" type="text" name="cptimmo" />
              </AvGroup>
              <AvGroup>
                <Label id="cptamortLabel" for="prepaImmo-cptamort">
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptamort">cptamort</Translate>
                </Label>
                <AvField id="prepaImmo-cptamort" type="text" name="cptamort" />
              </AvGroup>
              <AvGroup>
                <Label id="cptdotLabel" for="prepaImmo-cptdot">
                  <Translate contentKey="projectReactSprApp.prepaImmo.cptdot">cptdot</Translate>
                </Label>
                <AvField id="prepaImmo-cptdot" type="text" name="cptdot" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxLabel" for="prepaImmo-taux">
                  <Translate contentKey="projectReactSprApp.prepaImmo.taux">taux</Translate>
                </Label>
                <AvField id="prepaImmo-taux" type="number" name="taux" />
              </AvGroup>
              </Col>
              <Col md="4">
              <AvGroup>
                <Label id="itemLabel" for="prepaImmo-item">
                  <Translate contentKey="projectReactSprApp.prepaImmo.item">item</Translate>
                </Label>
                <AvField id="prepaImmo-item" type="text" name="item" size="20" />
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
              <Label><strong>Localisation</strong></Label>
                <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="marqueLabel" for="prepaImmo-marque">
                  <Translate contentKey="projectReactSprApp.prepaImmo.marque">marque</Translate>
                </Label>
                <AvField id="prepaImmo-marque" type="number" name="marque" />
              </AvGroup>
              <AvGroup>
                <Label id="localLabel" for="prepaImmo-local">
                  <Translate contentKey="projectReactSprApp.prepaImmo.local">local</Translate>
                </Label>
                <AvField id="prepaImmo-local" type="text" name="local" />
              </AvGroup>
              </Col>
              </Row>
              <Label><strong>Autres Infos</strong></Label>
                <Row className="justify-content-start">
                <Col md="7">
              <AvGroup>
                <Label id="referenceLabel" for="prepaImmo-reference">
                  <Translate contentKey="projectReactSprApp.prepaImmo.reference">reference</Translate>
                </Label>
                <AvField id="prepaImmo-reference" type="text" name="reference" />
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
               </Col>
               <Col md="5">
                  <Label><strong>Infos commande/facture</strong></Label>
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
                <AvField id="prepaImmo-nbre" type="number" name="nbre"/>
              </AvGroup>
              <AvField type="select" name="ancCompte" label="Compte" >
                  <option>3310205860</option>
                  <option>2543453453</option>
                  <option>45345354353</option>
                  <option>4</option>
                  <option>5</option>
                  </AvField>
              <AvField type="select" name="comptabilise" label="A comptabiliser" >
                  <option>1</option>
                  </AvField>
                  <Label><strong>Dates</strong></Label>
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
              <Button color="danger" id="reset-entity" type="reset" disabled={updating}>
                <FontAwesomeIcon icon="hard-hat" />
                &nbsp;
                <Translate contentKey="entity.action.reset">Effacer Tout</Translate>
              </Button>
              </Col></Row>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  prepaImmoEntity: storeState.prepaImmo.entity,
  loading: storeState.prepaImmo.loading,
  updating: storeState.prepaImmo.updating,
  updateSuccess: storeState.prepaImmo.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmoUpdate);
