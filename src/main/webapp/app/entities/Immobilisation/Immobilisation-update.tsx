import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './Immobilisation.reducer';
import { IImmo } from 'app/shared/model/immobilisation.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IImmoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ immo: string }> {}

export const ImmoUpdate = (props: IImmoUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.immo);

  const { immobilisationEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/immo');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.immo);
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
        ...immobilisationEntity,
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
          <h2 id="projectReactSprApp.Immobilisation.home.createOrEditLabel">
            <Translate contentKey="projectReactSprApp.Immobilisation.home.createOrEditLabel">Create or edit a Immobilisation</Translate>
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
            <AvForm model={isNew ? {} : immobilisationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="Immo-immo">
                    <Translate contentKey="global.field.id">Immo</Translate>
                  </Label>
                  <AvInput id="Immo-immo" type="text" className="form-control" name="immo" required readOnly />
                </AvGroup>
              ) : null}
              <Row className="justify-content-center">
                <Col md="10">
              <AvGroup>
                <Label id="libimmoLabel" for="prepaImmo-libimmo">
                  <Translate contentKey="projectReactSprApp.Immobilisation.libimmo">Libellé</Translate>
                </Label>
                <AvField id="Immobilisation-libimmo" type="text" name="libimmo" />
              </AvGroup>
              </Col>
              </Row>
              <div className="group-box">
                <Row className="justify-content-start">
                <Col md="8">
                  <Label><strong>Infos Nature</strong></Label>
              <AvGroup>
                <Label id="genreLabel" for="Immobilisation-genre">
                  <Translate contentKey="projectReactSprApp.Immobilisation.genre">genre</Translate>
                </Label>
                <AvField id="Immobilisation-genre" type="text" name="genre" />
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="Immobilisation-type">
                  <Translate contentKey="projectReactSprApp.Immobilisation.type">type</Translate>
                </Label>
                <AvField id="Immobilisation-type" type="text" name="type" />
              </AvGroup>
              </Col></Row>
              <Row className="justify-content-start">
                <Col md="6">
              <AvGroup>
                <Label id="cptimmoLabel" for="Immobilisation-cptimmo">
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptimmo">cptimmo</Translate>
                </Label>
                <AvField id="Immobilisation-cptimmo" type="text" name="cptimmo" />
              </AvGroup>
              <AvGroup>
                <Label id="cptamortLabel" for="Immobilisation-cptamort">
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptamort">cptamort</Translate>
                </Label>
                <AvField id="Immobilisation-cptamort" type="text" name="cptamort" />
              </AvGroup>
              <AvGroup>
                <Label id="cptdotLabel" for="Immobilisation-cptdot">
                  <Translate contentKey="projectReactSprApp.Immobilisation.cptdot">cptdot</Translate>
                </Label>
                <AvField id="Immobilisation-cptdot" type="text" name="cptdot" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxLabel" for="Immobilisation-taux">
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux">taux</Translate>
                </Label>
                <AvField id="Immobilisation-taux" type="number" name="taux" />
              </AvGroup>
              </Col>
              <Col md="4">
              <AvGroup>
                <Label id="itemLabel" for="Immobilisation-item">
                  <Translate contentKey="projectReactSprApp.Immobilisation.item">item</Translate>
                </Label>
                <AvField id="Immobilisation-item" type="text" name="item" size="20" />
              </AvGroup>
              <AvGroup>
                <Label id="patenteLabel" for="Immobilisation-taux_patente">
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux_patente">patente</Translate>
                </Label>
                <AvField id="Immobilisation-taux_patente" type="text" name="taux_patente"/>
              </AvGroup>
              <AvGroup>
                <Label id="impotLabel" for="Immobilisation-taux_impot">
                  <Translate contentKey="projectReactSprApp.Immobilisation.taux_impot">taux_impot</Translate>
                </Label>
                <AvField id="Immobilisation-taux_impot" type="text"  name="impot" />
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
                <Label id="marqueLabel" for="Immobilisation-marque">
                  <Translate contentKey="projectReactSprApp.Immobilisation.marque">marque</Translate>
                </Label>
                <AvField id="Immobilisation-marque" type="text" name="marque" />P
              </AvGroup>
              <AvGroup>
                <Label id="localLabel" for="Immobilisation-local">
                  <Translate contentKey="projectReactSprApp.Immobilisation.local">local</Translate>
                </Label>
                <AvField id="Immobilisation-local" type="text" name="local" />
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
                <Label id="referenceLabel" for="Immobilisation-reference">
                  <Translate contentKey="projectReactSprApp.Immobilisation.reference">reference</Translate>
                </Label>
                <AvField id="Immobilisation-reference" type="text" name="reference" />
              </AvGroup>
              <AvGroup>
                <Label id="ancienlocalLabel" for="Immobilisation-ancienlocal">
                  <Translate contentKey="projectReactSprApp.Immobilisation.ancienlocal">ancienlocal</Translate>
                </Label>
                <AvField id="Immobilisation-ancienlocal" type="text" name="ancienlocal" />
              </AvGroup>
              <AvGroup>
                <Label id="ImmoRattacheLabel" for="Immobilisation-ImmoRattache">
                  <Translate contentKey="projectReactSprApp.Immobilisation.ImmoRattache">ImmoRattache</Translate>
                </Label>
                <AvField id="Immobilisation-ImmoRattache" type="number" name="ImmoRattache" />
              </AvGroup>
              <AvGroup>
                <Label id="numSubvLabel" for="Immobilisation-numSubv">
                  <Translate contentKey="projectReactSprApp.Immobilisation.numSubv">numSubv</Translate>
                </Label>
                <AvField id="Immobilisation-numSubv" type="number" name="numSubv" />
              </AvGroup>
              <AvGroup>
                <Label id="tauxSubvLabel" for="Immobilisation-tauxSubv">
                  <Translate contentKey="projectReactSprApp.Immobilisation.tauxSubv">tauxSubv</Translate>
                </Label>
                <AvField id="Immobilisation-tauxSubv" type="number" name="tauxSubv" />
              </AvGroup>
               </Col>
               <Col md="5">
                  <Label><strong>Infos commande/facture</strong></Label>
                  <AvGroup>
                <Label id="numBonCommLabel" for="Immobilisation-numBonComm">
                  <Translate contentKey="projectReactSprApp.Immobilisation.numBonComm">numBonComm</Translate>
                </Label>
                <AvField id="Immobilisation-numBonComm" type="text" name="numBonComm" />
              </AvGroup>
              <AvGroup>
                <Label id="dateBonCommLabel" for="Immobilisation-dateBonComm">
                  <Translate contentKey="projectReactSprApp.Immobilisation.dateBonComm">dateBonComm</Translate>
                </Label>
                <AvField id="Immobilisation-type" type="date" name="dateBonComm" />
              </AvGroup>
              <AvGroup>
                <Label id="fournLabel" for="Immobilisation-fourn">
                  <Translate contentKey="projectReactSprApp.Immobilisation.fourn">fourn</Translate>
                </Label>
                <AvField id="Immobilisation-fourn" type="text" name="fourn" />
              </AvGroup>
              <AvGroup>
                <Label id="bonLivLabel" for="Immobilisation-bonLiv">
                  <Translate contentKey="projectReactSprApp.Immobilisation.bonLiv">bonLiv</Translate>
                </Label>
                <AvField id="Immobilisation-bonLiv" type="text" name="bonLiv" />
              </AvGroup>
              <AvGroup>
                <Label id="dateBonLivLabel" for="Immobilisation-dateBonLiv">
                  <Translate contentKey="projectReactSprApp.Immobilisation.dateBonLiv">dateBonLiv</Translate>
                </Label>
                <AvField id="Immobilisation-dateBonLiv" type="date" name="dateBonLiv" />
              </AvGroup>
               <AvGroup>
                <Label id="numfactLabel" for="Immobilisation-numfact">
                  <Translate contentKey="projectReactSprApp.Immobilisation.numfact">numfact</Translate>
                </Label>
                <AvField id="Immobilisation-numfact" type="text" name="numfact" />
              </AvGroup>
              <AvGroup>
                <Label id="dfactLabel" for="Immobilisation-dfact">
                  <Translate contentKey="projectReactSprApp.Immobilisation.dfact">dfact</Translate>
                </Label>
                <AvField id="Immobilisation-dfact" type="date" name="dfact" />
              </AvGroup>
              <AvGroup>
                <Label id="mnttaxeLabel" for="Immobilisation-mnttaxe">
                  <Translate contentKey="projectReactSprApp.Immobilisation.mnttaxe">mnttaxe</Translate>
                </Label>
                <AvField id="Immobilisation-mnttaxe" type="number" name="mnttaxe" />
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
                <Label id="ddacLabel" for="Immobilisation-ddac">
                  <Translate contentKey="projectReactSprApp.Immobilisation.ddac">ddac</Translate>
                </Label>
                <AvField id="Immobilisation-ddac" type="date" name="ddac" />
              </AvGroup>
              <AvGroup>
                <Label id="dmsLabel" for="Immobilisation-dms">
                  <Translate contentKey="projectReactSprApp.Immobilisation.dms">dms</Translate>
                </Label>
                <AvField id="Immobilisation-dms" type="date" name="dms" />
              </AvGroup>
                </Col>
                </Row>
                 </div>
                  &nbsp;
              <Row className="justify-content-end">
                <Col md="5">
              <Button tag={Link} id="cancel-save" to="/immo" replace color="info">
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
              </Col></Row>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  immobilisationEntity: storeState.immobilisation.entity,
  loading: storeState.immobilisation.loading,
  updating: storeState.immobilisation.updating,
  updateSuccess: storeState.immobilisation.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ImmoUpdate);
