const PowerUser = ({ item }) => (
    <div className="user" style={{border: "3px solid gold"}}>
        <div className="username" style={{fontWeight: "bold"}}>{item.username}</div>
        <div className="fullname">{item.fullName}</div>
    </div>
);