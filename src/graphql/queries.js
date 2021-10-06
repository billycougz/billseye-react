/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      gameNameId
      gameName {
        id
        name
        createdAt
        updatedAt
      }
      locationId
      location {
        id
        name
        createdAt
        updatedAt
      }
      winnerId
      winner {
        id
        firstName
        lastName
        alias
        groups {
          nextToken
        }
        createdAt
        updatedAt
      }
      loserId
      loser {
        id
        firstName
        lastName
        alias
        groups {
          nextToken
        }
        createdAt
        updatedAt
      }
      duration
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
        gameNameId
        gameName {
          id
          name
          createdAt
          updatedAt
        }
        locationId
        location {
          id
          name
          createdAt
          updatedAt
        }
        winnerId
        winner {
          id
          firstName
          lastName
          alias
          createdAt
          updatedAt
        }
        loserId
        loser {
          id
          firstName
          lastName
          alias
          createdAt
          updatedAt
        }
        duration
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
      name
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
        name
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
      name
      locationId
      location {
        id
        name
        createdAt
        updatedAt
      }
      gameNameId
      gameName {
        id
        name
        createdAt
        updatedAt
      }
      members {
        items {
          id
          groupId
          memberId
          createdAt
          updatedAt
        }
        nextToken
      }
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
        name
        locationId
        location {
          id
          name
          createdAt
          updatedAt
        }
        gameNameId
        gameName {
          id
          name
          createdAt
          updatedAt
        }
        members {
          nextToken
        }
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
      name
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
        name
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
      firstName
      lastName
      alias
      groups {
        items {
          id
          groupId
          memberId
          createdAt
          updatedAt
        }
        nextToken
      }
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
        firstName
        lastName
        alias
        groups {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
