import { ChangeEvent, FC, useState } from "react";
import Button from "../../atmos/button/Button";
import Input from "../../atmos/input/Input";
import './add-gif.scss'
export interface AddGifProps {
  onSubmit: (text: string) => void;
}

const AddGif: FC<AddGifProps> = ({ onSubmit }) => {
  const [gifUrl, setGifUrl] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGifUrl(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(gifUrl);
  };
  return (
    <div className="add-gif">
      <Input onChange={handleChange} placeholder="Add gif"/>
      <Button onClick={handleSubmit}>Agregar</Button>
    </div>
  );
};

export default AddGif;
