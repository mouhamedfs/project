import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './param.reducer';
import { IParamPass, defaultValue } from 'app/shared/model/paramPass.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IParamPassDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ numNumbers: string }> {}

export const ParamPassDetail = (props: IParamPassDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.numNumbers);
  }, []);

  const { paramPassEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="projectReactSprApp.paramPass.detail.title">paramPass</Translate> [<b>{paramPassEntity.numNumbers}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="numUpper">
              <Translate contentKey="projectReactSprApp.paramPass.numUpper">numUpper</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.numUpper}</dd>
          <dt>
            <span id="numSpecial">
              <Translate contentKey="projectReactSprApp.paramPass.numSpecial">numSpecial</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.numSpecial}</dd>
          <dt>
            <span id="dateDef">
              <Translate contentKey="projectReactSprApp.paramPass.dateDef">dateDef</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.dateDef}</dd>
          <dt>
            <span id="minLength">
              <Translate contentKey="projectReactSprApp.paramPass.minLength">minLength</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.minLength}</dd>
          <dt>
            <span id="libelleParam">
              <Translate contentKey="projectReactSprApp.paramPass.libelleParam">libelleParam</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.libelleParam}</dd>
          <dt>
            <span id="freqModif">
              <Translate contentKey="projectReactSprApp.paramPass.freqModif">freqModif</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.freqModif}</dd>
          <dt>
            <span id="nbreJourActiv">
              <Translate contentKey="projectReactSprApp.paramPass.nbreJourActiv">nbreJourActiv</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.nbreJourActiv}</dd>
          <dt>
            <span id="nbrePasseAnt">
              <Translate contentKey="projectReactSprApp.paramPass.nbrePasseAnt">nbrePasseAnt</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.nbrePasseAnt}</dd>
          <dt>
            <span id="nbJourAvModif">
              <Translate contentKey="projectReactSprApp.paramPass.nbJourAvModif">nbJourAvModif</Translate>
            </span>
          </dt>
          <dd>{paramPassEntity.nbJourAvModif}</dd>
        </dl>
        <Button tag={Link} to="/paramPass" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/paramPass/${paramPassEntity.numNumbers}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ param }: IRootState) => ({
  paramPassEntity: param.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ParamPassDetail);
