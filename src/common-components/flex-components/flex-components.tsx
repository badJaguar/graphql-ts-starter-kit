import React, { forwardRef } from 'react';
import { mergeStyles } from '../../helpers/merge-styles';
import styles from "./styles.module.scss";

export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  justify?: "start" | "center" | "end";
  children?: React.ReactNode
}

const justifyMap = {
  'start': undefined,
  'end': 'flex-end',
  'center': 'center',
}

export const FlexRow = ({ children, justify, style, className, ...rest }: FlexProps) => {
  return (
    <div {...rest} {...mergeStyles(className, style, styles.flexRow, { justifyContent: justify !== undefined ? justifyMap[justify!] : undefined })}>
      {children}
    </div>
  )
}

export const FlexCol = ({ children, justify, style, className, ...rest }: FlexProps) => {
  return (
    <div {...rest} {...mergeStyles(className, style, styles.flexCol, { justifyContent: justify !== undefined ? justifyMap[justify!] : undefined })}>
      {children}
    </div>
  )
}

export const FlexSpacer = ({ children, justify, style, className, ...rest }: FlexProps) => {
  return (
    <div {...rest} {...mergeStyles(className, style, styles.flexSpacer)}>
      {children}
    </div>
  )
}

export const FlexRowWithRef = forwardRef(({ children, justify, style, className, ...rest }: FlexProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div {...rest} ref={ref} {...mergeStyles(className, style, styles.flexRow, { justifyContent: justify !== undefined ? justifyMap[justify!] : undefined })}>
      {children}
    </div>
  )
})

export const FlexColWithRef = forwardRef(({ children, justify, style, className, ...rest }: FlexProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div {...rest} ref={ref} {...mergeStyles(className, style, styles.flexCol, { justifyContent: justify !== undefined ? justifyMap[justify!] : undefined })}>
      {children}
    </div>
  )
})

export const FlexSpacerWithRef = forwardRef(({ children, justify, style, className, ...rest }: FlexProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div {...rest} ref={ref} {...mergeStyles(className, style, styles.flexSpacer)}>
      {children}
    </div>
  )
})