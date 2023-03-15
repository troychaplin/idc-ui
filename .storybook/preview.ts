import '../src/index.css'
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'white',
        values: [
            {
                name: 'white',
                value: '#ffffff',
            },
            {
                name: 'light grey',
                value: '#f3f3f3',
            },
            {
                name: 'dark grey',
                value: '#3e3e3e',
            },
            {
                name: 'black',
                value: '#000000',
            },
        ],
    },
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
