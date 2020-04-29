import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink, HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { ApolloLink, Observable, Operation } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { toast } from "react-toastify";

// const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "http://localhost:4001/graphql",
});

// const httpLink = createHttpLink({ uri: "http://localhost:3000/graphql" });
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("jwt");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "X-JWT": token ? `Bearer ${token}` : "",
    },
  };
});
const request = async (operation: Operation) => {
  operation.setContext({
    headers: {
      "X-JWT": localStorage.getItem("jwt") || "",
    },
  });
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      toast.error(`Unexpected error: ${message}`);
    });
  }
  if (networkError) {
    toast.error(`Network error: ${networkError}`);
  }
});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const client = new ApolloClient({
  link: ApolloLink.from([
    requestLink,
    errorLink,
    authLink,
    // ApolloLink.split(
    //   new HttpLink({ uri: mutationsUri }),
    // ),
    withClientState({
      defaults: {
        auth: {
          __typename: "Auth",
          isLoggedIn: Boolean(localStorage.getItem("jwt")),
        },
      },
      resolvers: {
        Mutation: {
          logUserIn: (_, { token }, { cache }) => {
            localStorage.setItem("jwt", token);
            cache.writeData({
              data: {
                auth: {
                  __typename: "Auth",
                  isLoggedIn: true,
                },
              },
            });
            return null;
          },
          logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("jwt");
            cache.writeData({
              data: {
                auth: {
                  __typename: "Auth",
                  isLoggedIn: false,
                },
              },
            });
            return null;
          },
        },
      },
      cache: new InMemoryCache(),
    }),
    httpLink,
  ]),

  cache: new InMemoryCache(),
  resolvers: {},
  connectToDevTools: true,
});

export default client;
