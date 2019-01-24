"use strict";
/* eslint-disable camelcase */

var given = require("jest-given").given;
var casing = require("./main");

var wasCamel = {
  objId: 123,
  myName: "Slim Shady"
};
var was_snake = {
  obj_id: 456,
  my_name: "fiddycent"
};

describe("casing", () => {
  given("an object with camelCased keys", () => {
    it("returns the object with snake_cased keys", () => {
      expect(casing.snakeize(wasCamel)).toEqual({
        obj_id: 123,
        my_name: "Slim Shady"
      });
    });
  });

  given("an object with snake_cased keys", () => {
    it("returns the object with camelCased keys", () => {
      expect(casing.camelize(was_snake)).toEqual({
        objId: 456,
        myName: "fiddycent"
      });
    });
  });
});
