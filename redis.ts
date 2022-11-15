import Redis from "ioredis";
/*
 : Managing error connection
  tls: {
    rejectUnauthorized: false
  }
*/
const redis = new Redis(process.env.REDIS_URL!);

export default redis;