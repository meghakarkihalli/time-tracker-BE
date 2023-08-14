const { timeTrackerList } = require('./sampleData');
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
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
        start_date: '01-10-2023',
        end_date: '01-13-2023'
    })
});
const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType'
});
