import { NgModule } from "@angular/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { AngularFireAuth } from "@angular/fire/auth";
import { take } from "rxjs/operators";
import { setContext } from "@apollo/client/link/context";

const authContext = (auth: AngularFireAuth) =>
  setContext(async () => {
    const token = await auth.idToken.pipe(take(1)).toPromise();
    if (!token) {
      return {};
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

const uri = "https://vamp-notebook.hasura.app/v1/graphql"; // <-- add the URL of the GraphQL server here
export function createApollo(
  auth: AngularFireAuth,
  httpLink: HttpLink
): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([authContext(auth), httpLink.create({ uri })]),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [AngularFireAuth, HttpLink],
    },
  ],
})
export class GraphQLModule {}
