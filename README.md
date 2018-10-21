# mobilegrub-location-api

Find food trucks near you!

## Dependencies

- node.js 8
- PostgreSQL 9.6
- PostGIS 2.x

## Setup

    $ cp .env.dist .env
    $ yarn install
    $ yarn migrate

## Loading data from San Francisco

The food truck open dataset from the city of San Franscisco is
[located here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data).

Once you export the dataset to JSON, you can load it into the application:

    $ yarn load-sf-data --file=dataset.json

## Run

    $ yarn start

## Docker

You can also use Docker to setup.

    $ docker-compose up

## Documentation

* OpenAPI 3 documentation can be found at `docs/api.yaml`.
* Architectural decisions are kept at `docs/adr/`.
