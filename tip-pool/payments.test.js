describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

      
    it('should submit payment on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should create payment on createCurPayment()', function () {
        let testPayment = createCurPayment();
        expect(testPayment.billAmt).toEqual('100');
        expect(testPayment.tipAmt).toEqual('20');
        expect(testPayment.tipPercent).toEqual(20);
    });

    it('should add a row to the payment table on appendPaymentTable()', function () {
        let testPayment = createCurPayment();
        appendPaymentTable(testPayment);

        let testTds = document.querySelectorAll('#paymentTable td');
        expect(testTds[0].innerText).toEqual('$100');
        expect(testTds[1].innerText).toEqual('$20');
        expect(testTds[2].innerText).toEqual('20%');
    });

    it('update summary table on updateSummary()', function () {
        submitPaymentInfo();

        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$20');
        expect(summaryTds[2].innerText).toEqual('20%');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        document.querySelector('#paymentTable tbody').innerHTML = '';
        document.querySelector('#serverTable tbody').innerHTML = '';
        document.querySelectorAll('#summaryTable tbody tr td')[0].innerHTML = '';
        document.querySelectorAll('#summaryTable tbody tr td')[1].innerHTML = '';
        document.querySelectorAll('#summaryTable tbody tr td')[2].innerHTML = '';

    });
  });

