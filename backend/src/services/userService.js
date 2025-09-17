let users = [
    { id: 1, name: 'Tarequr Rahman', email: 'tareq@example.com' }
];

exports.getAllUsers = () => {
    return users;
};

exports.addUser = (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
};
