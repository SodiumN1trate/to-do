# Requirements
- Docker (sail)
- PHP (8.2 - 8.4)
- Composer

# Setup
1. Install packages
```shell
composer i --ignore-platform-reqs
```

2. Create a .env file
```shell
cp .env.example .env
```

3. Create the database.sqlite file in the database folder
```shell
touch database/database.sqlite
```
4. Run API using sail
```shell
./vendor/bin/sail up -d
```

5. Run migrations
```shell
./vendor/bin/sail artisan migrate
```
