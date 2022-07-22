import {
    forwardRef,
    ForwardedRef,
    RefAttributes,
    HTMLAttributes,
    MutableRefObject,
    ForwardRefRenderFunction,
    ForwardRefExoticComponent
} from 'react';
import styled, { CreateStyledComponent, StyledComponent } from '@emotion/styled';


export type ExtractElement<T> = (
    (T extends React.DetailedHTMLProps<HTMLAttributes<any>, infer E>
        ? E
        : (T extends React.SVGProps<infer E>
            ? E
            : never
        )
    )
);

export type WithElementAttrs<ElementKind extends keyof JSX.IntrinsicElements> = Omit<
    JSX.IntrinsicElements[ElementKind],
    'ref'
>;



export type DOMTagToElement<ElementKind extends keyof JSX.IntrinsicElements> = ExtractElement<JSX.IntrinsicElements[ElementKind]>;

export type WrappedComponent<Props extends {}, ElementKind extends keyof JSX.IntrinsicElements> = (
    & CreateStyledComponent<
        ForwardRefExoticComponent<
            & Props
            & WithElementAttrs<ElementKind>
            & RefAttributes<DOMTagToElement<ElementKind>>
        >,
        Props
    >
);

export const decorateName = <F extends StyledComponent<P>, P>(Component: F, name?: string) => {
    if (name) {
        Component.displayName = name;
    } else {
        Component.displayName = Component.displayName || Component.name;
    }
    return Component;
};


export const wrap = <
    Props extends { },
    ElementKind extends keyof JSX.IntrinsicElements
>(component: ForwardRefRenderFunction<DOMTagToElement<ElementKind>, Props>, name?: string) => {
    if (name) {
        const wrapped = {
            [name]: styled(forwardRef(component))``
        };
        decorateName(wrapped[name], name);
        return wrapped[name];
    } else {
        const wrapped = styled(forwardRef(component))``;
        return wrapped;
    }
};

export const dualRefs = <E extends HTMLElement>(
    targetA?: MutableRefObject<E | null> | ForwardedRef<E | null>,
    targetB?: MutableRefObject<E | null> | ForwardedRef<E | null>
) => (
    (incomingRefValue: E | null) => {
        if (targetA) {
            if (typeof targetA === 'function') targetA(incomingRefValue);
            else targetA.current = incomingRefValue;
        }
        if (targetB) {
            if (typeof targetB === 'function') targetB(incomingRefValue);
            else targetB.current = incomingRefValue;
        }
    }
);
