import { useEffect, useState } from 'react';
import { Nav } from '../Nav';
import { BurgerMenu } from '../BurgerMenu';
import './Header.scss';
import { Btn } from '../Btn';

export function Header() {
  const [show, setShow] = useState(false);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 768) {
        setShow(true);
      } else {
        setShow(false);
        setHamburgerClick(false);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container flex">
        <div className="header__logo">Agency</div>
        {!show && <Nav />}
        <div style={{ position: 'relative' }} className="flex">
          <Btn title="Contact" />
          <BurgerMenu hamburgerClick={hamburgerClick} setHamburgerClick={setHamburgerClick} />
          {hamburgerClick && (
            <div className="menu-list fade">
              <Nav />
            </div>
          )}
        </div>
      </div>
      <div className="header__title">
        <h1>Portfolio</h1>
        <p>lorem ipsum dolor sit am Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
      </div>
    </header>
  );
}
