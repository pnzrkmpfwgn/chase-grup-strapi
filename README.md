# Strapi application

A quick description of your strapi application


# Quick note 00
In this api I've fetched certain coin's data by using their ids. If you want to get all of the data from your strapi app and maybe create an entry inside your data base or send to your client through your strapi server you have to modify api/coin/controllers/Coin.js accordingly.

# Quick note 01
Coin api is going to internally process incoming coinmarketcap api data (from 2 sources to be exact) to reduce 2 object into one array. However to use this code properly you have to create a .env on the root and have a coinmarketcap api key then you have to assign you api key to API_KEY. if you want to use a different name you can assign your api key to different name inside .env then change the code inside api/coin/controllers/Coin.js accordingly as well.
=======


