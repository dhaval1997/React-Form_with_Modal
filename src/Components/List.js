const List = (props) => {
  return (
    <div className="list-container">
      <ul className="list-items">
        {props.users.map((user) => (
          <li key={Math.random().toString()}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
