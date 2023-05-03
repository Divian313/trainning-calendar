import "./Card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <>
      <li className="card-item">
        <div className="card-item-title mb-3 text-end">{card.title}</div>
        <div className="card-item-info">
          <span className="number-set">{card.number}x</span>
          <span className="card-item-detail">thong tin</span>
        </div>
      </li>
    </>
  );
};
export default Card;
