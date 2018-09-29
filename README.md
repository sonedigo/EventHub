# EventHub
Raise your brilliant event for your life.

#mySQL guider:
please follow https://dev.mysql.com/doc/refman/8.0/en/adding-users.html to set your local mySQL server user and password, please use environment variable to login mySQL serve

#Issue solutions
1.MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client solution:

Execute the following query in MYSQL Workbench

ALTER USER '<username>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<userpassword>'

Then, run 

flush privileges;

For detail about this issue, please refer https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
