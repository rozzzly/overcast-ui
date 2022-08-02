import React from 'react';
import { Global, css } from '@emotion/react';
import { camelCase } from 'lodash';
import dedent from 'dedent';

import { PAGE_BACKGROUND, CONTENT_BACKGROUND, DARK_GRAY, palette } from '@overcast-ui/theme/colors';


const paletteStr = (Object.keys(palette)
    .map(key =>  (['white', 'black'].includes(key)
        ? `--palette-${key}: ${palette[key]};`
        :   dedent`
            --palette-${camelCase(key)}-1: ${palette[key][1]};
            --palette-${camelCase(key)}-2: ${palette[key][2]};
            --palette-${camelCase(key)}-3: ${palette[key][3]};
            --palette-${camelCase(key)}-4: ${palette[key][4]};
            --palette-${camelCase(key)}-5: ${palette[key][5]};
    `))
    .join('\n')
);


export const GlobalStyles = () => (
    <Global
        styles={css`
            :root:root { // another hack for higher specificity than !important
                --ifm-background-color: ${PAGE_BACKGROUND};
                --ifm-navbar-background-color: ${CONTENT_BACKGROUND};
                ${paletteStr}
            }

            .menu.thin-scrollbar {
                background-color: ${DARK_GRAY[5]};
            }

            // react-live editor
            .npm__react-simple-code-editor__textarea {
                background-color: ${DARK_GRAY[4]};
            }
        `}
    />
);

export default GlobalStyles;