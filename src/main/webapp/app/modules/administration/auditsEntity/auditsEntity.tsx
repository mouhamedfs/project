import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Input, Row, Table } from 'reactstrap';
import { Translate, TextFormat, JhiPagination, JhiItemCount, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSVLink, CSVDownload } from 'react-csv';

import { APP_TIMESTAMP_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

import { IRootState } from 'app/shared/reducers';
import { getAuditsEntity } from '../administration.reducer';

export interface IAuditsEntityPageProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export const AuditsEntityPage = (props: IAuditsEntityPageProps) => {
  const [pagination, setPagination] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getAllAuditsEntity();
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
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);
  const getAllAuditsEntity = () => {
    props.getAuditsEntity(pagination.activePage - 1, pagination.itemsPerPage, `${pagination.sort},${pagination.order}`);
  };

  function printData() {
    const divToPrint = document.getElementById('printTable');
    const newWin = window.open('');
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  }

  const { auditsEntity } = props;

  return (
    <div>
      <h2 id="audits-page-heading">Audits</h2>
      <div className="table_button">
        <h2 id="audits-page-heading">Audits</h2>
        <br />
        <button className="btn btn-success btn-lg" id="print" onClick={printData}>
          Imprimer
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-warning btn-lg">
          <CSVLink data={auditsEntity} filename="audits-table.csv">
            Exporter en CSV
          </CSVLink>
        </button>
      </div>
      {auditsEntity && auditsEntity.length > 0 ? (
        <Table striped responsive id="printTable">
          <thead>
            <tr>
              <th>
                <Translate contentKey="audits.table.header.date">Date</Translate>
              </th>
              <th>
                <Translate contentKey="audits.table.header.principal">User</Translate>
              </th>
              <th>
                <Translate contentKey="audits.table.header.action">Type</Translate>
              </th>
              <th>
                <Translate contentKey="audits.table.header.table">Table</Translate>
              </th>
            </tr>
          </thead>
          <tbody>
            {auditsEntity.map((audits, i) => (
              <tr key={`audits-${i}`}>
                <td>{<TextFormat value={audits.actionDate} type="date" format={APP_TIMESTAMP_FORMAT} />}</td>
                <td>{audits.principal}</td>
                <td>{audits.actionType}</td>
                <td>{audits.actionTable}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="alert alert-warning">
          <Translate contentKey="audits.notFound">No audit found</Translate>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  auditsEntity: storeState.administration.auditsEntity,
});

const mapDispatchToProps = { getAuditsEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AuditsEntityPage);
