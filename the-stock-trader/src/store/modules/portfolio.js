const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  BUY_STOCK(stateArg, { stockId, quantity, stockPrice }) {
    const newStateArg = stateArg;
    const record = newStateArg.stocks.find((element) => element.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      newStateArg.stocks.push({
        id: stockId,
        quantity,
      });
    }
    newStateArg.funds -= stockPrice * quantity;
  },
  SELL_STOCK(stateArg, { stockId, quantity, stockPrice }) {
    const newStateArg = stateArg;
    const record = newStateArg.stocks.find((element) => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      newStateArg.stocks.splice(newStateArg.stocks.indexOf(record), 1);
    }
    newStateArg.funds += stockPrice * quantity;
  },
  SET_PORTFOLIO(stateArg, portfolio) {
    const newStateArg = stateArg;
    newStateArg.funds = portfolio.funds;
    newStateArg.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
};

const getters = {
  stockPortfolio(stateArg, gettersArg) {
    const newStateArg = stateArg;
    return newStateArg.stocks.map((stock) => {
      const record = gettersArg.stocks.find((element) => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(stateArg) {
    return stateArg.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
