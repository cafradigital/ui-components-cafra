import React from 'react';
import { ILoadingStyleds } from '../../intefaces';
import { Loading } from './styled';

export const LoadingFour: React.FC<ILoadingStyleds> = ({ size, color }) => {
    return <Loading styled={{ size, color }} />;
};
