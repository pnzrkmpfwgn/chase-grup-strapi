const { default: axios } = require("axios");

module.exports = {
  index: async (ctx) => {
    let newArray = [];
    await axios
      .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info", {
        method: "GET",
        params: { id: "1,52,74,825,1027,2010,5994,1839" },
        headers: {
          "X-CMC_PRO_API_KEY": "d404905a-22a4-4fc5-9803-234a425c50f4",
        },
      })
      .then((res) => res.data.data)
      .then((data) => {
         
          newArray.push(
              {id:data["1"].id,logo:data["1"].logo},
              {id:data["52"].id,logo:data["52"].logo},
              {id:data["74"].id,logo:data["74"].logo},
              {id:data["825"].id,logo:data["825"].logo},
              {id:data["1027"].id,logo:data["1027"].logo},
              {id:data["2010"].id,logo:data["2010"].logo},
              {id:data["5994"].id,logo:data["5994"].logo},
              {id:data["1839"].id,logo:data["1839"].logo}
              )
        console.log(newArray)
      });
      ctx.send(newArray)
  },
};
