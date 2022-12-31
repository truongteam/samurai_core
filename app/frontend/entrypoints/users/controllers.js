import { Application } from "stimulus"
import StimulusReflex from 'stimulus_reflex'
import { registerControllers } from "stimulus-vite-helpers";
const controllers = import.meta.globEager('../../**/*_controller.js')
import consumer from '~/consumer'
const application = Application.start();
registerControllers(application, controllers)
StimulusReflex.initialize(application, { isolate: true, consumer })
application.consumer = consumer;