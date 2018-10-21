# 6. Apply 12 Factor

Date: 2018-10-20

## Status

Accepted

## Context

The platform will be deployed on automated immutable infrastructure.

## Decision

The API must comply with the [12 Factor](https://www.12factor.net/) manifesto.

## Consequences

Easier to maintain the application on containers and immutable environments,
less fiddling with configuration transformation, session stickiness, etc.
