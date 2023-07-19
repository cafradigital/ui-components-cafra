interface ICardsConfig {
    title?: {
        color: string;
        textShadown?: boolean;
    };
    subTitle?: {
        color: string;
        textShadown?: boolean;
    };
    background?: string;
    border?: string;
    boxShadown?: boolean;
}

interface ITextConfig {
    title: {
        color: string;
        textShadown?: boolean;
        letterSpacing?: string;
    };
    subTitle?: {
        color: string;
        textShadown?: boolean;
        letterSpacing?: string;
    };
    link?: {
        color: string;
    };
    list?: {
        color: string;
    };
}

interface Icons {
    color: string;
}

interface IButtonConfig {
    title: {
        color: string;
    };
    background: string;
    border?: string;
    icon?: Icons;
    boxShadown?: boolean;
}

interface ISections {
    primary: {
        text: ITextConfig;
        icon?: Icons;
    };
    second: {
        background: string;
        text: ITextConfig;
        cards: ICardsConfig;
        button: IButtonConfig;
        icon?: Icons;
    };
    third: {
        background: string;
        text: ITextConfig;
        cards: ICardsConfig;
        button: IButtonConfig;
        icon?: Icons;
    };
    fourth: {
        background: string;
        text: ITextConfig;
        cards: ICardsConfig;
        button: IButtonConfig;
        icon?: Icons;
    };
    fifth: {
        background: string;
        text: ITextConfig;
        cards: ICardsConfig;
        button: IButtonConfig;
        icon?: Icons;
    };
    sixth: {
        background: string;
        text: ITextConfig;
        cards: ICardsConfig;
        button: IButtonConfig;
        icon?: Icons;
    };
}

interface IFooter {
    background: string;
    text: ITextConfig;
    icons?: Icons;
}

interface ILoading {
    background: string;
    color: string;
}

export interface IGlobalTheme {
    loading: ILoading;
    sections: ISections;
    footer: IFooter;
}

export type IThemes =
    | 'primary'
    | 'second'
    | 'third'
    | 'fourth'
    | 'fifth'
    | 'sixth'
    | 'footer';
