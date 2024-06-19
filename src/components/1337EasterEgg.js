import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const EasterEgg = () => {
  const [keySequence, setKeySequence] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      setKeySequence((prevSequence) => {
        const newSequence = [...prevSequence, key].slice(-4);

        if (newSequence.join('') === '1337') {
          triggerEasterEgg();
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const triggerEasterEgg = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Easter Egg Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Grattis</h2>
        <p>Du hittade easter eggät</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default EasterEgg;