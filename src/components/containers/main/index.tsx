import { FC } from 'react';
import { IContainerProps } from '../interfaces';
import { MainContainer } from './styled';

export const Main: FC<IContainerProps> = ({ children }) => {
    return <MainContainer>{children}</MainContainer>;
};
