export interface ILoadingStyleds {
    size: 'small' | 'medium' | 'big';
    color?: string;
    backgroundColor?: string;
}

export interface ILoadingProps extends ILoadingStyleds {
    type: 'one' | 'two' | 'three' | 'four' | 'five';
}
