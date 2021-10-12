// export const config = {
//   'username': process.env.POSTGRES_USERNAME,
//   'password':`${process.env.POSTGRES_PASSWORD}`,
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

/*
  local variables
*/
export const config = {
  'username': 'mohammedismaiel',
  'password': 'mohammedismaiel',
  'database': 'mohammedismaiel',
  'host': "database-1.ctpvdajc29u8.eu-west-2.rds.amazonaws.com",
  'dialect': 'postgres',
  'aws_region': "eu-west-2",
  'aws_profile': "default",
  'aws_media_bucket': "udagram-micro-bucket",
  'url': "http://localhost:8100",
  'jwt': {
    'secret': "my-JWT-secret",
  },
};
