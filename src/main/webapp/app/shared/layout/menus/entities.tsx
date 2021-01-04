import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/prepaImmo">
      <Translate contentKey="global.menu.entities.prepaImmo" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/personne">
      <Translate contentKey="global.menu.entities.personne" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/immo">
      <Translate contentKey="global.menu.entities.immobilisation" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/ssfamille">
      <Translate contentKey="global.menu.entities.sousFamille" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/famille">
      <Translate contentKey="global.menu.entities.Famille" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/agence">
      <Translate contentKey="global.menu.entities.Agence" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/localisation">
      <Translate contentKey="global.menu.entities.Localisation" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/site">
      <Translate contentKey="global.menu.entities.Site" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
