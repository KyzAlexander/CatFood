import dataCards from "../../mocks/dataCards.js";
import Card from "../Card/containers";

const MainModule = () => {
  return (
    <div className="mainModule">
      <h1 className="mainModule__title">Ты сегодня покормил кота?</h1>
      <div className="mainModule__cards">
        {dataCards.map(
          ({
            taste,
            details,
            weight,
            cardDescription,
            disabled,
            noProductDescription,
          }) => {
            return (
              <Card
                taste={taste}
                details={details}
                weight={weight}
                cardDescription={
                  disabled ? noProductDescription : cardDescription
                }
                disabled={disabled}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
export default MainModule;
