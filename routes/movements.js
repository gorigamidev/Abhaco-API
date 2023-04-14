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
/**
 * @swagger
 * /api/movements/:
 *   get:
 *     summary: List of all movements
 *     description: Get all movements in the database
 *     responses:
 *       200:
 *         description: An object of all movements
 */
router.get('/', listAll);

/**
 * @swagger
 * /api/movements/{idMovement}:
 *   get:
 *     summary: List of a movement by id
 *     description: Get a single movement in the database
 *     responses:
 *       200:
 *         description: An object of a movement by id
 */
router.get('/:idMovement', listWhere);

/**
 * @swagger
 * /api/movements/user/{idUser}:
 *   get:
 *     summary: List of all movements by user
 *     description: Get all movements in the database by user
 *     responses:
 *       200:
 *         description: An object of all movements by user
 */
router.get('/user/:idUser', listWhere);

/**
 * @swagger
 * /api/movements/{type}/{idUser}:
 *   get:
 *     summary: List of all movements by type and user
 *     description: Get all movements in the database by type and user
 *     responses:
 *       200:
 *         description: An object of all movements by type and user
 */
router.get('/typeNuser/:type/:idUser', listWhere);

/**
 * @swagger
 * /api/movements/sum/{year}/{month}/{idUser}/{type}:
 *   get:
 *     summary: Sum of all movements in a year-month by user and type
 *     description: Get a sum of all movements in the database in a year-month by user and type
 *     responses:
 *       200:
 *         description: An object of sum of all movements in a year-month by user and type
 */
router.get('/sum/:year/:month/:idUser/:type', listWhereSum);

/**
 * @swagger
 * /api/movements/listday/{year}/{month}/{idUser}/{type}:
 *   get:
 *     summary: List of all movements in a year-month by user and type
 *     description: Get a list of all movements in the database in a year-month by user and type
 *     responses:
 *       200:
 *         description: An object of all movements in a year-month by user and type
 */
router.get('/listday/:year/:month/:idUser/:type', listWhereSumDay);

/**
 * @swagger
 * /api/movements/listmonth/{year}/{idUser}/{type}:
 *   get:
 *     summary: List of all movements in a year by user and type
 *     description: Get a list of all movements in the database in a year by user and type
 *     responses:
 *       200:
 *         description: An object of all movements in a year by user and type
 */
router.get('/listmonth/:year/:idUser/:type', listWhereSumMonth);

/**
 * @swagger
 * /api/movements/sumyear/{year}/{idUser}/{type}:
 *   get:
 *     summary: Sum of all movements in a year by user and type
 *     description: Get a sum of all movements in the database in a year by user and type
 *     responses:
 *       200:
 *         description: An object of sum of all movements in a year by user and type
 */
router.get('/sumyear/:year/:idUser/:type', listWhereSumYear);

/**
 * @swagger
 * /api/movements/{new}:
 *   post:
 *     summary: Create a new movement
 *     description: Create a new movement in the database
 *     responses:
 *        200:
 *          description: Create an movement
 */
router.post('/new/:type', create);

/**
 * @swagger
 * /api/movements/update/{idMovement}:
 *   put:
 *     summary: Update a movement by id
 *     description: Update a movement by id in the database
 *     responses:
 *       200:
 *         description: Update a movement by id
 */
router.put('/update/:idMovement', update);

/**
 * @swagger
 * /api/movements/deleteAdmin/{idMovement}:
 *   delete:
 *     summary: Delete a movement by id if you are admin of the users Table
 *     description: Delete a movement by id in the database if you are admin of the users Table
 *     responses:
 *       200:
 *       description: Delete a movement by id if you are admin of the users Table
 */
router.delete('/deleteAdmin/:idMovement', deleteAdmin);

/**
 * @swagger
 * /api/movements/delete/{idMovement}:
 *   delete:
 *     summary: Delete a movement by id
 *     description: Delete a movement by id in the database
 *     responses:
 *       200:
 *       description: Delete a movement by id
 */
router.delete('/delete/:idMovement', deleteWhere);


//Export route
module.exports = router;