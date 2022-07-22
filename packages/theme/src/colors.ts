import { literalsToEnum, LiteralsToUnion } from '@overcast-ui/utils/literals';

export const BLACK = '#000000' as const;
export const WHITE = '#FFFFFF' as const;
export const BLUE = {
    1: '#0E5A8A',
    2: '#106BA3',
    3: '#137CBD',
    4: '#2B95D6',
    5: '#48AFF0'
} as const;
export const COBALT = {
    1: '#1F4B99',
    2: '#2458B3',
    3: '#2965CC',
    4: '#4580E6',
    5: '#669EFF'
} as const;
export const DARK_GRAY = {
    1: '#182026',
    2: '#202B33',
    3: '#293742',
    4: '#30404D',
    5: '#394B59',
} as const;
export const FOREST = {
    1: '#1D7324',
    2: '#238C2C',
    3: '#29A634',
    4: '#43BF4D',
    5: '#62D96B'
} as const;
export const GOLD = {
    1: '#A67908',
    2: '#BF8C0A',
    3: '#D99E0B',
    4: '#F2B824',
    5: '#FFC940',
} as const;
export const GRAY = {
    1: '#5C7080',
    2: '#738694',
    3: '#8A9BA8',
    4: '#A7B6C2',
    5: '#BFCCD6',
} as const;
export const GREEN = {
    1: '#0A6640',
    2: '#0D8050',
    3: '#0F9960',
    4: '#15B371',
    5: '#3DCC91',
} as const;
export const INDIGO = {
    1: '#5642A6',
    2: '#634DBF',
    3: '#7157D9',
    4: '#9179F2',
    5: '#AD99FF',
} as const;
export const LIGHT_GRAY = {
    1: '#CED9E0',
    2: '#D8E1E8',
    3: '#E1E8ED',
    4: '#EBF1F5',
    5: '#F5F8FA'
} as const;
export const LIME = {
    1: '#728C23',
    2: '#87A629',
    3: '#9BBF30',
    4: '#B6D94C',
    5: '#D1F26D'
} as const;
export const ORANGE = {
    1: '#A66321',
    2: '#BF7326',
    3: '#D9822B',
    4: '#F29D49',
    5: '#FFB366'
} as const;
export const RED = {
    1: '#A82A2A',
    2: '#C23030',
    3: '#DB3737',
    4: '#F55656',
    5: '#FF7373'
} as const;
export const ROSE = {
    1: '#A82255',
    2: '#C22762',
    3: '#DB2C6F',
    4: '#F5498B',
    5: '#FF66A1'
} as const;
export const SEPIA = {
    1: '#63411E',
    2: '#7D5125',
    3: '#96622D',
    4: '#B07B46',
    5: '#C99765'
} as const;
export const TURQUOISE = {
    1: '#008075',
    2: '#00998C',
    3: '#00B3A4',
    4: '#14CCBD',
    5: '#2EE6D6'
} as const;
export const VERMILION = {
    1: '#9E2B0E',
    2: '#B83211',
    3: '#D13913',
    4: '#EB532D',
    5: '#FF6E4A'
} as const;
export const VIOLET = {
    1: '#5C255C',
    2: '#752F75',
    3: '#8F398F',
    4: '#A854A8',
    5: '#C274C2',
} as const;
export const palette = {
    BLACK,
    WHITE,
    BLUE,
    COBALT,
    DARK_GRAY,
    FOREST,
    GOLD,
    GRAY,
    GREEN,
    INDIGO,
    LIGHT_GRAY,
    LIME,
    ORANGE,
    RED,
    ROSE,
    SEPIA,
    TURQUOISE,
    VERMILION,
    VIOLET
};

export const NORMAL_TEXT_COLOR = LIGHT_GRAY[5]
export const CONTENT_BACKGROUND = DARK_GRAY[4];

export const Intent = literalsToEnum(
    'normal',
    'danger',
    'warning',
    'success',
    'primary'
);
export type Intent = LiteralsToUnion<typeof Intent>;

export interface WithIntentFlags {
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    primary?: boolean;
}

export interface WithIntent extends WithIntentFlags {
    intent?: Intent;
}

export const IntentToColorBase = {
    [Intent.primary]: 'BLUE',
    [Intent.success]: 'GREEN',
    [Intent.warning]: 'ORANGE',
    [Intent.danger]: 'RED',
} as const;


export const INTENT_COLORS = {
    primary: BLUE[2],
    success: GREEN[2],
    warning: ORANGE[1],
    danger: RED[1]
};

export const TEXT_INTENT_COLORS = {
    primary: BLUE[5],
    success: GREEN[5],
    warning: ORANGE[5],
    danger: RED[5],
};

export const INTENT_BG = {
    primary: BLUE[4],
    success: GREEN[4],
    warning: ORANGE[3],
    danger: RED[3]
};

export const INTENT_BG_ALT = {
    primary: BLUE[3],
    success: GREEN[3],
    warning: ORANGE[3],
    danger: RED[1]
};


export default palette;