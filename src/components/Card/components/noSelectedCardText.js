const noSelectedCardText = (selectedCard) => {
  return (
    <p className="wrapperCard__description">
      Чего сидишь? Порадуй котэ,{" "}
      <span className="color" onClick={() => selectedCard()}>
        купи.
      </span>
    </p>
  );
};
export default noSelectedCardText;
