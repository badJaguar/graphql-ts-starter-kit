import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';
import * as Types from '../../../__generated__/types';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetPokemonByNameQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetPokemonByNameQuery = (
  { __typename: 'Query'; }
  & {
    pokemon?: Types.Maybe<(
      { __typename: 'Pokemon'; }
      & {
        abilities?: Types.Maybe<Array<Types.Maybe<(
          { __typename: 'Ability'; }
          & {
            ability?: Types.Maybe<(
              { __typename: 'BaseName'; }
              & Pick<Types.BaseName, 'name' | 'url'>
            )>;
          }
        )>>>;
      }
    )>;
  }
);


export const GetPokemonByNameDocument = gql`
    query getPokemonByName($name: String!) {
  pokemon(name: $name) {
    abilities {
      ability {
        name
        url
      }
    }
  }
}
    `;
export type GetPokemonByNameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>, 'query'> & ({ variables: GetPokemonByNameQueryVariables; skip?: boolean; } | { skip: boolean; });

export const GetPokemonByNameComponent = (props: GetPokemonByNameComponentProps) => (
  <ApolloReactComponents.Query<GetPokemonByNameQuery, GetPokemonByNameQueryVariables> query={ GetPokemonByNameDocument } { ...props } />
);


/**
 * __useGetPokemonByNameQuery__
 *
 * To run a query within a React component, call `useGetPokemonByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPokemonByNameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>) {
  return ApolloReactHooks.useQuery<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>(GetPokemonByNameDocument, baseOptions);
}
export function useGetPokemonByNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>(GetPokemonByNameDocument, baseOptions);
}
export type GetPokemonByNameQueryHookResult = ReturnType<typeof useGetPokemonByNameQuery>;
export type GetPokemonByNameLazyQueryHookResult = ReturnType<typeof useGetPokemonByNameLazyQuery>;
export type GetPokemonByNameQueryResult = ApolloReactCommon.QueryResult<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>;