import {MidwayConfig} from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1710144730161_1524',
  cors: {
    origin: 'http://127.0.0.1:3000',
    credentials: true,
  },
  koa: {
    port: 8092,
  },
} as MidwayConfig;
