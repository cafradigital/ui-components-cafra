import React from 'react';
import {
    LoadingFive,
    LoadingFour,
    LoadingOne,
    LoadingThree,
    LoadingTwo,
} from './components';
import { ILoadingProps } from './intefaces';

export const Loading: React.FC<ILoadingProps> = ({ type, size, color }) => {
    const Types = {
        one: <LoadingOne size={size} color={color} />,
        two: <LoadingTwo size={size} color={color} />,
        three: <LoadingThree size={size} color={color} />,
        four: <LoadingFour size={size} color={color} />,
        five: <LoadingFive size={size} color={color} />,
    };

    return <div>{Types[type]}</div>;
};
