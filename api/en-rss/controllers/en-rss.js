const Feed = require('rss-to-json');

module.exports = {
  index: async (ctx) => {
    const rss = await Feed.load('https://www.investing.com/rss/news_301.rss');
   
    ctx.send(JSON.stringify(rss, null ,3));
  },
};
