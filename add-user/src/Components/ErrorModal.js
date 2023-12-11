export const ErrorModal = (props) => {
  const handleCloseModal = () => {
    props.close();
  };
  return (
    <div className="error-modal">
      <h2 className="header">{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={handleCloseModal}>Okay</button>
    </div>
  );
};
