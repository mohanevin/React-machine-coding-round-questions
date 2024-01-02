import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenModal(!openModal)} className="modalBtn">
        Modal
      </button>
      <Modal open={openModal} close={setOpenModal} />
    </div>
  );
}
