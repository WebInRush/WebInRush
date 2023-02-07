import { Redis } from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);
redis.on("error", (err) => console.log("Redis error", err));
redis.on("reconnecting", (msg) => console.log("Redis reconnecting...", msg));
redis.on("close", () => console.log("Redis closed..."));
redis.on("connect", () => console.log("Redis connected..."));
const reconnect = async () => {
  while (true) {
    try {
      console.log("going to block");
      const value = await redis.brpoplpush("a", "b", 4);
      console.log("unblocked", value);
    } catch (err) {
      console.error("ERROR", err);
    }
  }
};
reconnect();

export default redis;
