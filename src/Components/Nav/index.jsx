import './Nav.scss';

const menu_list = ['About', 'Services', 'Pricing', 'Blog'];

export function Nav() {
  return (
    <nav className="header__nav">
      <ul className="flex">
        {menu_list.map((el, i) => {
          return (
            <li className="list__item" key={i}>
              {el}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
