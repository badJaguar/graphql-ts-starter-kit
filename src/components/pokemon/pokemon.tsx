import React, { memo, useMemo, useState } from "react";
import { FlexCol, FlexSpacer } from "../../common-components/flex-components/flex-components";
import { PokemonAbilities } from "./abilities/pokemon-abilities";
import styles from "./styles.module.scss";

export interface CardProps {
  headerContent: string;
  footerContent?: string;
  backgroundImageUrl: string;
  pokemonName: string;
}

export const Pokemon = memo((props: CardProps) => {

  const { headerContent, backgroundImageUrl, pokemonName } = props;
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>();

  const onNameSetHandle = useMemo(() => () => {
    setShowMoreInfo((prewShow) => !prewShow);
  }, []);

  return (
    <FlexCol
      onClick={ onNameSetHandle }
      className={ styles.wrapper }
      style={ { backgroundImage: `url(${backgroundImageUrl})` } }
    >
      <h2 className={ styles.header }>{ headerContent }</h2>
      <FlexSpacer />
      {
        showMoreInfo && <PokemonAbilities name={ pokemonName } />
      }
    </FlexCol>
  );
});
