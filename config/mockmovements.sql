<<<<<<< HEAD
-- movements = "In", "Out"
-- idUser = 4404383, 2, 3

INSERT INTO movements(idUser, type, description, dateMovement, units, value) 
    VALUES (4404383,"In","Venta de Coleccion de Dinosauros","2023-04-04",1,2500000),
        (4404383,"Out","Adquisición de Coleccion de Dinos","2023-04-04",1,2000000);


--type = 'Question', 'Bug', 'Other'
--state = 'Pending', 'Approved', 'Resolved', 'Rejected','Closed'

INSERT INTO qatable(idUser, details, type) 
    VALUES (2,'Cuando van a implementar el IVA?','Question'),
    (3,'Los movimientos no se están registrando correctamente', 'Bug'),
=======
-- movements = "In", "Out"
-- idUser = 4404383, 2, 3

INSERT INTO movements(idUser, type, description, dateMovement, units, value) 
    VALUES (4404383,"In","Venta de Coleccion de Dinosauros","2023-04-04",1,2500000),
        (4404383,"Out","Adquisición de Coleccion de Dinos","2023-04-04",1,2000000);


--type = 'Question', 'Bug', 'Other'
--state = 'Pending', 'Approved', 'Resolved', 'Rejected','Closed'

INSERT INTO qatable(idUser, details, type) 
    VALUES (2,'Cuando van a implementar el IVA?','Question'),
    (3,'Los movimientos no se están registrando correctamente', 'Bug'),
>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
    (4404383,'Me encanta la app, son los mejores', 'Other');