module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  api_key:env.int('X-CMC_PRO_API_KEY','d404905a-22a4-4fc5-9803-234a425c50f4'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0644d304dceb36833c1688a93118d74e'),
    },
  },
});
