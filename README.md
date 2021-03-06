
# Welcome to Bla-Bla starter kit!

Main places that which you need to pay attention are: 
1) 'App.tsx'. In this component placed all settings for Apollo Client.
2) __generated__ folder is auto generated folder that contains files with types and generated hook, components based on written *.graphql file.
3) 'codegen-dev.yml'. In the 'schema' field the URL to GraphQL schema should be placed or path to it.

Used packages that makes life happy 🤗:
[Apollo Client](https://www.apollographql.com/docs/react/api/core/ApolloClient/)
[typescript-plugin-css-modules](https://www.npmjs.com/package/typescript-plugin-css-modules)
[GraphQL Code Generator](https://graphql-code-generator.com/)
TypeScript

Based on create-react-app


👆VERY IMPORTANT
&nbsp;For correct working add these extentions for your IDE:
1) [Apollo-GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
2) [GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)  for an awesome developer experience
3) [GQLX-VS-Code-Extension](https://marketplace.visualstudio.com/items?itemName=FlorianRappl.gqlx-vscode)
4) [GraphQL-for-VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
5) [vscode-graphql](https://marketplace.visualstudio.com/items?itemName=luyizhi.vscode-graphql)

PLAYGROUND FOR POKEMONS GraphQL
https://graphql-pokeapi.vercel.app/api/graphql


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
