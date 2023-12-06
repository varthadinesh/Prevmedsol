
const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.REACT_APP_DB_DATABASE}`;
const useDatabaseQuery = `USE ${process.env.REACT_APP_DB_DATABASE}`;

const createDoctorsTableQuery = `
CREATE TABLE IF NOT EXISTS doctors (
    firstname VARCHAR(60) NOT NULL,
    middlename VARCHAR(60) NULL,
    lastname VARCHAR(60) NOT NULL,
    gender VARCHAR(45) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    dob DATE NULL,
    bloodgroup VARCHAR(45) NULL,
    hospital VARCHAR(60) NOT NULL,
    specialization VARCHAR(60) NOT NULL,
    address VARCHAR(60) NOT NULL,
    country VARCHAR(45) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    street1 VARCHAR(45) NULL,
    street2 VARCHAR(45) NULL,
    zipcode MEDIUMINT(6) NULL,
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createPatientsTableQuery = `
CREATE TABLE IF NOT EXISTS patients (
    firstname VARCHAR(60) NOT NULL,
    middlename VARCHAR(60) NULL,
    lastname VARCHAR(60) NOT NULL,
    gender VARCHAR(45) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    dob DATE NULL,
    bloodgroup VARCHAR(45) NULL,
    address VARCHAR(60) NULL,
    country VARCHAR(45) NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    status VARCHAR(45) NULL,
    street1 VARCHAR(45) NULL,
    street2 VARCHAR(45) NULL,
    zipcode MEDIUMINT(6) NULL,
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createLabagentsTableQuery = `
CREATE TABLE IF NOT EXISTS labagents (
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    gender VARCHAR(45) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    labname VARCHAR(60) NOT NULL,
    address VARCHAR(60) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createCentersTableQuery = `
CREATE TABLE IF NOT EXISTS centers (
    centername VARCHAR(60) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fromtiming VARCHAR(45) NOT NULL,
    totiming VARCHAR(45) NOT NULL,
    address VARCHAR(60) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createLabsTableQuery = `
CREATE TABLE IF NOT EXISTS labs (
    labname VARCHAR(60) NOT NULL,
    address VARCHAR(60) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    fromtiming VARCHAR(45) NOT NULL,
    totiming VARCHAR(45) NOT NULL
    );
`;

const createAppointmentsTableQuery = `
CREATE TABLE IF NOT EXISTS appointments (
    patient VARCHAR(60) NOT NULL,
    appointment VARCHAR(45) NOT NULL,
    center VARCHAR(45) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(45) NOT NULL
    );
`;

const createPackagesTableQuery = `
CREATE TABLE IF NOT EXISTS packages (
    packagename VARCHAR(60) NOT NULL,
    packagedescription TINYTEXT NOT NULL,
    amount SMALLINT(5) NOT NULL,
    service1 VARCHAR(60) NULL,
    service2 VARCHAR(60) NULL,
    service3 VARCHAR(60) NULL,
    service4 VARCHAR(60) NULL,
    service5 VARCHAR(60) NULL,
    service6 VARCHAR(60) NULL,
    service7 VARCHAR(60) NULL,
    service8 VARCHAR(60) NULL,
    service9 VARCHAR(60) NULL,
    service10 VARCHAR(60) NULL,
    UNIQUE INDEX packagename_UNIQUE (packagename ASC));
`;

const createMailboxTableQuery = `
CREATE TABLE IF NOT EXISTS sentmailbox (
    fromemail VARCHAR(60) NOT NULL, 
    toemail VARCHAR(45) NOT NULL,
    message LONGTEXT NOT NULL,
    subject VARCHAR(60) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL
    );
`;

module.exports = {
  createDatabaseQuery,
  useDatabaseQuery,
  createDoctorsTableQuery,
  createPatientsTableQuery,
  createLabagentsTableQuery,
  createCentersTableQuery,
  createLabsTableQuery,
  createAppointmentsTableQuery,
  createPackagesTableQuery,
  createMailboxTableQuery
};
