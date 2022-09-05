# JS-Homework-Coffee-Shop
Homework
Coffee Shop
Let's go back to our Coffee shop example from Promises lesson and try to apply everything we have learned in this lesson to model it:

1 - Create an Account class with the fulling fields: id, userName, name, address, billing info (creditCardNumber, expiryDate), coffeCoins(a number)

It has the method addCoins which can be used to add a number of coins to the account: coins are used to purchase coffee, they can be added as a random bonus upon each purchase the bonus depends on the type of the Account.
A method retractCoins to use to buy coffee.
2 - Create a Premium Account class that inherits from the first one and has an additional method: giftCoins which can be used to give coins to other premium accounts. Use promises in order to achieve such functionality and make sure to track the gifts in the Premium account.

Promises are used to simulate a request and response cycle where one account has to wait for the other to approve or reject his requests.
3 - Create CoffeeShop Class which is used by all accounts to buy coffee:

It should have a method for buying coins, in a certain currency like USD, EUR, …
It should have a menu of coffees with their corresponding prices.
It should have an asynchronous orderCoffee method that returns the requested coffee type after a random period of time. Upon each fulfilled order it should add a random coin bonus based on the account type.
Use the async/await syntax to interact with the coffee shop.
It should be possible to see all the orders, their status, and the corresponding requester.
4 - Separating your project into different modules that export and import the needed functionality.

5 - Make sure to use the “let” and “const” syntax.
