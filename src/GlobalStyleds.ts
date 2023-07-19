import { createGlobalStyle } from 'styled-components';
import { IGlobalTheme } from './GlobalInterfaces';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }
    :root {
        font-size: 62.5%; // 62.5% = 10px
    }
`;

export const GlobalTheme: IGlobalTheme = {
    loading: {
        background: '#ffffff',
        color: '#212196',
    },
    sections: {
        primary: {
            text: {
                title: {
                    color: '#ffffff',
                    textShadown: true,
                },
                subTitle: {
                    color: '#ffffff',
                    textShadown: true,
                    letterSpacing: '6px',
                },
            },
        },
        second: {
            background: '#ffffff',
            text: {
                title: {
                    color: '#212196',
                    textShadown: true,
                },
                subTitle: {
                    color: '#000000',
                },
            },
            cards: {
                title: {
                    color: '#ffffff',
                },
                background: '#212196',
                boxShadown: true,
            },
            button: {
                title: {
                    color: '#000000',
                },
                background: '#7ed957',
                border: '#7ed957',
                boxShadown: true,
                icon: {
                    color: '#000000',
                },
            },
        },
        third: {
            background: '#212196',
            text: {
                title: {
                    color: '#f28a2e',
                    textShadown: true,
                },
                list: {
                    color: '#ffffff',
                },
            },
            cards: {
                boxShadown: true,
                border: '#f28a2e',
            },
            button: {
                title: {
                    color: '#000000',
                },
                background: '#7ed957',
                border: '#7ed957',
                boxShadown: true,
                icon: {
                    color: '#000000',
                },
            },
        },
        fourth: {
            background: '#ffffff',
            text: {
                title: {
                    color: '#212196',
                    textShadown: true,
                },
                subTitle: {
                    color: '#000000',
                },
            },
            cards: {
                title: {
                    color: '#212196',
                    textShadown: true,
                },
                subTitle: {
                    color: '#000000',
                },
            },
            button: {
                title: {
                    color: '#000000',
                },
                background: '#7ed957',
                border: '#7ed957',
                boxShadown: true,
                icon: {
                    color: '#000000',
                },
            },
        },
        fifth: {
            background: '#212196',
            text: {
                title: {
                    color: '#f28a2e',
                    textShadown: true,
                },
                subTitle: {
                    color: '#ffffff',
                },
            },
            cards: {
                title: {
                    color: '#f28a2e',
                    textShadown: true,
                },
                subTitle: {
                    color: '#ffffff',
                },
            },
            button: {
                title: {
                    color: '#000000',
                },
                background: '#7ed957',
                border: '#7ed957',
                boxShadown: true,
                icon: {
                    color: '#000000',
                },
            },
        },
        sixth: {
            background: '#ffffff',
            text: {
                title: {
                    color: '#212196',
                    textShadown: true,
                },
                subTitle: {
                    color: '#000000',
                },
            },
            cards: {
                title: {
                    color: '#ffffff',
                },
                subTitle: {
                    color: '#000000',
                },
                background: '#212196',
                boxShadown: true,
            },
            button: {
                title: {
                    color: '#000000',
                },
                background: '#7ed957',
                border: '#7ed957',
                boxShadown: true,
                icon: {
                    color: '#000000',
                },
            },
        },
    },
    footer: {
        background: '#212196',
        icons: {
            color: '#000000',
        },
        text: {
            title: {
                color: '#ffffff',
            },
            subTitle: {
                color: '#ffffff',
            },
            link: {
                color: '#ffffff',
            },
            list: {
                color: '#ffffff',
            },
        },
    },
};
