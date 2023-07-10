export interface ILoadingStyleds {
    size: 'small' | 'medium' | 'Big';
    color?: string;
}

export interface ILoadingProps extends ILoadingStyleds {
    type: 'one' | 'two' | 'three' | 'four' | 'five';
}
