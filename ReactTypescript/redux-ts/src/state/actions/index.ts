import { ActionType } from "../action-types";

// interface Action {
//   type: string;
//   payload?: any;
// }

//search_repositories action gets string payload
//search_repositories_success action gets string[] payload
//search_repositories_error action gets string payload

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;



//if project grows add all Action in to separate file like 'Repositories.ts' inside action directory and move above interface into it and export from here