import React, { useState } from 'react';
import { NAV_ITEMS } from './assets/helpers';
import { Link } from 'react-router-dom';
import logo from './assets/settings.png';
import './SideMenu.css';

function SideMenu({ onClickLink }) {
  const [showSubitems, setShowSubitems] = useState(false);

  function handleClick(name) {
    if (name === 'app') {
      setShowSubitems(!showSubitems);
    } else {
      setShowSubitems(false);
    }
  }

  return (
    <div className="side-menu">
      <img className="side-menu__img" src={logo} />
      <nav className="side-menu__nav">
        <ul className="side-menu__list">
          {NAV_ITEMS.map(({ label, name, path, subitems }) => {
            const listItemClass = 'side-menu__list__item'.concat(
              `${subitems ? ' -subitems' : ''}`
            );
            return (
              <li key={name} className={listItemClass}>
                <Link
                  to={path || '#'}
                  onClick={() => handleClick(name)}
                  className="side-menu__list__item__link"
                >
                  {label}
                </Link>
                {subitems && showSubitems && (
                  <ul className="side-menu__list__item__subitems">
                    {subitems.map(
                      ({ name: subitemName, label, path: subitemPath }) => (
                        <li key={subitemName}>
                          <Link
                            to={subitemPath}
                            className="side-menu__list__item__link"
                            onClick={() => {
                              setShowSubitems(false);
                              onClickLink(label);
                            }}
                          >
                            {label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
