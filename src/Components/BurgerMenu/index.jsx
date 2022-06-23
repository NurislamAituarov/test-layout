import { useEffect } from 'react';
import './BurgerMenu.scss';

export function BurgerMenu({ hamburgerClick, setHamburgerClick }) {
  useEffect(() => {
    const refInput = document.getElementById('checkbox4');

    function resize() {
      if (document.body.clientWidth > 768) {
        refInput.checked = false;
      }
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [hamburgerClick]);

  return (
    <div className="container__hamburger">
      <input type="checkbox" id="checkbox4" className="checkbox4 visuallyHidden" />
      <label htmlFor="checkbox4" onClick={() => setHamburgerClick(!hamburgerClick)}>
        <div className="hamburger hamburger4">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
          <span className="bar bar5"></span>
        </div>
      </label>
    </div>
  );
}
