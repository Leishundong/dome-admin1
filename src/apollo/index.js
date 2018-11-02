/**
 * Created by Administrator on 2018/7/19.
 */
import Vue from 'vue'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import {ApolloLink, concat, split} from 'apollo-link';


import {getToken} from 'common/js/auth'
import {tokenName} from 'api/config';
import capture from './capture';

const httpLink = new HttpLink({
  uri: 'http://115.159.154.194/mlshop/graphql',
});


const authMiddleware = new ApolloLink((operation, forward) => {
   operation.setContext({
     headers: {
       [tokenName]: getToken() || null,
     }
   });
   return forward(operation);
 });



// Create the apollo client
const apolloClient = new ApolloClient({
  link:concat(authMiddleware,httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo);


const apolloProvider = new VueApollo({
  errorHandler (error) {
    capture(error);
  },
  defaultClient: apolloClient,
  defaultOptions: {
    // See 'apollo' definition
    // For example: default query options
    $query: {
      loadingKey: 'loading',
      /**
       * fetchPolicy determines where the client may return a result from. The options are:
       * - cache-first (default): return result from cache. Only fetch from network if cached result is not available.
       * - cache-and-network: return result from cache first (if it exists), then return network result once it's available.
       * - cache-only: return result from cache if available, fail otherwise.
       * - no-cache: return result from network, fail if network call doesn't succeed, don't save to cache
       * - network-only: return result from network, fail if network call doesn't succeed, save to cache
       * - standby: only for queries that aren't actively watched, but should be available for refetch and updateQueries.


      export type FetchPolicy =
    | 'cache-first'
    | 'cache-and-network'
    | 'network-only'
    | 'cache-only'
    | 'no-cache'
    | 'standby';
       */
fetchPolicy: 'no-cache',
    },
  },
});
export default apolloProvider.provide();
