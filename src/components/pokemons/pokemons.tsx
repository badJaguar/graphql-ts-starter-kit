import React, { memo } from "react";
import { Card } from "../../common-components/card/card";
import { useGetAllPokemonsQuery } from "./__generated__/queries";


export const Pokemons = memo(() => {

  const { data, loading } = useGetAllPokemonsQuery();

  if (loading && !data?.pokemons?.results) {
    return <>Loading...</>;
  }

  return (
    <>
      {
        data?.pokemons?.results?.map(pokemonItem => {
          return (
            <Card
              key={ pokemonItem?.id }
              backgroundImageUrl={ pokemonItem?.image! }
              headerContent={ pokemonItem?.name! }
              footerContent={ pokemonItem?.url! }
            />
          );
        })
      }
    </>
  );
});
