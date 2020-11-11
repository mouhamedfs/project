import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './authority.reducer';
import { IAuthority} from 'app/shared/model/authority.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAuthorityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ name: string }> {}

export const AuthorityDetail = (props: IAuthorityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.name);
  }, []);

  const { authorityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="role.detail.title">Role</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="Nom Rôle">
              <Translate contentKey="role.nomRole">Nom Rôle</Translate>
            </span>
          </dt>
          <dd>{authorityEntity.name}</dd>
        </dl>
        <Button tag={Link} to="/authority" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/authority/${authorityEntity.name}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ authority }: IRootState) => ({
  authorityEntity: authority.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AuthorityDetail);
