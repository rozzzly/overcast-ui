import React from 'react';
import styled from '@emotion/styled';
import { CONTENT_BACKGROUND } from '@overcast-ui/theme/colors';

// import { Breadcrumbs } from './restyled/Breadcrumbs';

export interface PanelWrapperProps {
    areaName?: string | null;
}

export const PanelWrapper = styled.div<PanelWrapperProps>`
    grid-area: ${p => p.areaName ?? 'unset'};
    display: flex;
    overflow: hidden;
    flex-direction: column;
    margin: -8px;
    padding: 8px;
`;

export interface PanelContainerProps {
    fillParent: boolean;
    scrollable: boolean;
}

export const PanelContainer = styled.div<PanelContainerProps>`
    display: flex;
    background: ${CONTENT_BACKGROUND};
    flex-direction: column;
    overflow: hidden; // keeps corners rounded when children have a background set
    border-radius: 4px;
    flex: ${p => p.fillParent ? 1 : 0} ${p => p.scrollable ? 1 : 0} auto;
    min-height: 0;
    display: flex;
    padding: 8px;
    box-shadow:
        0 0 4px 2px rgba(0,0,0,0.1),
        0 0 1px 0px rgba(0,0,0,0.25),
        0 0 1px 1px rgba(0,0,0,0.25) !important;
`;


export interface PanelHeaderProps {
    align?: 'left' | 'right';
}
export const PanelHeader = styled.div<PanelHeaderProps>`
    display: flex;
    flex-direction: ${p => p.align === 'right' ? 'flex-end' : 'flex-start'};
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
`;
/* justify-content: flex-end; */
/* & ${Breadcrumbs} {
    flex-grow: 1;
    justify-self: flex-start;
} */

export interface PanelProps extends Partial<PanelWrapperProps>, Partial<PanelContainerProps> {
    children?: React.ReactNode;
    areaName?: string | null;
    className?: string;
}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(({
    className,
    areaName = null,
    scrollable = true,
    fillParent = false,
    children,
}, ref) => (
    <PanelWrapper className={className} areaName={areaName}>
        <PanelContainer fillParent={fillParent} scrollable={scrollable} ref={ref}>
            { children }
        </PanelContainer>
    </PanelWrapper>
));

export default Panel;