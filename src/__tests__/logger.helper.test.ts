import "../logger.helper";

test("log",() => {
  expect(console.log("log")).toBe(undefined);
});

test("trace",() => {
  expect(console.trace("trace")).toBe(undefined);
});

test("info",() => {
  expect(console.info("info")).toBe(undefined);
});


test("error",() => {
  expect(console.error("error")).toBe(undefined);
});

test("warn",() => {
  expect(console.warn("warn")).toBe(undefined);
});
  
test("debug",() => {
  expect(console.debug("debug")).toBe(undefined);
});
