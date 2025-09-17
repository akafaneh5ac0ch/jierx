import Router from 'universal-router';
import './main';

const context = require.context('../pages/', true, /index\.js$/);
const routes = context.keys().map(key => {
    return {
        path: `/components/${key.slice(2, -9)}`,
        action: () => ({Page: context(key)}) ,
    };
});

export default new Router([
    {
        path: '/', 
        action: async () => {
            const Page = await import('pages/index');
            return {Page};
        }
    },
    {
        path: '/components/button',
        action: async () => {
            const Page = await import('pages/button');
            return {Page};
        }
    },
    {
        path: '/components/dialog',
        action: async () => {
            return {Page: await import('pages/dialog')};
        }
    },
    {
        path: '/components/table',
        action: async () => {
            return {Page: await import('pages/table')};
        }
    },
    {
        path: '/components/checkbox',
        action: async () => {
            return {Page: await import('pages/checkbox')};
        }
    },
    {
        path: '/components/progress',
        action: async () => {
            return {Page: await import('pages/progress')};
        }
    },
    {
        path: '/components/radio',
        action: async () => {
            return {Page: await import('pages/radio')};
        }
    },
    {
        path: '/components/select',
        action: async () => {
            return {Page: await import('pages/select')}
        }
    },        
    {
        path: '/components/slider',
        action: async () => {
            return {Page: await import('pages/slider')}
        }
    },
    {
        path: '/components/spinner',
        action: async () => {
            return {Page: await import('pages/spinner')}
        }
    },
    {

        path: '/components/tooltip',
        action: async () => {
            return {Page: await import('pages/tooltip')}
        }
    },
    {
        path: '/components/form',
        action: async () => {
            return {Page: await import('pages/form')};
        }
    },
    {
        path: '/components/grid',
        action: async () => {
            return {Page: await import('pages/grid')};
        }
    },
    {
        path: '/components/switch',
        action: async () => {
            return {Page: await import('pages/switch')};
        }
    },
    {
        path: '/components/editable',
        action: async () => {
            return {Page: await import('pages/editable')};
        }
    },
    {
        path: '/components/tabs',
        action: async () => {
            return {Page: await import('pages/tabs')};
        }
    },
    ...routes
]);
