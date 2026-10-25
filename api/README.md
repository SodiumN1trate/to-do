# Requirements
- Docker (Sail)
- PHP (8.2 - 8.4)
- Composer

# Setup

1. Install packages
```shell
composer i --ignore-platform-reqs
```

2. Create a `.env` file
```shell
cp .env.example .env
```

3. Configure PostgreSQL in `.env`
```dotenv
DB_CONNECTION=pgsql
DB_HOST=pgsql
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password
```

4. Run API using Sail
```shell
./vendor/bin/sail up -d
```

5. Generate application key
```shell
./vendor/bin/sail artisan key:generate
```

6. Run migrations
```shell
./vendor/bin/sail artisan migrate
```