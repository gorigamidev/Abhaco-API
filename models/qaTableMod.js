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

module.exports = { listAll, listWhere, create, update, deleteWhere };