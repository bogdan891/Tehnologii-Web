const RegularUser = ({ item }) => (
    <div className="user" style={{border: "2px solid gray"}}>
        <div className="username">{item.username}</div>
        <div className="fullname">{item.fullName}</div>
    </div>
);