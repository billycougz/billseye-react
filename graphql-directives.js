import gql from 'graphql-tag';

const clientSchemaExtensions = gql`
    directive @model on OBJECT
    directive @key repeatable on OBJECT
    directive @connection on FIELD_DEFINITION
    
    scalar AWSDateTime
`;
