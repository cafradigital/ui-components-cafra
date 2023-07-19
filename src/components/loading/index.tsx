import React from 'react';

import {
    LoadingFive,
    LoadingFour,
    LoadingOne,
    LoadingThree,
    LoadingTwo,
} from './components';
import { ILoadingProps } from './intefaces';
import { ContainerLoading } from './styled';

export const Loading: React.FC<ILoadingProps> = ({
    type,
    size,
    color,
    backgroundColor,
}) => {
    const Types = {
        one: <LoadingOne size={size} color={color} />,
        two: <LoadingTwo size={size} color={color} />,
        three: <LoadingThree size={size} color={color} />,
        four: <LoadingFour size={size} color={color} />,
        five: <LoadingFive size={size} color={color} />,
    };

    return (
        <ContainerLoading styled={{ backgroundColor }}>
            {Types[type]}
        </ContainerLoading>
    );
};
