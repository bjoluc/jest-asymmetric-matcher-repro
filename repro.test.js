test("My test case", () => {
  expect([{}]).toMatchSnapshot([expect.anything()]);
});
