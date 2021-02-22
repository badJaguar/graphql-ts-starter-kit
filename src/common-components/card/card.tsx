import React, { memo } from "react";
import { FlexCol, FlexSpacer } from "../flex-components/flex-components";
import styles from "./styles.module.scss";

export interface CardProps {
  headerContent: string;
  footerContent?: string;
  backgroundImageUrl: string;
}

export const Card = memo((props: CardProps) => {

  const { headerContent, footerContent, backgroundImageUrl } = props;

  return (
    <FlexCol className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <h2 className={styles.header}>{headerContent}</h2>
      <FlexSpacer />
      {footerContent}
    </FlexCol>
  )
});
