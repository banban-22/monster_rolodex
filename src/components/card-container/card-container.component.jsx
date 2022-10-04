import './card-container.styles.css';

const CardContainer = ({ monster }, props) => {
  const { name, email } = monster;
  const { index } = props;

  return (
    <div className="card-container" key={index}>
      <img
        src={`https://robohash.org/${index}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardContainer;
