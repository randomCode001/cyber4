DROP USER IF EXISTS excel;
DROP DATABASE IF EXISTS excel_db;

CREATE USER excel WITH PASSWORD 'iloveexcelmec';

    CREATE DATABASE excel_db;

    GRANT ALL PRIVILEGES ON DATABASE excel_db TO excel;

    \c excel_db;
    SET ROLE excel;

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

INSERT INTO users(id, firstname, lastname, email, password, role_id) values(1, 'developer', 'developer', 'developer@excel.org', '1234', 2);

