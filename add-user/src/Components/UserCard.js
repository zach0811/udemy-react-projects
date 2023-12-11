export const UserCard = (props) => {
  return (
    <div className="user-card">
      <span>{`${props.name} (${props.age} years old)`}</span>
    </div>
  );
};
