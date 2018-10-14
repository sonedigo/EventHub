create table Users(
     userId int PRIMARY KEY,
     userName varchar(100),
     email varchar(200),
     phone varchar(20),
     password varchar(255),
     hashsalt varchar(255),
     gender char(1),
     created_at TIMESTAMP DEFAULT NOW()
     );

create table userGroups(
	groupId int PRIMARY KEY,
	groupName varchar(100),
	email varchar(200),
    phone varchar(20),
    password varchar(255),
    created_at TIMESTAMP DEFAULT NOW()
);

create table Events(
	eventId int PRIMARY KEY,
	eventTitle varchar(100),
	eventDescription varchar(255),
	location varchar(255),
	startsDate varchar(50),
	endsDate varchar(50),
	OrganizerName varchar(50),
	OrganizerDescription varchar(255),
	OrganizerEmail varchar(200),
	OrganizerPhone varchar(200),
	created_at TIMESTAMP DEFAULT NOW()
);

create table GroupUsersRelation(
	relationId int PRIMARY KEY,
	groupId int,
	userId int
);

create table EventUsersRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	eventId int,
	userId int,
);

create table EventGroupsRelation(
	relationId int PRIMARY KEY AUTO_INCREMENT,
	eventId int,
	groupId int,
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