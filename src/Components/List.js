const List = (props) => {
  return (
    <div className="list-container">
      <ul className="list-items">
        {props.users.map((user) => (
          <li key={Math.random().toString()}>
            Name: {user.name}, College Name: {user.college}, Age: ({user.age} years
            old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
