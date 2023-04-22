<<<<<<< HEAD
const connection = require('../config/connection');

const list = () => {
    return connection('users')
        .select('*');
};

const listWhere = (params = {}) => {
    return connection('users')
        .select('*')
        .where(params);
};

const create = (object) => {
    return connection('users')
        .insert(object);
};

const update = (params, object) => {
    return connection('users')
        .where(params)
        .where("idUser", "!=", "1")
        .update(object);   
};

const deleteWhere = (params = {}) => {
    return connection('users')
        .where(params)
        .where("userType", "!=", "Admin")
        .del();
};

=======
const connection = require('../config/connection');

const list = () => {
    return connection('users')
        .select('*');
};

const listWhere = (params = {}) => {
    return connection('users')
        .select('*')
        .where(params);
};

const create = (object) => {
    return connection('users')
        .insert(object);
};

const update = (params, object) => {
    return connection('users')
        .where(params)
        .where("idUser", "!=", "1")
        .update(object);   
};

const deleteWhere = (params = {}) => {
    return connection('users')
        .where(params)
        .where("userType", "!=", "Admin")
        .del();
};

>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
module.exports = { list, listWhere, create, update, deleteWhere };