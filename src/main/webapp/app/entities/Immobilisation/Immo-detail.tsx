import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntity } from './Immo.reducer';
import { IImmo } from 'app/shared/model/immobilisation.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IImmoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ immo: string }> {}

export const ImmoDetail = (props: IImmoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.immo);
  }, []);

  const { immobilisationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.Immobilisation.detail.title">Prepa Immo</Translate> [<b>{immobilisationEntity.immo}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="libimmo">
              <Translate contentKey="projectReactSprApp.Immobilisation.libimmo">libimmo</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.libimmo}</dd>
          <dt>
            <span id="genre">
              <Translate contentKey="projectReactSprApp.Immobilisation.genre">genre</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.genre}</dd>
          <dt>
            <span id="marque">
              <Translate contentKey="projectReactSprApp.Immobilisation.marque">marque</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.marque}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectReactSprApp.Immobilisation.type">type</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.type}</dd>
          <dt>
            <span id="reference">
              <Translate contentKey="projectReactSprApp.Immobilisation.reference">reference</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.reference}</dd>
           <dt>
            <span id="fourn">
              <Translate contentKey="projectReactSprApp.Immobilisation.fourn">fourn</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.fourn}</dd>
           <dt>
            <span id="numfact">
              <Translate contentKey="projectReactSprApp.Immobilisation.numfact">numfact</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.numfact}</dd>
           <dt>
            <span id="numBonComm">
              <Translate contentKey="projectReactSprApp.Immobilisation.numBonComm">numBonComm</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.numBonComm}</dd>
           <dt>
            <span id="dateBonComm">
              <Translate contentKey="projectReactSprApp.Immobilisation.dateBonComm">dateBonComm</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.dateBonComm}</dd>
           <dt>
            <span id="bonLiv">
              <Translate contentKey="projectReactSprApp.Immobilisation.bonLiv">bonLiv</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.bonLiv}</dd>
           <dt>
            <span id="dfact">
              <Translate contentKey="projectReactSprApp.Immobilisation.dfact">dfact</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.dfact}</dd>
           <dt>
            <span id="valacq">
              <Translate contentKey="projectReactSprApp.Immobilisation.valacq">valacq</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.valacq}</dd>
           <dt>
            <span id="mnttaxe">
              <Translate contentKey="projectReactSprApp.Immobilisation.mnttaxe">mnttaxe</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.mnttaxe}</dd>
           <dt>
            <span id="montreeval">
              <Translate contentKey="projectReactSprApp.Immobilisation.montreeval">montreeval</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.montreeval}</dd>
           <dt>
            <span id="valacq2">
              <Translate contentKey="projectReactSprApp.Immobilisation.valacq2">valacq2</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.valacq2}</dd>
           <dt>
            <span id="mnttaxe2">
              <Translate contentKey="projectReactSprApp.Immobilisation.mnttaxe2">mnttaxe2</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.mnttaxe2}</dd>
           <dt>
            <span id="ddac">
              <Translate contentKey="projectReactSprApp.Immobilisation.ddac">ddac</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.ddac}</dd>
           <dt>
            <span id="dms">
              <Translate contentKey="projectReactSprApp.Immobilisation.dms">dms</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.dms}</dd>
          <dt>
            <span id="age">
              <Translate contentKey="projectReactSprApp.Immobilisation.age">Age</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.age}</dd>
           <dt>
            <span id="cdir">
              <Translate contentKey="projectReactSprApp.Immobilisation.cdir">cdir</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cdir}</dd>
           <dt>
            <span id="cserv">
              <Translate contentKey="projectReactSprApp.Immobilisation.cserv">cserv</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cserv}</dd>
           <dt>
            <span id="local">
              <Translate contentKey="projectReactSprApp.Immobilisation.local">local</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.local}</dd>
           <dt>
            <span id="csfam">
              <Translate contentKey="projectReactSprApp.Immobilisation.csfam">csfam</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.csfam}</dd>
           <dt>
            <span id="cpttva">
              <Translate contentKey="projectReactSprApp.Immobilisation.cpttva">cpttva</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cpttva}</dd>
           <dt>
            <span id="cptimmo">
              <Translate contentKey="projectReactSprApp.Immobilisation.cptimmo">cptimmo</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cptimmo}</dd>
           <dt>
            <span id="cptamort">
              <Translate contentKey="projectReactSprApp.Immobilisation.cptamort">cptamort</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cptamort}</dd>
          <dt>
            <span id="cptdot">
              <Translate contentKey="projectReactSprApp.Immobilisation.cptdot">cptdot</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cptdot}</dd>
          <dt>
            <span id="taux">
              <Translate contentKey="projectReactSprApp.Immobilisation.taux">taux</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.taux}</dd>
          <dt>
            <span id="taux2">
              <Translate contentKey="projectReactSprApp.Immobilisation.taux2">taux2</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.taux2}</dd>
          <dt>
            <span id="duree2">
              <Translate contentKey="projectReactSprApp.Immobilisation.duree2">duree2</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.duree2}</dd>
          <dt>
            <span id="cpteBenef">
              <Translate contentKey="projectReactSprApp.Immobilisation.cpteBenef">cpteBenef</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.cpteBenef}</dd>
          <dt>
            <span id="immoamort">
              <Translate contentKey="projectReactSprApp.Immobilisation.immoamort">immoamort</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.immoamort}</dd>
          <dt>
            <span id="regul">
              <Translate contentKey="projectReactSprApp.Immobilisation.regul">regul</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.regul}</dd>
          <dt>
            <span id="reeval">
              <Translate contentKey="projectReactSprApp.Immobilisation.reeval">reeval</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.reeval}</dd>
          <dt>
            <span id="anccodif">
              <Translate contentKey="projectReactSprApp.Immobilisation.anccodif">anccodif</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.anccodif}</dd>
          <dt>
            <span id="fiscale">
              <Translate contentKey="projectReactSprApp.Immobilisation.fiscale">fiscale</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.fiscale}</dd>
          <dt>
            <span id="taxe">
              <Translate contentKey="projectReactSprApp.Immobilisation.taxe">taxe</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.taxe}</dd>
          <dt>
            <span id="ancCompte">
              <Translate contentKey="projectReactSprApp.Immobilisation.ancCompte">ancCompte</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.ancCompte}</dd>
          <dt>
            <span id="oper">
              <Translate contentKey="projectReactSprApp.Immobilisation.oper">operateurSaisi</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.oper}</dd>
          <dt>
            <span id="item">
              <Translate contentKey="projectReactSprApp.Immobilisation.item">item</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.item}</dd>
          <dt>
            <span id="comptabilise">
              <Translate contentKey="projectReactSprApp.Immobilisation.comptabilise">comptabilise</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.comptabilise}</dd>
          <dt>
            <span id="ImmoRattache">
              <Translate contentKey="projectReactSprApp.Immobilisation.ImmoRattache">ImmoRattache</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.ImmoRattache}</dd>
          <dt>
            <span id="codevalo">
              <Translate contentKey="projectReactSprApp.Immobilisation.codevalo">codevalo</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.codevalo}</dd>
          <dt>
            <span id="ancienlocal">
              <Translate contentKey="projectReactSprApp.Immobilisation.ancienlocal">ancienlocal</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.ancienlocal}</dd>
          <dt>
            <span id="blocnotes">
              <Translate contentKey="projectReactSprApp.Immobilisation.blocnotes">blocnotes</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.blocnotes}</dd>
          <dt>
            <span id="numSubv">
              <Translate contentKey="projectReactSprApp.Immobilisation.numSubv">numSubv</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.numSubv}</dd>
          <dt>
            <span id="tauxSubv">
              <Translate contentKey="projectReactSprApp.Immobilisation.tauxSubv">tauxSubv</Translate>
            </span>
          </dt>
          <dd>{immobilisationEntity.tauxSubv}</dd>
        </dl>
        <Button tag={Link} to="/immo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/immo/${immobilisationEntity.immo}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ immobilisation }: IRootState) => ({
  immobilisationEntity: immobilisation.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ImmoDetail);
