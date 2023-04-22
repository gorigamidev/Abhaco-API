<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const service = require('../models/usersMod');

const list = (req, res) => {
    service
        .list()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

const listWhere = (req, res) => {
    service
        .listWhere(req.params)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

const update = (req, res) => {
    service
        .update(req.params, req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

function generateUserId() {
    const randomNum = Math.floor(Math.random() * 9999999) + 1;
    return randomNum;
  }
  
const create = (req, res) => {
    const userObject = req.body;
    userObject.idUser = generateUserId();
    service
      .create(userObject)
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
}

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', list);

/**
 * @swagger
 * /api/users/{idUser}:
 *   get:
 *     summary: Get a user
 *     description: Retrieve a user from the database
 *     responses:
 *       200:
 *         description: An user
 */
router.get('/:idUser', listWhere);

/**
 * @swagger
 * /api/users/new:
 *   post:
 *     summary: Create a user
 *     description: Create a user in the database
 *     responses:
 *        200:
 *          description: Create an user
 */
router.post('/new', create);

/**
 * @swagger
 * /api/users/{idUser}:
 *   put:
 *     summary: Update a user
 *     description: Update a user in the database
 *     responses:
 *       200:
 *         description: Update an user
 */
router.put('/update/:idUser', update);

/**
 * @swagger
 * /api/users/{idUser}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user in the database
 *     responses:
 *       200:
 *       description: Delete an user
 */
router.delete('/delete/:idUser', deleteWhere);

=======
const express = require('express');
const router = express.Router();
const service = require('../models/usersMod');

const list = (req, res) => {
    service
        .list()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

const listWhere = (req, res) => {
    service
        .listWhere(req.params)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

const update = (req, res) => {
    service
        .update(req.params, req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

function generateUserId() {
    const randomNum = Math.floor(Math.random() * 9999999) + 1;
    return randomNum;
  }

const bcrypt = require('bcrypt');
  
const create = (req, res) => {
    const userObject = req.body;
    userObject.idUser = generateUserId();

    // Hash the password before saving it to the database
    const saltRounds = 10;
    const passwordHash = bcrypt.hashSync(userObject.password, saltRounds);
    userObject.password = passwordHash;

    service
      .create(userObject)
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
}

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', list);

/**
 * @swagger
 * /api/users/{idUser}:
 *   get:
 *     summary: Get a user
 *     description: Retrieve a user from the database
 *     responses:
 *       200:
 *         description: An user
 */
router.get('/:idUser', listWhere);

/**
 * @swagger
 * /api/users/new:
 *   post:
 *     summary: Create a user
 *     description: Create a user in the database
 *     responses:
 *        200:
 *          description: Create an user
 */
router.post('/new', create);

/**
 * @swagger
 * /api/users/{idUser}:
 *   put:
 *     summary: Update a user
 *     description: Update a user in the database
 *     responses:
 *       200:
 *         description: Update an user
 */
router.put('/update/:idUser', update);

/**
 * @swagger
 * /api/users/{idUser}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user in the database
 *     responses:
 *       200:
 *       description: Delete an user
 */
router.delete('/delete/:idUser', deleteWhere);

>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
module.exports = router;