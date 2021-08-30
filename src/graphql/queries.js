/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      ID
      Name
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        Name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      ID
      EventID
      GameID
      LocationID
      Team
      WinnerID
      LoserID
      Test
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        EventID
        GameID
        LocationID
        Team
        WinnerID
        LoserID
        Test
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGameName = /* GraphQL */ `
  query GetGameName($id: ID!) {
    getGameName(id: $id) {
      id
      ID
      Name
      createdAt
      updatedAt
    }
  }
`;
export const listGameNames = /* GraphQL */ `
  query ListGameNames(
    $filter: ModelGameNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        Name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      ID
      Name
      Location
      GameName
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        Name
        Location
        GameName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupMember = /* GraphQL */ `
  query GetGroupMember($id: ID!) {
    getGroupMember(id: $id) {
      id
      ID
      GroupID
      MemberID
      createdAt
      updatedAt
    }
  }
`;
export const listGroupMembers = /* GraphQL */ `
  query ListGroupMembers(
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        GroupID
        MemberID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      ID
      Name
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        Name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      ID
      FirstName
      LastName
      Alias
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        FirstName
        LastName
        Alias
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      ID
      Player1ID
      Player2ID
      Name
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ID
        Player1ID
        Player2ID
        Name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
