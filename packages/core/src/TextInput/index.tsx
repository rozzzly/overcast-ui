import React, { FocusEventHandler, MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react';

import { WithElementAttrs, dualRefs, wrap } from '@overcast-ui/utils/reactHelpers';
import { WithIntent } from '@overcast-ui/theme/colors';
import { dumbAssert } from '@overcast-ui/utils/types';
import { TextInputContainer } from './containers';

/**
 * @module @overcast-ui/TextInput
 */

const BLUR_TIMEOUT = 200;

export interface TextInputProps extends WithElementAttrs<'input'>, WithIntent {
    /** Manually control the (visible but not actual) focus state of the TextInput */
    focused?: boolean;
    /** Disables the `<input />` */
    disabled?: boolean
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    /** Automatically focus on this `<input />` when mounted */
    focusOnMount?: boolean;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
    /** DOM Ref to `<div>` containing the `<input />` */
    containerRef?: MutableRefObject<HTMLDivElement>;
}


/**
 * A `TextInput` is a styled `<input />` element which defaults to `type="text"`. It is uncontrolled by default.
 */
export const TextInput = wrap<TextInputProps, 'input'>(({
    name,
    focused,
    disabled,
    leftIcon,
    className,
    rightIcon,
    placeholder,
    containerRef,
    focusOnMount,
    type = 'text',
    leftElement = null,
    rightElement = null,
    intent,
    ...rest
}, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    dumbAssert<MutableRefObject<HTMLInputElement>>(innerRef);
    const [ isFocused, setIsFocused ] = useState(!!focused);
    useEffect(() => {
        if (focused !== undefined && focused !== isFocused)  {
            setIsFocused(focused);
        }
    }, [ focused ]);

    useEffect(() => {
        if (!innerRef.current) return;
        if (focusOnMount) {
            innerRef.current.focus();
        }
    }, [ !!innerRef.current /* Don't compare value, just it's truthiness. Only want to trigger this on second render. */ ]);

    const lastContextMenuRef = useRef(0);
    const lastAltKeyRef = useRef(0);
    const caretData = useRef({ start: 0, end: 0 });

    const onFocusCapture: FocusEventHandler<HTMLInputElement> = (e) => {
        if (!disabled && focused === undefined) setIsFocused(true);
        if (rest.onFocusCapture) rest.onFocusCapture(e);
    };

    const onWrapperClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!disabled && focused === undefined) setIsFocused(true);
        if (innerRef?.current) innerRef.current.focus();
    };

    const onBlurCapture: FocusEventHandler<HTMLInputElement> = (e) => {
        if (!disabled && isFocused) {
            if (innerRef.current && innerRef.current.parentNode?.contains(e.relatedTarget  || document.activeElement)) {
                // e.preventDefault();
                // e.stopPropagation();
                setImmediate(() => {
                    if (!innerRef.current) return;
                    innerRef.current.focus();
                });
            } else {
                setIsFocused(focused ?? false);
            }
        }
        const contextMenuDelta = Date.now() - lastContextMenuRef.current;
        const altDelta = Date.now() - lastAltKeyRef.current;


        if (contextMenuDelta < BLUR_TIMEOUT) {
            e.preventDefault();
            e.stopPropagation();
            setImmediate(() => {
                if (!innerRef.current) return;
                innerRef.current.focus();
                innerRef.current.selectionStart = caretData.current.start;
                innerRef.current.selectionEnd = caretData.current.end;
            });
        } else if (altDelta < BLUR_TIMEOUT && e.relatedTarget && e.relatedTarget.className === 'menubar-menu-button') {
            e.preventDefault();
            e.stopPropagation();
            setImmediate(() => {
                if (!innerRef.current) return;
                innerRef.current.focus();
                innerRef.current.selectionStart = caretData.current.start;
                innerRef.current.selectionEnd = caretData.current.end;
            });
        }
    };

    const onAltKey = (e) => {
        if (e.altKey || e.key === 'Alt') {
            lastAltKeyRef.current = Date.now();
        }
    };

    const onContextMenu: MouseEventHandler<HTMLInputElement> = (e) => {
        if (!innerRef || !innerRef.current) return;
        const start = innerRef.current.selectionStart ?? 0;
        const end = innerRef.current.selectionEnd ?? 0;
        caretData.current = {
            start, end
        };
        lastContextMenuRef.current = Date.now();
    };

    return (
        <TextInputContainer
            ref={containerRef}
            className={className}
            isFocused={isFocused && !disabled}
            onBlurCapture={onBlurCapture}
            onFocusCapture={onFocusCapture}
            onContextMenu={onContextMenu}
            onKeyUpCapture={onAltKey}
            onFocus={rest.onFocus}
            onKeyDownCapture={onAltKey}
            onClick={onWrapperClick}
            disabled={!!disabled}
            intent={intent}
        >
            {/* { leftIcon && <IconContainer intent={intent}>{leftIcon}</IconContainer>} */}
            { leftElement }
            <input
                ref={dualRefs(ref, innerRef)}
                {...rest}
                name={name}
                type={type}
                placeholder={placeholder}
                disabled={!!disabled}
            />
            { rightElement }
            {/* { rightIcon && <IconContainer intent={intent}>{rightIcon}</IconContainer> } */}
        </TextInputContainer>
    );
}, 'TextInput');

export default TextInput;