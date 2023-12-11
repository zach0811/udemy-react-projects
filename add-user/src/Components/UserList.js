import { UserCard } from "./UserCard";

export const UserList = (props) => {
  return (
    <div className="user-list">
      <ul className="list">
        {props.userList.map((user) => (
          <li key={user.key}>
            <UserCard name={user.userName} age={user.age} />
          </li>
        ))}
      </ul>
    </div>
  );
};
