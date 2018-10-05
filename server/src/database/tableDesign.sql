create table Users(
     userId int PRIMARY KEY AUTO_INCREMENT,
     userName varchar(100),
     email varchar(200),
     phone varchar(20),
     password varchar(50),
     gender char(1),
     created_at TIMESTAMP DEFAULT NOW()
     );
create table Groups(
	groupId int PRIMARY KEY AUTO_INCREMENT,
	groupName varchar(100),
	email varchar(200),
    phone varchar(20),
    password varchar(50),
    created_at TIMESTAMP DEFAULT NOW()
);

create table Events(
	eventId int PRIMARY KEY AUTO_INCREMENT,
	eventTitle varchar(100),
	eventDescription varchar(255),
	holderEmail varchar(200),
	holderPhone varchar(200),
	created_at TIMESTAMP DEFAULT NOW()
);

create table GroupUsers(
	groupId int,
	userId int
);

create table EventUsers(
	eventId int,
	userId int,
);

create table EventGroups(
	eventId int,
	groupId int,
);

create table Roles(
	roleId int INDENTITY,
	roleName varchar(200)
);

create table Permission(
	permissionId int INDENTITY,
	permissionName varchar(200)
);

create table UserRoles(
	userId int NOT NULL,
	roleId int NOT NULL,
	CONSTRAINT PK_UserRoles PRIMARY KEY CLUSTERED(
			userId ASC,
			roleId ASC
		)WITH (IGNORE_DUP_KEY = OFF) ON PRIMARY
)ON PRIMARY;

create table RolePermissions(
	roleId int NOT NULL,
	permissionId int NOT NULL,
	CONSTRAINT PK_RolePermissions PRIMARY KEY CLUSTERED(
		roleId ASC,
		userId ASC
		)WITH (IGNORE_DUP_KEY = OFF) ON PRIMARY
)ON PRIMARY;