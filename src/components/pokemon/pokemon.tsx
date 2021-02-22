import React, { memo, useMemo, useState } from "react";
import { FlexCol, FlexSpacer } from "../../common-components/flex-components/flex-components";
import styles from "./styles.module.scss";
import { useGetPokemonByNameQuery } from "./__generated__/queries";

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

const PokemonAbilities = memo(({ name }: { name: string; }) => {

  const { data, loading } = useGetPokemonByNameQuery({ variables: { name: name! } });

  if (loading && !data?.pokemon) {
    return <>Loading</>;
  }
  return (
    <ul style={ { backgroundColor: "white" } }>
      { data?.pokemon?.abilities?.map((item, index) => {
        return <li key={ index }>{ item?.ability?.name }</li>;
      }) }
    </ul>
  );
});
