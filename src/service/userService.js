angular.module('asch').service('userService', function () {
    this.setData = function (secret, address, publicKey, balance, secondPublicKey) {
        this.secret = secret;
        this.address = address;
        this.publicKey = publicKey;
        this.balance = balance;
        this.secondPublicKey = secondPublicKey;

    }
    this.update = function (account) {
        this.balance = account.balance;
        this.secondPublicKey = account.secondPublicKey;
    }
    this.saveTab = function (tab) {
        this.tab = tab;
    };
    this.isStatus = function (tab) {
        this.issuerStatus = tab;
    };
});
