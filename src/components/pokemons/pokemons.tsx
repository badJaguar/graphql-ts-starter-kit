import React, { useEffect, useState } from "react";
import { Card } from "../../common-components/card/card";
import { PokemonItem } from "../../__generated__/types";
import { useGetAllPokemonsQuery } from "./__generated__/queries";


export const Pokemons = () => {

  const $pokemonsQuery = useGetAllPokemonsQuery();

  const [pokemons, setPokemons] = useState<PokemonItem[]>()

  useEffect(() => {
    if (!$pokemonsQuery.loading && $pokemonsQuery.data?.pokemons?.results) {
      setPokemons($pokemonsQuery.data?.pokemons?.results as PokemonItem[])
    }
  }, [$pokemonsQuery.loading, $pokemonsQuery.data])

  return (
    <>
      {
        pokemons?.map(pokemonItem => {
          return (
            <Card
              backgroundImageUrl={pokemonItem.image!}
              headerContent={pokemonItem.name!}
              footerContent={pokemonItem.url!}
            />
          )
        })
      }
    </>
  )
}