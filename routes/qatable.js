const express = require('express');
const router = express.Router();
const service = require('../models/qaTableMod'); //listAll, listWhere, create, update, deleteWhere <= methods

//List of all elements of QA table
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

//List of Elements based in IdUSer as param
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


/**
 * @swagger
 * /api/qa:
 *   get:
 *     summary: Get a list of all qa elements
 *     description: Retrieve a list of all elements of QA Table from the database
 *     responses:
 *       200:
 *         description: A list of qa elements
 */
router.get('/', listAll);

/**
 * @swagger
 * /api/qa/user/{idUser}:
 *   get:
 *     summary: Get a list of all qa elements by Id User
 *     description: Retrieve a list of all elements of QA where IdUser match Table from the database
 *     responses:
 *       200:
 *         description: A list of qa elements by IdUser
 */
router.get('/user/:idUser', listWhere);
/**
 * @swagger
 * /api/qa/user/{idQA}:
 *   get:
 *     summary: Get a list of all qa elements by Id QA
 *     description: Retrieve a list of all elements of QA where IdQA match Table from the database
 *     responses:
 *       200:
 *         description: A list of qa elements by IdQA
 */
router.get('/question/:idQA', listWhere);
/**
 * @swagger
 * /api/qa/user/{type}:
 *   get:
 *     summary: Get a list of all qa elements by QA type ('Question', 'Bug', 'Other')
 *     description: Retrieve a list of all elements of QA where QA Type match Table from the database
 *     responses:
 *       200:
 *         description: A list of qa elements by QA Type
 */
router.get('/type/:type', listWhere);
/**
 * @swagger
 * /api/qa/user/{state}:
 *   get:
 *     summary: Get a list of all qa elements by QA state ('Pending', 'Approved', 'Resolved', 'Rejected','Closed')
 *     description: Retrieve a list of all elements of QA where QA State match Table from the database
 *     responses:
 *       200:
 *         description: A list of qa elements by QA State
 */
router.get('/state/:state', listWhere);

/**
 * @swagger
 * /api/qa/new:
 *   post:
 *     summary: Create a New QA Element
 *     description: Create new QA Element in the database
 *     parameters:
 *          - name: idUser
 *            in: body
 *            required: true
 *            description: Id of user who create QA Element
 *            schema:
 *              type: integer
 *          - name: details
 *            in: body
 *            required: true
 *            description: Text details of the QA Element
 *            schema:
 *              type: string
 *          - name: type
 *            in: body
 *            required: true
 *            description: Type of the QA Element = (Question', 'Bug', 'Other')
 *            schema:
 *              type: string
 *     responses:
 *        200:
 *          description: Create an new QA Element
 */
router.post('/new', create);

/**
 * @swagger
 * /api/qa/{idQA}:
 *   put:
 *     summary: Update a QA Element
 *     description: Update a QA Element in the database
 *     responses:
 *       200:
 *         description: Update an QA Element
 */
router.put('/update/:idQA', update);

/**
 * @swagger
 * /api/qa/{idQA}:
 *   delete:
 *     summary: Delete a QA Element
 *     description: Delete a QA Element in the database
 *     responses:
 *       200:
 *         description: Delete an QA Element
 */
router.delete('/delete/:idQA', deleteWhere);

module.exports = router;