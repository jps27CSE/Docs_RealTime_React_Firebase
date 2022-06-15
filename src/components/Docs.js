import { useEffect, useRef, useState } from "react";
import ModalComponent from "./Modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Doc = ({ database }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [docsData, setDocsData] = useState([]);
  const collectionRef = collection(database, "docsData");
  const isMounted = useRef();
  let navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addData = () => {
    addDoc(collectionRef, {
      title: title,
      docsDesc: "",
    })
      .then(() => {
        alert("Data Added");
        handleClose();
      })
      .catch(() => {
        alert("Cannot add data");
      });
  };

  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  const getID = (id) => {
    navigate(`/editDocs/${id}`);
  };

  useEffect(() => {
    if (isMounted.current) {
      return;
    } else {
      isMounted.current = true;
      getData();
    }
  }, []);

  return (
    <div className="docs-main">
      <h1>Docs</h1>
      <button className="add-docs" onClick={handleClick}>
        Add a Document
      </button>
      <div className="grid-main">
        {docsData.map((doc) => {
          return (
            <div className="grid-child" onClick={() => getID(doc.id)}>
              <p>{doc.title}</p>
              <div dangerouslySetInnerHTML={{ __html: doc.docsDesc }} />
            </div>
          );
        })}
      </div>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        addData={addData}
      />
    </div>
  );
};

export default Doc;
