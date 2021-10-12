// export const config = {
//   'username': process.env.POSTGRES_USERNAME,
//   'password': process.env.POSTGRES_PASSWORD,
//   'database': process.env.POSTGRES_DB,
//   'host': process.env.POSTGRES_HOST,
//   'dialect': 'postgres',
//   'aws_region': process.env.AWS_REGION,
//   'aws_profile': process.env.AWS_PROFILE,
//   'aws_media_bucket': process.env.AWS_BUCKET,
//   'url': process.env.URL,
//   'jwt': {
//     'secret': process.env.JWT_SECRET,
//   },
// };

export const config = {
  'username': 'jimmy',
  'password': '12345678',
  'database': 'udagram',
  'host': 'database-1.cguaicw36n62.us-east-2.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-2',
  'aws_profile': 'default',
  'aws_media_bucket': 'something-dev',
  'url': 'localhost:8100',
  'jwt': {
    'secret': 'secret',
  },
};
