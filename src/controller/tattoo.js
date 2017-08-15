import { Client } from './client'

export class Tattoo extends Client{

  /**
  *@PUBLIC constructor
  *@DESCRIPTION define endpoint
  **/
  constructor() {
    super()
    this.endpoint = 'tattoo'
  }

  /**
  *@PUBLIC get
  *@DESCRIPTION get tattoo(s) not/approved tattos, approved can be filter
  **/
  get(approved, params) {

    const url = approved
              ? this.URL(this.endpoint, {...params})
              : this.URL(this.endpoint, 'notApproved')

    this.client
      .fetch(`${url}`, {
        method: this.methods.get
      })
      .then(response => response.json())
      .then(tattos => {
        return tattos
      })
      .catch(error => {
        return error
      })

  }

  /**
  *@PUBLIC add
  *@DESCRIPTION add a tattoo
  **/
  add(tattoo) {
    const url = this.URL(this.endpoint)

    this.client
      .fetch(`${url}`, {
        method: this.methods.post,
        body: json(tattoo)
      })
      .then(response => response.json())
      .then(tattoo => {
        return tattoo
      })
      .catch(error => {
        return error
      })

  }

  /**
  *@PUBLIC bodyParts
  *@DESCRIPTION get tattoos bodyParts
  **/
  bodyParts() {
    const url = this.URL(this.endpoint, 'bodyParts')

    this.client
      .fetch(`${url}`, {
        method: this.methods.get
      })
      .then(response => response.json())
      .then(tattos => {
        return tattos
      })
      .catch(error => {
        return error
      })

  }

  /**
  *@PUBLIC fav
  *@DESCRIPTION get, add and delete favTattos
  *@PARAM {Object} action - Object that might contain id and action
  *@DEV action = { id: 1, action: 'ADD' } | { id: 2, action: 'DELETE' } | EMPTY
  **/
  fav(action) {

    const url = this.URL(this.endpoint, 'tattoofav')
    let method, payload;

    switch (action.type) {
      case 'ADD': method = this.methods.post; break
      case 'DELETE': method = this.methods.delete; break
      default: method = this.methods.get
    }

    switch (method) {

      case 'GET': payload = Object.assign({}, {
        method: method
      }); break

      case 'POST':
      case 'DELETE': payload = Object.assign({}, {
        method: method,
        tattooId: action.id
      }); break

    }

    this.client
      .fetch(`${url}`, payload)
      .then(response => response.json())
      .then(tattos => {
        return tattos
      })
      .catch(error => {
        return error
      })

  }
}
