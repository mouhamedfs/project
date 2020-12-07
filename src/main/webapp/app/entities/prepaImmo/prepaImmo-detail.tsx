import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './prepaImmo.reducer';
import { IPrepaImmo } from 'app/shared/model/prepaImmo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPrepaImmoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ numero: string }> {}

export const PrepaImmoDetail = (props: IPrepaImmoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numero);
  }, []);

  const handleClose = () => {
    props.history.push('/prepaImmo');
  };
  
  const { prepaImmoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.prepaImmo.detail.title">Prepa Immo</Translate> [<b>{prepaImmoEntity.numero}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="libimmo">
              <Translate contentKey="projectReactSprApp.prepaImmo.libimmo">libimmo</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.libimmo}</dd>
          <dt>
            <span id="genre">
              <Translate contentKey="projectReactSprApp.prepaImmo.genre">genre</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.genre}</dd>
          <dt>
            <span id="marque">
              <Translate contentKey="projectReactSprApp.prepaImmo.marque">marque</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.marque}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectReactSprApp.prepaImmo.type">type</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.type}</dd>
          <dt>
            <span id="reference">
              <Translate contentKey="projectReactSprApp.prepaImmo.reference">reference</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.reference}</dd>
           <dt>
            <span id="nbre">
              <Translate contentKey="projectReactSprApp.prepaImmo.nbre">nbre</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.nbre}</dd>
           <dt>
            <span id="fourn">
              <Translate contentKey="projectReactSprApp.prepaImmo.fourn">fourn</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.fourn}</dd>
           <dt>
            <span id="numfact">
              <Translate contentKey="projectReactSprApp.prepaImmo.numfact">numfact</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.numfact}</dd>
           <dt>
            <span id="numBonComm">
              <Translate contentKey="projectReactSprApp.prepaImmo.numBonComm">numBonComm</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.numBonComm}</dd>
           <dt>
            <span id="dateBonComm">
              <Translate contentKey="projectReactSprApp.prepaImmo.dateBonComm">dateBonComm</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.dateBonComm}</dd>
           <dt>
            <span id="bonLiv">
              <Translate contentKey="projectReactSprApp.prepaImmo.bonLiv">bonLiv</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.bonLiv}</dd>
           <dt>
            <span id="dfact">
              <Translate contentKey="projectReactSprApp.prepaImmo.dfact">dfact</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.dfact}</dd>
           <dt>
            <span id="valacq">
              <Translate contentKey="projectReactSprApp.prepaImmo.valacq">valacq</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.valacq}</dd>
           <dt>
            <span id="mnttaxe">
              <Translate contentKey="projectReactSprApp.prepaImmo.mnttaxe">mnttaxe</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.mnttaxe}</dd>
           <dt>
            <span id="montreeval">
              <Translate contentKey="projectReactSprApp.prepaImmo.montreeval">montreeval</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.montreeval}</dd>
           <dt>
            <span id="valacq2">
              <Translate contentKey="projectReactSprApp.prepaImmo.valacq2">valacq2</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.valacq2}</dd>
           <dt>
            <span id="mnttaxe2">
              <Translate contentKey="projectReactSprApp.prepaImmo.mnttaxe2">mnttaxe2</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.mnttaxe2}</dd>
           <dt>
            <span id="ddac">
              <Translate contentKey="projectReactSprApp.prepaImmo.ddac">ddac</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.ddac}</dd>
           <dt>
            <span id="dms">
              <Translate contentKey="projectReactSprApp.prepaImmo.dms">dms</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.dms}</dd>
          <dt>
            <span id="age">
              <Translate contentKey="projectReactSprApp.prepaImmo.age">Age</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.age}</dd>
           <dt>
            <span id="cdir">
              <Translate contentKey="projectReactSprApp.prepaImmo.cdir">cdir</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cdir}</dd>
           <dt>
            <span id="cserv">
              <Translate contentKey="projectReactSprApp.prepaImmo.cserv">cserv</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cserv}</dd>
           <dt>
            <span id="local">
              <Translate contentKey="projectReactSprApp.prepaImmo.local">local</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.local}</dd>
           <dt>
            <span id="csfam">
              <Translate contentKey="projectReactSprApp.prepaImmo.csfam">csfam</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.csfam}</dd>
           <dt>
            <span id="cpttva">
              <Translate contentKey="projectReactSprApp.prepaImmo.cpttva">cpttva</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cpttva}</dd>
           <dt>
            <span id="cptimmo">
              <Translate contentKey="projectReactSprApp.prepaImmo.cptimmo">cptimmo</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cptimmo}</dd>
           <dt>
            <span id="cptamort">
              <Translate contentKey="projectReactSprApp.prepaImmo.cptamort">cptamort</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cptamort}</dd>
          <dt>
            <span id="cptdot">
              <Translate contentKey="projectReactSprApp.prepaImmo.cptdot">cptdot</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cptdot}</dd>
          <dt>
            <span id="taux">
              <Translate contentKey="projectReactSprApp.prepaImmo.taux">taux</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.taux}</dd>
          <dt>
            <span id="taux2">
              <Translate contentKey="projectReactSprApp.prepaImmo.taux2">taux2</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.taux2}</dd>
          <dt>
            <span id="duree2">
              <Translate contentKey="projectReactSprApp.prepaImmo.duree2">duree2</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.duree2}</dd>
          <dt>
            <span id="cpteBenef">
              <Translate contentKey="projectReactSprApp.prepaImmo.cpteBenef">cpteBenef</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.cpteBenef}</dd>
          <dt>
            <span id="immoamort">
              <Translate contentKey="projectReactSprApp.prepaImmo.immoamort">immoamort</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.immoamort}</dd>
          <dt>
            <span id="regul">
              <Translate contentKey="projectReactSprApp.prepaImmo.regul">regul</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.regul}</dd>
          <dt>
            <span id="reeval">
              <Translate contentKey="projectReactSprApp.prepaImmo.reeval">reeval</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.reeval}</dd>
          <dt>
            <span id="anccodif">
              <Translate contentKey="projectReactSprApp.prepaImmo.anccodif">anccodif</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.anccodif}</dd>
          <dt>
            <span id="fiscale">
              <Translate contentKey="projectReactSprApp.prepaImmo.fiscale">fiscale</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.fiscale}</dd>
          <dt>
            <span id="contrat">
              <Translate contentKey="projectReactSprApp.prepaImmo.contrat">contrat</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.contrat}</dd>
          <dt>
            <span id="taxe">
              <Translate contentKey="projectReactSprApp.prepaImmo.taxe">taxe</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.taxe}</dd>
          <dt>
            <span id="ancCompte">
              <Translate contentKey="projectReactSprApp.prepaImmo.ancCompte">ancCompte</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.ancCompte}</dd>
          <dt>
            <span id="operateurSaisi">
              <Translate contentKey="projectReactSprApp.prepaImmo.operateurSaisi">operateurSaisi</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.operateurSaisi}</dd>
          <dt>
            <span id="etat">
              <Translate contentKey="projectReactSprApp.prepaImmo.etat">etat</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.etat}</dd>
          <dt>
            <span id="motifRejet">
              <Translate contentKey="projectReactSprApp.prepaImmo.motifRejet">motifRejet</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.motifRejet}</dd>
          <dt>
            <span id="nummodif">
              <Translate contentKey="projectReactSprApp.prepaImmo.nummodif">nummodif</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.nummodif}</dd>
          <dt>
            <span id="item">
              <Translate contentKey="projectReactSprApp.prepaImmo.item">item</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.item}</dd>
          <dt>
            <span id="comptabilise">
              <Translate contentKey="projectReactSprApp.prepaImmo.comptabilise">comptabilise</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.comptabilise}</dd>
          <dt>
            <span id="ImmoRattache">
              <Translate contentKey="projectReactSprApp.prepaImmo.ImmoRattache">ImmoRattache</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.ImmoRattache}</dd>
          <dt>
            <span id="numinv">
              <Translate contentKey="projectReactSprApp.prepaImmo.numinv">numinv</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.numinv}</dd>
          <dt>
            <span id="codevalo">
              <Translate contentKey="projectReactSprApp.prepaImmo.codevalo">codevalo</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.codevalo}</dd>
          <dt>
            <span id="ancienlocal">
              <Translate contentKey="projectReactSprApp.prepaImmo.ancienlocal">ancienlocal</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.ancienlocal}</dd>
          <dt>
            <span id="numAvance">
              <Translate contentKey="projectReactSprApp.prepaImmo.numAvance">numAvance</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.numAvance}</dd>
          <dt>
            <span id="blocnotes">
              <Translate contentKey="projectReactSprApp.prepaImmo.blocnotes">blocnotes</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.blocnotes}</dd>
          <dt>
            <span id="SSMA_TimeStamp">
              <Translate contentKey="projectReactSprApp.prepaImmo.SSMA_TimeStamp">SSMA_TimeStamp</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.numinv}</dd>
          <dt>
            <span id="numSubv">
              <Translate contentKey="projectReactSprApp.prepaImmo.numSubv">numSubv</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.numSubv}</dd>
          <dt>
            <span id="tauxSubv">
              <Translate contentKey="projectReactSprApp.prepaImmo.tauxSubv">tauxSubv</Translate>
            </span>
          </dt>
          <dd>{prepaImmoEntity.tauxSubv}</dd>
        </dl>
        <Button tag={Link} to="/prepaImmo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/prepaImmo/${prepaImmoEntity.numero}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ prepaImmo }: IRootState) => ({
  prepaImmoEntity: prepaImmo.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaImmoDetail);
