import { buffer } from './modules/buffer'
import { Observable } from 'rxjs';
// import { Stream } from 'stream';

export const StreamController = {
  buffer: buffer,
  newStream: (objectId) => {
    console.log('ObjectId', objectId)
    // let stream = new Stream()
    return new Observable()
  }
}

export default StreamController