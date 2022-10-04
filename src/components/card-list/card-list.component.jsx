import CardContainer from '../card-container/card-container.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <CardContainer monster={monster} index={index} />;
      })}
    </div>
  );
};

export default CardList;
