# dHEDGE Public Bot

Trading bot for automated trading on the dHedge platform.

## Installation

Clone this repo and copy one of the `.env.Example` files into `.env` and prefill the variables like mnemonic seed or private key for the account, pool address and Web3 provider details.

In the functions folder install the dependencies with `npm i`

Create a [Google Firebase](https://firebase.google.com) project

Install the [Firebase CLI](https://firebase.google.com/docs/cli)

Run `firebase deploy`

## Endpoints

### /executeTrade

Url: https://your-region-your-project.cloudfunctions.net/executeTrade
You can see the exact url in your [firebase console](https://console.firebase.google.com/) under Functions

Parameters:

- from: Asset to sell (e.g. sUSD)
- to: Asset to buy (e.g. sETH)
- amount: Amount of asset to sell (e.g. 100.123)

Example:
This is the endpoint to buy ETH worth of 100.99 USD:

- /executeTrade?from=sUSD&to=sETH&amount=100.99

## Use Cases

### Stop Loss Order
