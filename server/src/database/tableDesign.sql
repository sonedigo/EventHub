create table Users(
     userId int PRIMARY KEY,
     userName varchar(100) NOT NULL,
     email varchar(200) NOT NULL,
     phone varchar(20),
     password varchar(255) NOT NULL,
     hashsalt varchar(255),
     gender char(1),
     created_at TIMESTAMP DEFAULT NOW()
     );

create table userGroups(
	groupId int PRIMARY KEY,
	groupName varchar(100) NOT NULL,
	email varchar(200) NOT NULL,
    phone varchar(20),
    password varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

create table Events(
	eventId int PRIMARY KEY,
	eventTitle varchar(100) NOT NULL,
	eventDescription varchar(255),
	location varchar(255),
	startsDate varchar(50) NOT NULL,
	endsDate varchar(50) NOT NULL,
	OrganizerName varchar(50) NOT NULL,
	OrganizerDescription varchar(255),
	OrganizerEmail varchar(200) NOT NULL,
	OrganizerPhone varchar(200) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
);

create table GroupUsersRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	groupId int NOT NULL,
	userId int NOT NULL,
);

create table EventUsersRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	eventId int NOT NULL,
	userId int NOT NULL
);

create table EventGroupsRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	eventId int NOT NULL,
	groupId int NOT NULL
);

create table UserRolesRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	userId int NOT NULL,
	roleId int NOT NULL
);

create table Roles(
	roleId int PRIMARY KEY AUTO_INCREMENT,
	roleName varchar(200) 
);

create table Permission(
	permissionId int PRIMARY KEY,
	permissionName varchar(200)
);

create table UserRoles(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	userId int NOT NULL,
	roleId int NOT NULL
	);

create table RolePermissionsRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	roleId int NOT NULL,
	permissionId int NOT NULL
);