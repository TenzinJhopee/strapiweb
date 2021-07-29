module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:  env('postgres://xnykixbqquowpw:259b216f7280a55e5ed4ad7e9f349d29da415971654a223d5818c769bdf6800e@ec2-44-194-112-166.compute-1.amazonaws.com:5432/d3c86vbombj9l9'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2248cf60f5ff72658bc588ab386445b5'),
    },
  },
});
