import { HttpClient, json } from 'aurelia-fetch-client'

export class Client {



  /**
  *@PUBLIC constructor
  *@DESCRIPTION init client
  **/
  constructor() {
    // defining methods
    this.methods = {
      post: 'POST',
      get: 'GET',
      put: 'PUT',
      patch: 'PATCH',
      delete: 'DELETE'
    }

    // Create a new http client to handle and fire request and response
    this.client = new HttpClient();

    // configure client with a endpoint and defaults
    this.client.configure(config => {
      config
      .withBaseUrl('http://35.161.232.194:1337/')
      .withDefaults({
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json'
        }
      })
      .withInterceptor({
        request(request) {
          console.log(`Requesting ${request.method} ${request.url}`);
          return request;
        },
        response(response) {
          console.log(`Received ${response.status} ${response.url}`);
          return response;
        }
      })
    })

  }

  /**
  *@PUBLIC URL
  *@DESCRIPTION take and endpoint and a object with key and value and generate the final url to fetch request
  *@PARAM endpoint {String} - 'tattoo'
  *@PARAM params {Object} - '{ style: 1, bodyPart: 3 }'
  *@RETURN {String} - 'tattoo?style=1&bodyPart=3'
  **/
  URL(endpoint, params) {

    if (Object.keys(params) === 0) {
      return endpoint
    }

    if (typeof params === 'string') {
      return endpoint + `/${params}`
    }

    Object.keys(params).map((param, index) => {

      endpoint += index === 0
          ? `?${ param }=${ params[param] }`
          : `&${ param }=${ params[param] }`

    })

    return endpoint
  }

}
