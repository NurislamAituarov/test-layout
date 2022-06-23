import './Btn.scss';
import cn from 'classnames';

export function Btn({ title, more, click }) {
  return (
    <button onClick={click} className={cn('btn', { 'btn-more': more })}>
      {title}
    </button>
  );
}
