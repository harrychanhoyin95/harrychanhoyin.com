/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'react-scroll';

import { useContentful } from '../../hooks/dataHooks';
import { startCase } from '../../utils/helpers';

const Header = () => {
  const { headerItems } = useContentful();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const renderLogo = () => {
    return (
      <div className="md:w-12 md:h-12">
        <StaticImage
          src="../../images/logo.png"
          alt="Logo"
          className="w-12 h-12"
        />
      </div>
    );
  };

  const renderHeaderItems = () => {
    const idArr = ['opening', 'experience', 'project', 'footer'];

    const itemsElements = headerItems.map((item, index) => {
      return (
        <Link
          to={idArr[index]}
          smooth
          onClick={() => setMenuOpen(false)}
          key={item}
        >
          <div
            className={`cursor-pointer text-headerItemColor text-right py-2 md:px-6 md:py-0 md:block ${
              isMenuOpen ? 'max-h-full' : 'max-h-0 hidden md:max-h-full'
            }`}
          >
            {startCase(item)}
          </div>
        </Link>
      );
    });

    return (
      <div
        className={`transition-all ${
          isMenuOpen
            ? 'max-h-full mt-4'
            : 'max-h-0 md:flex md:max-h-full overflow-hidden'
        } w-full flex-col md:flex-row md:mt-0 md:w-auto`}
      >
        {itemsElements}
      </div>
    );
  };

  const renderHamburger = () => {
    return (
      <div
        className="text-descriptionColor text-4xl cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>
    );
  };

  return (
    <header className="z-50 py-5 px-12 flex md: flex-wrap justify-between items-center bg-headerColor sticky top-0">
      {renderLogo()}
      {renderHamburger()}
      {renderHeaderItems()}
    </header>
  );
};

export default Header;
