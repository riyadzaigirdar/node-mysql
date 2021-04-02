## login to mysql

    sudo mysql -u root -p

## list databases

    show databases;

### result

    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    | taskdb             |
    +--------------------+
    5 rows in set (0.02 sec)

## select a single database to work with;

    use taskdb;

### result

    Reading table information for completion of table and column names
    You can turn off this feature to get a quicker startup with -A  

## show tables

    show tables;

### result

    +------------------+
    | Tables_in_taskdb |
    +------------------+
    | tasks            |
    +------------------+
    1 row in set (0.00 sec)

## list all rows in a table

    select * from tasks;

### result

    +----+---------------+--------+---------------------+
    | id | task          | status | created_at          |
    +----+---------------+--------+---------------------+
    |  1 | Find bugs     |      1 | 2016-04-10 23:50:40 |
    |  2 | Review code   |      1 | 2016-04-10 23:50:40 |
    |  3 | Fix bugs      |      1 | 2016-04-10 23:50:40 |
    |  4 | Refactor Code |      1 | 2016-04-10 23:50:40 |
    |  5 | Push to prod  |      1 | 2016-04-10 23:50:50 |
    +----+---------------+--------+---------------------+
    5 rows in set (0.00 sec)

## updata a row in a table called task

    update tasks set status=0 where id=3;

### result

    Query OK, 1 row affected (0.01 sec)
    Rows matched: 1  Changed: 1  Warnings: 0