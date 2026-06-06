function Account(accNo,holder,balance){
    this.accNo=accNo;
    this.holder=holder;
    this.balance=balance;

    this.withdrow=function(amount){
        if(this.balance>amount){
            this.balance-=amount;
            console.log(`${amount} devited from your account`);
        }else{
            console.log("In sufficient balance");
        }
    }

    this.diposite=function(amount){
        this.balance+=amount;
        console.log(`${amount} credited to your account`);
        console.log(`Total balance is ${this.balance}`);
    }

    this.checkBalance=function(){
        console.log(`Available balance is ${this.balance}`);
    }
}

let a1=new Account("SBI0012","John",10000);
let a2=new Account("HDFC7890","leo",5000);
let a3=new Account("AXIS0980","Pablo",3000);
a1.checkBalance();
a2.withdrow(2000);
a3.diposite(1000);