import { middleWare, apiReducer, railsActions } from 'redux-rails'

const apiConfig = {
    baseUrl: '/api/',
    resources: {
      Todos: {
        controller: 'todos'
      }
    }
}

export default middleWare(apiConfig)