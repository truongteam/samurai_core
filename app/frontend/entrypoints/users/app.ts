// import Login           from './login';
import { store } from './store'
import { createApp } from '~/factories/app';
import React from 'react';
import ShowAlertPlugin from './plugin';

const plugins = [
    new ShowAlertPlugin()
]
const components = {
    Login: React.lazy(() => import('./login'))
}
// Always export a 'new' instance so it immediately evokes:
export default createApp(store, components, plugins);