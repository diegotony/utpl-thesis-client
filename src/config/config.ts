export default {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/client',
    REDIS_URI: process.env.REDIS_URI || 'redis://localhost:6379',
    PORT: process.env.PORT || '3011',
};
