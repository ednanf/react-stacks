import React from 'react';
import './Stack.css';
import {SPACING_SCALE, type SpacingKey} from './spacing';

interface HStackProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: SpacingKey | number | string;
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    wrap?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    margin?: SpacingKey | number | string;
    padding?: SpacingKey | number | string;
    flexGrow?: boolean;
}

export const HStack: React.FC<HStackProps> = ({
                                                  gap = 'sm',
                                                  align = 'center',
                                                  justify = 'start',
                                                  wrap = false,
                                                  textAlign,
                                                  margin,
                                                  padding,
                                                  flexGrow,
                                                  className,
                                                  style,
                                                  children,
                                                  ...props
                                              }) => {
    const resolveSpacing = (value: SpacingKey | number | string | undefined) =>
        typeof value === 'string' && value in SPACING_SCALE
            ? SPACING_SCALE[value as SpacingKey]
            : value;

    const classes = [
        'swiftstack-hstack',
        `swiftstack-align${align.charAt(0).toUpperCase() + align.slice(1)}`,
        `swiftstack-justify${justify.charAt(0).toUpperCase() + justify.slice(1)}`,
        wrap ? 'swiftstack-wrap' : '',
        textAlign
            ? `swiftstack-textAlign${textAlign.charAt(0).toUpperCase() + textAlign.slice(1)}`
            : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const componentStyle = {
        gap: resolveSpacing(gap),
        margin: resolveSpacing(margin),
        padding: resolveSpacing(padding),
        flexGrow: flexGrow ? 1 : undefined,
        ...style,
    };

    return (
        <div className={classes} style={componentStyle} {...props}>
            {children}
        </div>
    );
};
