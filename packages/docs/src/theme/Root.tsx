import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';

export interface RootProps {
    children: React.ReactNode;
}

const RootWrapper = styled.div`

`;


export const Root: React.FC<RootProps> = ({ children }) => {
    return (
        <RootWrapper>
            <GlobalStyles />
            { children }
        </RootWrapper>
    )
};

export default Root;