if (Meteor.isServer) {
  require('./imports/server/server')
} else if (Meteor.isClient) {
  require('./imports/client/client')
}
