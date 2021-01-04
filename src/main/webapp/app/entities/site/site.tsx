import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './site.reducer';
import { ISite } from 'app/shared/model/site.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISiteProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Site = (props: ISiteProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { siteList, match, loading } = props;
  return (
    <div>
      <h2 id="Site-heading">
        <Translate contentKey="projectReactSprApp.Site.home.title">Site</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="projectReactSprApp.Site.home.createLabel">Create new Site</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {siteList && siteList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">id</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Site.intSite">intSite</Translate>
                </th>
                <th>
                  <Translate contentKey="projectReactSprApp.Site.codeGuichet">codeGuichet</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {siteList.map((site, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${site.codesite}`} color="link" size="sm">
                      {site.codesite}
                    </Button>
                  </td>
                  <td>{site.intSite}</td>
                  <td>{site.codeGuichet}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${site.codesite}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${site.codesite}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${site.codesite}/delete`} color="danger" size="sm">
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
              <Translate contentKey="projectReactSprApp.Site.home.notFound">No Site found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ site }: IRootState) => ({
  siteList: site.entities,
  loading: site.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(Site);
