// Welcome to Launchpad!
// Log in to edit and save pads, and run queries in GraphiQL on the right.


import {makeExecutableSchema, addMockFunctionsToSchema,} from 'graphql-tools';

import typeDefs from './typeDefs'




const resolvers = {
  Query: {
    aString(){
      return 'string';
    },
    hello(){
      return 'hello world'
    },
    text(root, {message}, context){
      return [{id: message, age: 18}, {id: 2, age: 0}]
    },
    author(){
      return [{id:'author', age: 18}, {id: 2, age: 0}]
    },
    message(root,{msg},context){
      return `+${msg}`;
    }

  }
};

export const schema = makeExecutableSchema({typeDefs});


addMockFunctionsToSchema({schema});  //自动模拟数据

