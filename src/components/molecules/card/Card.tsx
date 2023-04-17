import { FC, useState } from "react";
import Button from "../../atmos/button/Button";
import Gif from "../../../utils/interfaces/gif";
import deleteIcon from "../../../assets/delete-icon.svg";
import "./Card.scss";
interface CardProps {
  handleDelete: (gif: Gif) => Promise<void>;
  gif: Gif;
}

const Card: FC<CardProps> = ({ handleDelete, gif }) => {
  const [isShowingOptions, setIsShowingOptions] = useState<boolean>(false);

  return (
    <article className="card">
      {isShowingOptions && (
        <div className="card__settings">
          <Button onClick={() => handleDelete(gif)}> Eliminar</Button>
          <Button onClick={() => setIsShowingOptions(false)}> Cancelar</Button>
        </div>
      )}
      <Button
        onClick={() => setIsShowingOptions(true)}
        className="card__delete-button"
        variant="secondary"
        type="button"
      >
        <img src={deleteIcon} alt={`showDelete-${gif.id}`} />
      </Button>
      <img src={gif.url} alt={`gif-${gif.id}`} className="card__img" />
    </article>
  );
};

export default Card;
