const express = require('express');
const router = express.Router();
const service = require('../models/movementsMod'); //listAll, listWhere, create, update, deleteAdmin, deleteWhere <= methods

//list of all elements
const listAll = (req, res) => {
    service
        .listAll()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//List based in a param
const listWhere = (req, res) => {
    service
        .listWhere(req.params)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Sum of movements by User and year-month
const listWhereSum = (req, res) => {
    const { year, month, idUser, type } = req.params;
  
    service
      .listWhereSum({ year, month, idUser, type })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
};

const listWhereSumDay = (req, res) => {
    const {year, month, idUser, type} = req.params;

    service
        .listWhereSumDay({year, month, idUser, type})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({error: err});
        });
};

//Sum of movements by user and year
const listWhereSumMonth = (req, res) => {
    const { year, idUser, type } = req.params;
  
    service
      .listWhereSumMonth({ year, idUser, type })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
//Sum of movements by user in year
const listWhereSumYear = (req, res) => {
    const { year, idUser, type } = req.params;

    service 
        .listWhereSumYear({ year, idUser, type })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Create a new element
const create = (req, res) => {
    service
        .create(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Update an element
const update = (req, res) => {
    service
        .update(req.params, req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Delete element if you are admin of the users Table
const deleteAdmin = (req, res) => {
    service
        .deleteAdmin(req.params)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Delete element
const deleteWhere = (req, res) => {
    service
        .deleteWhere(req.params)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//routes
router.get('/', listAll);
router.get('/:idMovement', listWhere);
router.get('/user/:idUser', listWhere);
router.get('/typeNuser/:type/:idUser', listWhere);

router.get('/sum/:year/:month/:idUser/:type', listWhereSum);
router.get('/sumday/:year/:month/:idUser/:type', listWhereSumDay);
router.get('/summonth/:year/:idUser/:type', listWhereSumMonth);
router.get('/sumyear/:year/:idUser/:type', listWhereSumYear);

router.post('/new/:type', create);

router.put('/update/:idMovement', update);

router.delete('/deleteAdmin/:idMovement', deleteAdmin);
router.delete('/delete/:idMovement', deleteWhere);


//Export route
module.exports = router;