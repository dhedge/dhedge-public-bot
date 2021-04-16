import { Factory } from "dhedge-sdk";

export const trade = async (
  fromCoin: string,
  toCoin: string,
  amountOfFromCoin: string
) => {
  //initialize dhedge pool factory
  const factory = Factory.initialize();
  //load pool
  const pool = await factory.loadPool(process.env.POOL_ADDRESS);

  // Sets amount to sell & converts to string
  const amountToSell = (parseFloat(amountOfFromCoin) * 1e18).toFixed(0);

  await pool.exchange(fromCoin, amountToSell, toCoin);
};
