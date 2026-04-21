const getStatus = (req, res) => {
  res.json({ message: "Api Server is Running", port: 3001 });
};

const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
};

module.exports = {getStatus, getUsers}