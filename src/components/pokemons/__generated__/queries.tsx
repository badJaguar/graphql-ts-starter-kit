import * as Types from '../../../__generated__/types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetAllPokemonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPokemonsQuery = (
  { __typename: 'Query' }
  & { pokemons?: Types.Maybe<(
    { __typename: 'PokemonList' }
    & { results?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'PokemonItem' }
      & Pick<Types.PokemonItem, 'id' | 'name' | 'image' | 'url'>
    )>>> }
  )> }
);


export const GetAllPokemonsDocument = gql`
    query GetAllPokemons {
  pokemons {
    results {
      id
      name
      image
      url
    }
  }
}
    `;
export type GetAllPokemonsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>, 'query'>;

    export const GetAllPokemonsComponent = (props: GetAllPokemonsComponentProps) => (
      <ApolloReactComponents.Query<GetAllPokemonsQuery, GetAllPokemonsQueryVariables> query={GetAllPokemonsDocument} {...props} />
    );
    

/**
 * __useGetAllPokemonsQuery__
 *
 * To run a query within a React component, call `useGetAllPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPokemonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPokemonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>(GetAllPokemonsDocument, baseOptions);
      }
export function useGetAllPokemonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>(GetAllPokemonsDocument, baseOptions);
        }
export type GetAllPokemonsQueryHookResult = ReturnType<typeof useGetAllPokemonsQuery>;
export type GetAllPokemonsLazyQueryHookResult = ReturnType<typeof useGetAllPokemonsLazyQuery>;
export type GetAllPokemonsQueryResult = ApolloReactCommon.QueryResult<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>;