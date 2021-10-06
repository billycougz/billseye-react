/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateGameName = /* GraphQL */ `
  subscription OnCreateGameName {
    onCreateGameName {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGameName = /* GraphQL */ `
  subscription OnUpdateGameName {
    onUpdateGameName {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGameName = /* GraphQL */ `
  subscription OnDeleteGameName {
    onDeleteGameName {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateGroupMember = /* GraphQL */ `
  subscription OnCreateGroupMember {
    onCreateGroupMember {
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
export const onUpdateGroupMember = /* GraphQL */ `
  subscription OnUpdateGroupMember {
    onUpdateGroupMember {
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
export const onDeleteGroupMember = /* GraphQL */ `
  subscription OnDeleteGroupMember {
    onDeleteGroupMember {
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
