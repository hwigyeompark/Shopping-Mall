CREATE TABLE member(
    idx int AUTO_INCREMENT PRIMARY KEY,
    id varchar(50),
    password varchar(50),
    name varchar(50),
    homeNumber varchar(50),
    phone varchar(50),
    postCode varchar(50),
    address varchar(100),
    email varchar(50),
);

CREATE TABLE product(
    pid int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    content varchar(50),
    price int
);

