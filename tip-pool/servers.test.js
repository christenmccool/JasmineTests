describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create a row with server information on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let rowTds = document.querySelectorAll('#serverTable td');
    expect(rowTds[0].innerText).toEqual('Alice');
    expect(rowTds[1].innerText).toEqual('$0.00');
    expect()
  });

  afterEach(function() {
    serverNameInput.value = '';
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
