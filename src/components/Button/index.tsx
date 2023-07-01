import React from 'react';
import { Button } from './styles';
import { IButtonProps } from './types';

const UIButton: React.FC<IButtonProps> = ({ children }) => {
    return (
        <Button>{children}</Button>
    )
};

export { UIButton };
