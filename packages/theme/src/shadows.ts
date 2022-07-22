import { css } from '@emotion/react';
import { rgba } from 'polished';
import Colors from './colors';


export const borderShadow = (alpha: number, color: string = Colors.BLACK, size: string | number = '1px') => (
    `0 0 0 ${typeof size === 'string' ? size : `${size}px`} ${rgba(color, alpha)}`
);


export const popoverSVGShadow = css`
    filter:
        drop-shadow(0px 0px 4px rgba(0,0,0,0.15))
        drop-shadow(1px 1px 0.25px rgba(0,0,0,0.4))
        drop-shadow(1px -1px 0.25px rgba(0,0,0,0.4))
        drop-shadow(-1px 1px 0.25px rgba(0,0,0,0.4))
        drop-shadow(-1px -1px 0.25px rgba(0,0,0,0.4));
`;