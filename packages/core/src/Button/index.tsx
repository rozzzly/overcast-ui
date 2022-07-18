import React from 'react';
import styled from '@emotion/styled';
import { RED } from '@overcast-ui/theme';

const StyledButton = styled.button`
    button {
        background: ${RED};
    }
`;

export interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <StyledButton>{ label }</StyledButton>
    );
};