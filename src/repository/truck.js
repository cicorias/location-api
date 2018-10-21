const { Pool } = require("pg");

module.exports = class TruckRepository {
  constructor() {
    this.pool = new Pool();
  }

  findByLocation(latitude, longitude) {
    const query = {
      text: `
      SELECT
        id,
        title,
        description,
        ST_Y(position) AS latitude,
        ST_X(position) AS longitude
      FROM
        food_truck
      WHERE
        status = 'APPROVED'
      ORDER BY ST_Distance(
        position,
        ST_SetSrid(ST_MakePoint($1, $2), 4326)
      )
      LIMIT 10;`,
      values: [longitude, latitude]
    };

    return this.pool.query(query);
  }

  findAll() {
    return this.pool.query(`
    SELECT
      id,
      title,
      description,
      ST_Y(position) AS latitude,
      ST_X(position) AS longitude
    FROM
      food_truck
    `);
  }

  save(truck) {
    const query = {
      text: `
      INSERT INTO food_truck
        (id, title, description, status, position)
      VALUES
        ($1, $2, $3, $4, ST_SetSRID(ST_MakePoint($5, $6), 4326))
      ON CONFLICT (id) DO UPDATE
      SET
        title = excluded.title,
        description = excluded.description,
        status = excluded.status,
        position = excluded.position
      `,
      values: [
        truck.id,
        truck.title,
        truck.description,
        truck.status,
        truck.longitude,
        truck.latitude
      ]
    };

    return this.pool.query(query);
  }
};
