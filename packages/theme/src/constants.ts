import { literalsToEnum, LiteralsToUnion } from '@overcast-ui/utils/literals';

export const BORDER_RADIUS = '4px' as const;


export const ControlSize = literalsToEnum(
    'tiny',
    'small',
    'normal',
    'large'
);
export type ControlSize = LiteralsToUnion<typeof ControlSize>;

export const ControlHeight: { [ Size in ControlSize ]: number }= {
    [ControlSize.normal]: 28,
    [ControlSize.large]: 36,
    [ControlSize.small]: 22,
    [ControlSize.tiny]: 18
};