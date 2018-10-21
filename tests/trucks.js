const chakram = require("chakram");
const expect = chakram.expect;

describe("Truck list", () => {
  it("should return all trucks for a location", () => {
    const endpoint = "http://localhost:8080/trucks/37.792732/-122.391880";

    return chakram.get(endpoint).then(result => {
      expect(result).to.have.status(200);

      const body = result.body;
      expect(body[0].id).to.equal("3c3d6006-a1f7-4d13-990b-77b4c1afe8a5");
      expect(body[0].title).to.equal("Wu Wei LLC dba MoBowl");
    });
  });

  it("should return at least 5 trucks regardless of location", () => {
    const endpoint = "http://localhost:8080/trucks/0/0";

    return chakram.get(endpoint).then(result => {
      expect(result).to.have.status(200);

      const body = result.body;
      expect(body.length).to.be.at.least(5);
    });
  });
});
