function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  },
  // part1
  this.statement = [balance]; //[100, 95, 105] (withdraw 5, deposit 10)
  // part2
  this.setBalance = function(value){
    this.balance = value;
  },
  // part3
  this.updateStatement = function(newbalance) {
    this.statement.push(newbalance);
  },
  //part4
  this.getStatement = function() {
    return this.statement
  },
  //part5
  this.printStatement = function() {
    for(const value of this.statement) {
      console.log(value)
    }
  },
  //part6
  this.deposit = function(transaction) {
    this.updateStatement(this.getBalance() + transaction) //pushes but doesn't change the actual balance
    this.setBalance(this.getBalance() + transaction) //actually changes the balance
  },
  //part7
  this.withdraw = function(transaction) {
    this.updateStatement(this.getBalance() - transaction); //pushes but doesn't change the actual balance
    this.setBalance(this.getBalance() - transaction); //actually changes the balance
  }
}

//real part 2
const bank = new MiniBank(0);

bank.printBalance();

bank.deposit(500);

bank.printBalance();

bank.withdraw(100);

bank.printBalance();

bank.printStatement();