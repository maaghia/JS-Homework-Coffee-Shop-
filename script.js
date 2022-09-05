class Account{
    id 
    userName
    name 
    address
    billingInfo = {
        creditCardNumber : 00000000,
        expiryDate : 31/12/2022,
    }
    coffeeCoins 

    constructor(id, userName, name, address, billingInfo, coffeeCoins=0){
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.address = address;
        this.billingInfo = billingInfo;
        this.coffeeCoins = coffeeCoins;
    }

    addCoins(coins, account){
        //used to add coins to the account
        account.coffeeCoins += coins;
    }
    retractCoins(coins, account){
        //used to buy coffee
        account.coffeeCoins -= coins;
    }
}

class premiumAccount extends Account{
    giftCoins(giver, receiver, amount){
        //used to give coins to other premium accounts
        //use promises
        //make sure to track the gifts in the Premium account.
    }
}

class coffeeShop{
    buyCoins(amount, account){
        //buying coins in a currency
    }
    async orderCoffee(coffee){
        //return coffeeType
        //add coin bonus based on the account type
    }
}
const billingMaria = {
    creditCardNumber : 00000001,
    expiryDate : 31/12/2022,
};
let myAccount = new Account(11, maaghia, Maria, corso, billingMaria, 100);
console.log(myAccount.coffeeCoins)
myAccount.addCoins(20, myAccount)
console.log(myAccount.coffeeCoins)