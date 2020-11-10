import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IPersonne, defaultValue } from 'app/shared/model/personne.model';

export const ACTION_TYPES = {
  FETCH_PERSONNE_LIST: 'personne/FETCH_PERSONNE_LIST',
  FETCH_PERSONNE: 'personne/FETCH_PERSONNE',
  CREATE_PERSONNE: 'personne/CREATE_PERSONNE',
  UPDATE_PERSONNE: 'personne/UPDATE_PERSONNE',
  DELETE_PERSONNE: 'personne/DELETE_PERSONNE',
  RESET: 'personne/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IPersonne>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type PersonneState = Readonly<typeof initialState>;

// Reducer

export default (state: PersonneState = initialState, action): PersonneState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PERSONNE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_PERSONNE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_PERSONNE):
    case REQUEST(ACTION_TYPES.UPDATE_PERSONNE):
    case REQUEST(ACTION_TYPES.DELETE_PERSONNE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PERSONNE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_PERSONNE):
    case FAILURE(ACTION_TYPES.CREATE_PERSONNE):
    case FAILURE(ACTION_TYPES.UPDATE_PERSONNE):
    case FAILURE(ACTION_TYPES.DELETE_PERSONNE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PERSONNE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PERSONNE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_PERSONNE):
    case SUCCESS(ACTION_TYPES.UPDATE_PERSONNE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_PERSONNE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/personnes';

// Actions

export const getEntities: ICrudGetAllAction<IPersonne> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_PERSONNE_LIST,
  payload: axios.get<IPersonne>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IPersonne> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_PERSONNE,
    payload: axios.get<IPersonne>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IPersonne> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_PERSONNE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IPersonne> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_PERSONNE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IPersonne> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_PERSONNE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
