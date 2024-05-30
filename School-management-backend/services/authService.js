// authService.js
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';
const {teacherList}=require('../Controller/teacherList')

const authenticateUser = (loginName, password) => {
    const user = teacherList.find(u => u.firstName === loginName && u.password === password);
    if (user) {
        const token = jwt.sign({ loginName: user.firstName }, secretKey, { expiresIn: '1h' });
        return token;
    }
    return null; // Return null if authentication fails
};

module.exports = { authenticateUser };
