# 3. Leverage PostGIS to develop MVP

Date: 2018-10-20

## Status

Accepted

## Context

Spatial search algorithms are complex and we need an MVP.

## Decision

Leverage the fact that PostGIS is a robust, open-source and
battle-tested spatial solution.

## Consequences

Less maintenance of in-house solutions, more complex deploy. Scaling a
storage infrastructure was already necessary, so, let's just embrace it.
