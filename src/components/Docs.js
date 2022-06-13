import { useState } from "react";
import ModalComponent from "./Modal";

const Doc = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="docs-main">
      <h1>Docs</h1>
      <button className="add-docs" onClick={handleClick}>
        Add a Document
      </button>
      <ModalComponent open={open} setOpen={setOpen} />
    </div>
  );
};

export default Doc;
