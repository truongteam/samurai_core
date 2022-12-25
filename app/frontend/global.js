import actionCable from 'actioncable';

const CableApp = {};
const environment = gon.environment
if (environment === 'production') {
    CableApp.cable = actionCable.createConsumer('wss://samuraicable-production.up.railway.app');
} else {
    CableApp.cable = actionCable.createConsumer('/cable');
}

export default {
    CableApp,
    environment
};