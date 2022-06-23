import cn from 'classnames';
import { useDispatch } from 'react-redux';
import './Card.scss';
import { deletedCard } from '../../Redux/action';

export function Card({ el, onSelectCard, refCard, activeCard, onFilter }) {
  const dispatch = useDispatch();
  return (
    <div
      onKeyPress={(e) => {
        if (e.code === 'Enter') {
          onSelectCard(el.id);
        }
        if (e.code === 'Delete') {
          dispatch(deletedCard(el.id));
        }
      }}
      ref={(element) => (refCard.current[el.id] = element)}
      tabIndex="0"
      onClick={() => onSelectCard(el.id)}
      key={el.id}
      className={cn('cards__item anim-card', { 'cards__item-active': activeCard === el.id })}>
      <img src={el.img} alt="" height={300} />
      <div className="cards__item-title">
        <p
          onClick={(e) => {
            e.stopPropagation();
            onFilter(el.category);
          }}>
          {el.category}
        </p>
        <h2>{el.name}</h2>
      </div>
    </div>
  );
}
