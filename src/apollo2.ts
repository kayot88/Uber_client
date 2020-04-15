import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { ApolloLink, Observable, Operation } from "apollo-link";

const cache = new InMemoryCache();

const request = async (operation: Operation) => {
  operation.setContext({
    headers: {
      "X-JWT": localStorage.getItem("jwt") || "",
    },
  });
};

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
      cache,
    }),
  ]),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

export default client;
