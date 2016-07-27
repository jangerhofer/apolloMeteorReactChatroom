import {
    Random
} from 'meteor/random';

export const schema = [`

type Query {
  randomString : String
}

schema {
  query: Query
}
`];

export const resolvers = {
    Query: {
        // Create random string from string
        randomString() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    },

}
