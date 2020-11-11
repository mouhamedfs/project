import './home.scss';

import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;
  return (
    <Fragment>

      <header className="bg-primary text-white">
      <div className="container text-center">
      <h1>Gestion des Immobilisations</h1>
      <p className="lead">Gestion globale des Immobilisations et de la comptabilité</p>
    </div>
  </header>

  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About </h2>
          <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
          <ul>
            <li>Clickable nav links that smooth scroll to page sections</li>
            <li>Responsive behavior when clicking nav links perfect for a one page website</li>
            <li>feature which highlights which section of the page on in the navbar</li>
            <li>Minimal custom CSS so you are free to explore your own unique design options</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="services" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>Services we offer</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>Contact us</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
        </div>
      </div>
    </div>
  </section>
  </Fragment>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
