import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Tech</h4>
          <h1 className="list-unstyled">
            <li>342-420-6969</li>
            <li>Dakar,Senegal</li>
          </h1>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Register</h4>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>Nous contacter</h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Ntech | Copyright |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
