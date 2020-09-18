import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';
import * as Types from './types';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetQuestionsQueryVariables = Types.Maybe<{ [key: string]: never; }>;


export type GetQuestionsQuery = (
  { __typename: 'Query' }
  & {
    questions: Array<(
      { __typename: 'Question' }
      & Pick<Types.Question, 'id' | 'text'>
      & {
        answers: Array<(
          { __typename: 'Answer' }
          & Pick<Types.Answer, 'id' | 'answerText' | 'isSelected'>
        )>, otherAnswer?: Types.Maybe<(
          { __typename: 'OtherAnswer' }
          & Pick<Types.OtherAnswer, 'id' | 'title' | 'otherAnswerText'>
        )>
      }
    )>
  }
);


export const GetQuestionsDocument = gql`
    query GetQuestions {
  questions {
    id
    text
    answers {
      id
      answerText
      isSelected
    }
    otherAnswer {
      id
      title
      otherAnswerText
    }
  }
}
    `;
export type GetQuestionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetQuestionsQuery, GetQuestionsQueryVariables>, 'query'>;

export const GetQuestionsComponent = (props: GetQuestionsComponentProps) => (
  <ApolloReactComponents.Query<GetQuestionsQuery, GetQuestionsQueryVariables> query={GetQuestionsDocument} {...props} />
);


/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
  return ApolloReactHooks.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, baseOptions);
}
export function useGetQuestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, baseOptions);
}
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsQueryResult = ApolloReactCommon.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;