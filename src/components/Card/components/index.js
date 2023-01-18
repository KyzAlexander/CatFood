import SelectedCardText from "./selectedCardText";
import NoSelectedCardText from "./noSelectedCardText";
import catImg from "../../../assets/img/cat-img.jpg";

const Card = ({
  taste,
  details,
  weight,
  cardDescription,
  disabled,
  isSelected,
  selectedCard,
  handleMouseLeave,
  selectionClassNameWeight,
  selectionClassNameCard,
}) => {
  return (
    <div className="wrapperCard">
      <div
        className={`wrapperCard__card ${selectionClassNameCard()}`}
        onClick={() => selectedCard()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="wrapperText">
          <p className="name">Сказочное заморское яство</p>
          <h1 className="title">Нямушка</h1>
          <h3 className="taste">{taste}</h3>
          <p className="details">{details}</p>
        </div>
        <div className={`wrapperWeight ${selectionClassNameWeight()}`}>
          <p className="wrapperWeight__text">
            {weight} <span className="size">кг</span>
          </p>
        </div>
        <img className="imgCat" src={catImg} alt="cat"></img>
      </div>
      {disabled ? (
        <SelectedCardText
          disabled={disabled}
          cardDescription={cardDescription}
        />
      ) : isSelected ? (
        <SelectedCardText
          disabled={disabled}
          cardDescription={cardDescription}
        />
      ) : (
        <NoSelectedCardText selectedCard={selectedCard} />
      )}
    </div>
  );
};
export default Card;
