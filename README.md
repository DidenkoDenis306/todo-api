docker-compose up --build

*open new terminal*
1)docker exec -it todo-api-postgres-1  psql -U postgres -d todolist
2)insert code from init.sql
3) \dt
4) exit

To stop
docker-compose down
or
ctrl + C





