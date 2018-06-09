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
    mileage int
);

CREATE TABLE product(
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    content varchar(50),
    price int
);

CREATE TABLE cart(
    id int AUTO_INCREMENT PRIMARY KEY,
    mid int,
    pid int,
    FOREIGN KEY(mid) REFERENCES member(id) ON UPDATE CASCADE,
    FOREIGN KEY(pid) REFERENCES product(id) ON UPDATE CASCADE
);

CREATE TABLE category(
    name varchar(30),
    pid int,
    FOREIGN KEY(pid) REFERENCES member(id) ON UPDATE CASCADE
);

CREATE TABLE oneProduct(
    mid int,
    pid int,
    FOREIGN KEY(mid) REFERENCES member(id) ON UPDATE CASCADE,
    FOREIGN KEY(pid) REFERENCES product(id) ON UPDATE CASCADE
);