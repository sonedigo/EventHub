create table Users(
     userId int IDENTITY(1,1) NOT NULL,
     userName varchar(100),
     email varchar(200),
     phone varchar(20),
     password varchar(50),
     sex char(1),
     created_at TIMESTAMP DEFAULT NOW()
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