const { timeTrackerList } = require('./sampleData')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')

// Time Tracker List Type

const TimeTrackerListType = new GraphQLObjectType({
  name: 'TimeTrackerList',
  fields: () => ({
    id: { type: GraphQLID },
    task_name: { type: GraphQLString },
    jira_url: { type: GraphQLString },
    jira_display_name: { type: GraphQLString },
    description: { type: GraphQLString },
    notes: { type: GraphQLString },
    was_blocked: true,
    blocked_reason: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    timeTrackerLists: {
      type: new GraphQLList(TimeTrackerListType),
      resolve(parent, args) {
        return timeTrackerList.find();
      },
    },
    timeTrackerList: {
      type: new GraphQLList(TimeTrackerListType),
      resolve(parent, args) {
        return timeTrackerList.findById(args.id);
      },
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
});
