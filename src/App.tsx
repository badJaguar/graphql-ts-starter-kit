import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import React from 'react';
import "../src/styles/App.scss";
import { Component } from './component';

function App() {

    //** Here you can place your GraphQL endpoint */
    const ENDPOINT = process.env.GRAPHQL_ENDPOINT;

    const apolloHttpLink = createHttpLink({
        uri: ENDPOINT,
        credentials: 'same-origin',
    });

    const apolloAuthLink = setContext(async (_, { headers }) => {

        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            }
        };
    });

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: apolloAuthLink.concat(apolloHttpLink),
    });

    return (
        <ApolloProvider client={ client }>
            <Component />
        </ApolloProvider>
    );
}

export default App;
