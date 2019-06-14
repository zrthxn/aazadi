/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import { Stream } from 'stream';

import { router } from './router'

export const server = express();

server.use(router)

server.on('error', console.error);