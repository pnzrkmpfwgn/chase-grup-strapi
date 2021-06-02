const { default: axios } = require("axios");

module.exports = {
  //GET
  index: async (ctx) => {
    let new_array = [];
    let logoArray = [];
    const coinData = await axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          method: "GET",
          qs: {
            start: "1",
            limit: "100",
            convert: "USD",
          },
          headers: {
            "X-CMC_PRO_API_KEY": process.env.API_KEY,
            Accept: "application/json",
          },
          json: true,
          gzip: true,
        }
      )
      .then((res) => res.data.data)
      .catch((err) => console.error(err.message));
    await axios
      .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info", {
        method: "GET",
        params: { id: "1,2,52,74,825,1027,2010,5994,1839" },
        headers: {
          "X-CMC_PRO_API_KEY": process.env.API_KEY,
        },
      })
      .then((res) => res.data.data)
      .then((data) => {
        Object.values(data).forEach((val) => {
          logoArray.push({
            id: val.id,
            logo: val.logo,
            website: val.urls.website[0],
          });
        });
      });
    for (let i = 0; i < coinData.length; i++) {
      switch (coinData[i].id) {
        case 1:
        case 2:
        case 52:
        case 74:
        case 825:
        case 1027:
        case 2010:
        case 1839:
          new_array.push({
            id: coinData[i].id,
            name: coinData[i].name,
            symbol: coinData[i].symbol,
            price: coinData[i].quote.USD.price.toFixed(2),
            percent_change_24h:
              coinData[i].quote.USD.percent_change_24h.toFixed(2),
          });
          break;
        case 5994:
          new_array.push({
            id: coinData[i].id,
            name: coinData[i].name,
            symbol: coinData[i].symbol,
            price: coinData[i].quote.USD.price.toFixed(5),
            percent_change_24h:
              coinData[i].quote.USD.percent_change_24h.toFixed(2),
          });
          break;
        default:
          break;
      }
    }
    for (let i = 0; i < new_array.length; i++) {
      for (let j = 0; j < logoArray.length; j++) {
        if (logoArray[j].id === new_array[i].id) {
          Object.assign(new_array[i], logoArray[j]);
        }
      }
    }
    ctx.send(new_array);
  },
};
