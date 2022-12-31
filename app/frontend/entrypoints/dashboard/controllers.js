import { Application } from "@hotwired/stimulus"
import StimulusReflex from 'stimulus_reflex'
import { registerControllers } from "stimulus-vite-helpers";
const controllers = import.meta.globEager('../../**/*_controller.js')
import consumer from '~/consumer'
const application = Application.start();
application.consumer = consumer;
registerControllers(application, controllers)
StimulusReflex.initialize(application, { isolate: true })
