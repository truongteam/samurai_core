import { createConsumer } from '@rails/actioncable';

const CableApp = {};
const environment = gon.environment
if (environment === 'production') {
    CableApp.cable = createConsumer('wss://samuraicable-production.up.railway.app');
} else {
    CableApp.cable = createConsumer('/cable');
}
export default CableApp.cable;