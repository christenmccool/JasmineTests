
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 1000, years: 10, rate: 0.05}
  expect(calculateMonthlyPayment(values)).toEqual('10.61');

  values = {amount: 1000, years: 10, rate: 1}
  expect(calculateMonthlyPayment(values)).toEqual('83.34');

  values = {amount: 1000, years: 1, rate: 0.05}
  expect(calculateMonthlyPayment(values)).toEqual('85.61');
});


it("should return a result with 2 decimal places", function() {
  values = {amount: 1000, years: 1, rate: 0.1}
  expect(calculateMonthlyPayment(values)).toEqual('87.92');
});


