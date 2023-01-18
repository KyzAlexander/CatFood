import { useState } from "react";
import Card from "../components";

const CardContainer = ({
  taste,
  details,
  weight,
  cardDescription,
  disabled,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const selectedCard = () => {
    if (!disabled) {
      setIsSelected(!isSelected);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(!isHovering);
  };

  const selectionClassNameWeight = () => {
    if (isSelected && isHovering) {
      return "selectedHoveringWeight";
    } else {
      if (isHovering) {
        return "hoveringWeight";
      } else {
        if (isSelected) {
          return "selectedWeight";
        } else {
          return "";
        }
      }
    }
  };

  const selectionClassNameCard = () => {
    if (!disabled) {
      if (isSelected && isHovering) {
        return "selectedHoveringCard ";
      } else {
        if (isHovering) {
          return "hoveringCard ";
        } else {
          if (isSelected) {
            return "selectedCard";
          } else {
            return "";
          }
        }
      }
    } else {
      return "disabled";
    }
  };

  const props = {
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
  };
  return <Card {...props} />;
};

export default CardContainer;
