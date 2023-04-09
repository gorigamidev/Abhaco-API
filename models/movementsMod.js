const connection = require('../config/connection');

const listAll = () => {
    return connection('movements')
        .select('*');
};

const listWhere = (params = {}) => {
    return connection('movements')
        .select('*')
        .where(params);
};

const listWhereSum = ({ year, month, idUser, type } = {}) => {
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  
    return connection('movements')
      .select(connection.raw(`YEAR(dateMovement) as year, MONTH(dateMovement) as month, SUM(total) as total_sum`))
      .whereRaw(`YEAR(dateMovement) = ${year} AND MONTH(dateMovement) = ${formattedMonth}`)
      .where({ idUser, type })
      .groupBy(connection.raw(`YEAR(dateMovement), MONTH(dateMovement)`));
};

const listWhereSumYear = ({ year, idUser, type } = {}) => {
    return connection('movements')
      .select(connection.raw(`YEAR(dateMovement) as year, SUM(total) as total_sum`))
      .whereRaw(`YEAR(dateMovement) = ${year}`)
      .where({ idUser, type })
      .groupBy(connection.raw(`YEAR(dateMovement)`));
  };

const listWhereSumMonth = ({ year, idUser, type } = {}) => {
    return connection('movements')
      .select(connection.raw(`YEAR(dateMovement) as year, MONTH(dateMovement) as month, SUM(total) as total_sum`))
      .whereRaw(`YEAR(dateMovement) = ${year}`)
      .where({ idUser, type })
      .groupBy(connection.raw(`YEAR(dateMovement), MONTH(dateMovement)`));
  };

  const listWhereSumDay = ({ year, month, idUser, type } = {}) => {
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  
    return connection('movements')
      .select(connection.raw(`YEAR(dateMovement) as year, MONTH(dateMovement) as month, DAY(dateMovement) as day, SUM(total) as total_sum`))
      .whereRaw(`YEAR(dateMovement) = ${year} AND MONTH(dateMovement) = ${formattedMonth}`)
      .where({ idUser, type })
      .groupBy(connection.raw(`YEAR(dateMovement), MONTH(dateMovement), DAY(dateMovement)`));
  };
  
  
  

const create = (object) => {
    return connection('movements')
        .insert(object);
};

const update = (params, object) => {
    return connection('movements')
        .where(params)
        .where("state", "=", "0")
        .update(object);
};

const deleteAdmin = (params = {}) => {
    return connection('movements')
        .where(params)
        .del();
};

const deleteWhere = (params = {}) => {
    return connection('movements')
        .where(params)
        .where("state", "=", "0")
        .del();
};

module.exports = { listAll, listWhere, listWhereSum, listWhereSumYear, listWhereSumMonth, listWhereSumDay, create, update, deleteAdmin, deleteWhere};