/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
      date
      createdAt
      updatedAt
    }
  }
`;
export const createGameName = /* GraphQL */ `
  mutation CreateGameName(
    $input: CreateGameNameInput!
    $condition: ModelGameNameConditionInput
  ) {
    createGameName(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateGameName = /* GraphQL */ `
  mutation UpdateGameName(
    $input: UpdateGameNameInput!
    $condition: ModelGameNameConditionInput
  ) {
    updateGameName(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteGameName = /* GraphQL */ `
  mutation DeleteGameName(
    $input: DeleteGameNameInput!
    $condition: ModelGameNameConditionInput
  ) {
    deleteGameName(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createGroupMember = /* GraphQL */ `
  mutation CreateGroupMember(
    $input: CreateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    createGroupMember(input: $input, condition: $condition) {
      id
      groupId
      memberId
      group {
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
      member {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateGroupMember = /* GraphQL */ `
  mutation UpdateGroupMember(
    $input: UpdateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    updateGroupMember(input: $input, condition: $condition) {
      id
      groupId
      memberId
      group {
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
      member {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroupMember = /* GraphQL */ `
  mutation DeleteGroupMember(
    $input: DeleteGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    deleteGroupMember(input: $input, condition: $condition) {
      id
      groupId
      memberId
      group {
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
      member {
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
      createdAt
      updatedAt
    }
  }
`;
