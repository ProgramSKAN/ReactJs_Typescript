## Action Creators

- searchRepositories(term)

## Actions

- searchRepositories
- searchRepositoriesSuccess
- searchRepositoriesError

## Action Types

- search_repositories
- search_repositories_success
- search_repositories_error

## Redux store

- repositories

  - data - list of repositories from npm
  - loading - true/false whether we are fetching data
  - error - string, error message if one occurred during fetch

  ***

* src folder

  - components

    - App.tsx
    - RepositoriesList.tsx

      ||

connectd to store only via index.ts

||>

- index.ts
  - reducers
  - action creators
  - middlewares
