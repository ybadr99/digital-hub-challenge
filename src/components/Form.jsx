import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Form({ addTask }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask(title);
      setTitle('');
      setMessage('');
      closeModal();
    } else {
      setMessage('Please enter a valid task');
    }
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        Add Task
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <form onSubmit={handleSubmit} className="modal">
            <h2>Add New Task</h2>
            {message && <span className="message">{message}</span>}
            <input
              type="text"
              placeholder="Enter your task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-text"
            />
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="close" onClick={closeModal}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Form;
