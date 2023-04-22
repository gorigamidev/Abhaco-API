<<<<<<< HEAD
const connection = require('../config/connection');

const listAll = () => {
    return connection('qatable')
        .select('*');
};

const listWhere = (params = {}) => {
    return connection('qatable')
        .select('*')
        .where(params);
};

const create = (object) => {
    return connection('qatable')
        .insert(object);
};

const update = (params, object) => {
    return connection('qatable')
        .where(params)
        .update(object);
};

const deleteWhere = (params = {}) => {
    return connection('qatable')
        .where(params)
        .del();
};

=======
const connection = require('../config/connection');

const listAll = () => {
    return connection('qatable')
        .select('*');
};

const listWhere = (params = {}) => {
    return connection('qatable')
        .select('*')
        .where(params);
};

const create = (object) => {
    return connection('qatable')
        .insert(object);
};

const update = (params, object) => {
    return connection('qatable')
        .where(params)
        .update(object);
};

const deleteWhere = (params = {}) => {
    return connection('qatable')
        .where(params)
        .del();
};

>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
module.exports = { listAll, listWhere, create, update, deleteWhere };