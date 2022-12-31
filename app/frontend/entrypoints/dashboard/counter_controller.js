import ApplicationController from '~/controllers/application_controller.js'

export default class extends ApplicationController {
  increment(event) {
    event.preventDefault()
    this.stimulate('Counter#increment', 1)
    .then(payload => console.log(payload))
    .catch(console.error)
  }
}