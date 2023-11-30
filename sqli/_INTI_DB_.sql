DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS  roles;

CREATE TABLE roles
(
    id   INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE users
(
    id        INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname  TEXT NOT NULL,
    email     TEXT NOT NULL UNIQUE,
    password  TEXT NOT NULL,
    role_id   INTEGER,

    FOREIGN KEY (role_id) REFERENCES roles (id)
);

INSERT INTO roles(id, name)
VALUES (1, 'ROLE_ADMIN'),
       (2, 'ROLE_DEVELOPER');
