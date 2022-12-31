const environment = gon.environment
let cableUrl = '/cable';
if (environment === 'production') {
    cableUrl = 'wss://samuraicable-production.up.railway.app';
}
export default {
    environment,
    cableUrl
};