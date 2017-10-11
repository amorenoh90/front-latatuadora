import { Client } from './client';

export class Artist extends Client {

  constructor() {
    super()
    this.endpoint = 'artist';
  }

  artist(id) {
    const url = this.URL(this.endpoint, `${id}`);
    return this.client
      .fetch(`${url}`, {
        method: this.methods.get
      })
      .then(response => response.json())
      .then(artist => {
        return artist;
      })
      .catch(error => {
        return error;
      });
  }

  find(params) {
    const url = this.URL(this.endpoint, params);
    return this.client
      .fetch(`${url}`, {
        method: this.methods.get
      })
      .then(response => response.json())
      .then(artist => {
        return artist;
      })
      .catch(error => {
        return error;
      });
  }
  
  add(artist) {
    let that = this;
    return new Promise (function(accept, reject) {
      return that.simpleNativePetition('artist', 'POST', artist, function(data) {
        return data;
      })
        .then(data => accept(this.data))
        .catch(error => reject(error));
    });
  }

}
