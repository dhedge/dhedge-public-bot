# dHEDGE Public Bot

Trading bot for automated trading on the dHedge platform.

## Installation

Clone this repo and copy one of the `.env.Example` files into `.env` and prefill the variables like mnemonic seed or private key for the account, pool address and Web3 provider details.

In the functions folder install the dependencies with `npm i`

Create a [Google Firebase](https://firebase.google.com) project. Make sure to select the Blaze (Pay as you go) plan.

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

#### Setting up Stop Loss alerts in Tradinview

Follow these [instructions](https://www.tradingview.com/support/solutions/43000595315-how-to-set-up-alerts/) to set up alerts in Tradingview

Use alert action [Werbhook](https://www.tradingview.com/support/solutions/43000529348-about-webhooks/) and copy the executeTrade endpoint from above.

#### Example set up for a sell order of 0.001 ETH when ETH price goes below $2350
