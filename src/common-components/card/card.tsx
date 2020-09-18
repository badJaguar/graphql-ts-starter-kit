import React from "react";
import { FlexCol, FlexRow, FlexSpacer } from "../flex-components/flex-components";
import styles from "./styles.module.scss";

export interface CardProps {
  headerContent: string;
  centerContent: string;
  footerContent: string;
  footerBgColor: string;
  backgroundImageUrl: string;
  iconComponent?: React.ReactNode
}

export const Card = (props: CardProps) => {

  const { headerContent, centerContent, footerContent, backgroundImageUrl, iconComponent, footerBgColor } = props;

  return (
    <FlexCol className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <h2 className={styles.header}>{headerContent}</h2>
      <FlexRow className={styles.centerContent}>{centerContent}</FlexRow>
      <FlexSpacer />
      <FlexRow style={{ backgroundColor: footerBgColor }} className={styles.footerContent}>
        <div className={styles.icon}>{iconComponent}</div>
        {footerContent}
      </FlexRow>
    </FlexCol>
  )
}