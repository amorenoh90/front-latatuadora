import {HttpClient} from 'aurelia-http-client';

let client = new HttpClient();

client.configure(x => {
  x.withBaseUrl('http://70.35.203.91/');
  x.withHeader('Accept', 'application/json');
});

export class WebAPI {
  postQuotationRequest(request) {
    return client.post('quotation', request);
  }
}