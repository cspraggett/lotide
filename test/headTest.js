const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([0, 1]), 0);
assertEqual(head([0, 1]), 1);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "World"]), "Hello");
