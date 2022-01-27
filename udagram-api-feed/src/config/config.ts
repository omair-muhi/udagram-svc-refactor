console.log(`process.env.POSTGRES_USERNAME=${process.env.POSTGRES_USERNAME}`);
console.log(`process.env.POSTGRES_PASSWORD=${process.env.POSTGRES_PASSWORD}`);
console.log(`process.env.POSTGRES_DB=${process.env.POSTGRES_DB}`);
console.log(`process.env.POSTGRES_HOST=${process.env.POSTGRES_HOST}`);
export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
