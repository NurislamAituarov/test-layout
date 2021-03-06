import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import './Main.scss';

import { selectedCategory } from '../../Redux/action';
import { Card } from '../Card';
import { Btn } from '../Btn';

const filter_list = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

export function Main() {
  const { arrCards, filter } = useSelector((state) => state.reducer);
  const [cards, setCards] = useState(arrCards);
  const [activeFilterList, setActiveFilterList] = useState('Show All');
  const [activeCard, setActiveCard] = useState(null);
  const [index, setIndex] = useState({
    indexEndCard: 9,
    indexCard: 1,
  });
  const dispatch = useDispatch();
  const refCard = useRef([]);

  useEffect(() => {
    setCards(arrCards);
  }, [arrCards]);

  const filterCards = () => {
    if (filter === 'Show All') return arrCards;
    return cards.filter((el) => {
      return el.category === filter;
    });
  };

  function onFilter(el) {
    setActiveFilterList(el);
    dispatch(selectedCategory(el));
  }

  function onSelectCard(id) {
    if (id === activeCard) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
    setIndex({ ...index, indexCard: id });
  }

  function onLoadMore() {
    setIndex({ ...index, indexEndCard: index.indexEndCard + 9 });
  }

  return (
    <main className="main">
      <div className="filter flex">
        {filter_list.map((el, i) => {
          return (
            <li
              onClick={() => onFilter(el)}
              key={i}
              className={cn({ filter__activeList: activeFilterList === el })}>
              {el}
            </li>
          );
        })}
      </div>

      <div className="wrapper__cards">
        {filterCards()
          .slice(0, index.indexEndCard)
          .map((el, i) => {
            return (
              <Card
                key={el.id}
                el={el}
                onSelectCard={onSelectCard}
                refCard={refCard}
                activeCard={activeCard}
                onFilter={onFilter}
              />
            );
          })}
      </div>

      {index.indexEndCard < cards.length && (
        <Btn click={onLoadMore} title="load more" more={true} />
      )}
    </main>
  );
}
