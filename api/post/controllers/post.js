const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async findOne(ctx){
        const entity = await strapi.services.post.findOne({id:ctx.params.id});

        const sanitized = sanitizeEntity(entity,{model:strapi.models.post});

        const newView = sanitized.views + 1;
        strapi.query('post').update({id:sanitized.id},{
            views:newView
        })

        return sanitized;
    },
    find: async ctx =>{
        let posts =[]
        posts = await strapi.services.post.find(this.params);
        if(ctx.query.limit){
            console.log("executed");
           posts= posts.slice(0,ctx.query.limit)
        }
        ctx.send(posts)
      }
};
