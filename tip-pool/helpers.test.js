describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should sum billAmt, tipAmt, and tipPercent on sumPaymentTotal()', function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 10;
      submitPaymentInfo();

      expect(sumPaymentTotal('billAmt')).toEqual(200);
      expect(sumPaymentTotal('tipAmt')).toEqual(30);
      expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });

    it('should calculate tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
      expect(calculateTipPercent(100, 10)).toEqual(10);
    });

    it('should add a cell to a table on appendTd()', function () {
      billAmtInput.value = 700;
      let newTr = document.createElement('tr');
      appendTd(newTr, `$${billAmtInput.value}`);

      expect(newTr.firstChild.innerText).toEqual('$700');
    });

    it('should add a delete cell to a row on appendDeleteBtn()', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
  
        expect(newTr.firstChild.innerText).toEqual('X');
      });

    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentId = 0;
      allPayments = {};
      document.querySelector('#paymentTable tbody').innerHTML = '';
      document.querySelector('#serverTable tbody').innerHTML = '';
      document.querySelectorAll('#summaryTable tbody tr td')[0].innerHTML = '';
      document.querySelectorAll('#summaryTable tbody tr td')[1].innerHTML = '';
      document.querySelectorAll('#summaryTable tbody tr td')[2].innerHTML = '';
    });
  });
  

