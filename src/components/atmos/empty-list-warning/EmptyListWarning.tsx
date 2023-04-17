import WarningIcon from "../../../assets/warning-icon.svg";

const EmptyListWarning = () => {
  return (
    <div className="empty-gif-list">
      <img className="empty-gif-list__icon" src={WarningIcon} alt="warning" />
      <p className="empty-gif-list__description">No posee gifs</p>
    </div>
  );
};

export default EmptyListWarning;
