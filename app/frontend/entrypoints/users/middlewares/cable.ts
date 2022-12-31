import { createCableCarRoute } from 'redux-cablecar'
import global from '~/global'

const cableCarRoute = createCableCarRoute({
    webSocketURL: global.cableUrl
})
const cableCarMiddleware = cableCarRoute.createMiddleware()
export default cableCarMiddleware