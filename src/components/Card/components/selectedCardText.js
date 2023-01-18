const selectedCardText = ({ disabled, cardDescription }) => {
  return (
    <p
      className={
        disabled
          ? "wrapperCard__description disabledColor"
          : "wrapperCard__description"
      }
    >
      {cardDescription}
    </p>
  );
};
export default selectedCardText;
