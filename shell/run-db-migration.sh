#!/bin/sh

echo "running database migrations"
node_modules/db-migrate/bin/db-migrate up -e $NODE_ENV
