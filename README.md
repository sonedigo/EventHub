# EventHub
Raise your brilliant event for your life.

#mySQL guider:

please follow https://dev.mysql.com/doc/refman/8.0/en/adding-users.html to set your local mySQL server user and password, please use environment variable to login mySQL serve

#DataBase Table Design
please refer https://www.jianshu.com/p/f59d372ee201 and http://blog.itpub.net/16436858/viewspace-627049

#Database setting

Basically, You probaly need your own user in control your local mySQL database.
Use below to create your database user:
 CREATE USER '<username>'@'<hostname>' IDENTIFIED BY '<password>';
	GRANT ALL PRIVILEGES ON <database_name>.* TO '<username>'@'<hostname>' WITH GRANT OPTION;

Under EventHub/server/config, you can create your own environment with a .json flie, then add a environment variable with:

export NODE_ENV=<.json file name>

also, you need to set your database password with:

export sqlPassword=<your database password>

I believe all done at this point.

#Issue solutions

1.MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client solution:

Execute the following query in MYSQL Workbench

ALTER USER '<username>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>'

Then, run:

flush privileges;


