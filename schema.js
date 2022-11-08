import { gql } from 'apollo-server';

const typeDefs = () => (gql`
    type Query{
        sessions(
            id: ID,
            title: String,
            description: String,
            startsAt: String,
            endsAt: String,
            room: String,
            day: String,
            format: String,
            track: String,
            level: String
        ): [Session],
        sessionById(id: ID): Session,
        speakers: [Speaker],
        speakerById(id: ID): Speaker
    }
    type Speaker {
        id: ID!,
        bio: String,
        name: String,
        sessions: [Session]
    }
    type Session {
        id: ID!,
        title: String!,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to a tag based system in the future..."),
        level: String,
        speakers: [Speaker]
    }

`)

export default typeDefs