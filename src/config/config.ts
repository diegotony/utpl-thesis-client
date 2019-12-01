export default {
    MONGO_HOST:process.env.MONGO_HOST || 'localhost',
    MONGO_PORT:process.env.MONGO_PORT || '27017',
    MONGO_DB:process.env.MONGO_DB || 'client',
    // REDIS_URI: process.env.REDIS_URI || 'redis://localhost:6379',
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    PORT: process.env.PORT || '3011',
};

