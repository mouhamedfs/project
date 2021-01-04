import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IAgence, defaultValue } from 'app/shared/model/agence.model';

export const ACTION_TYPES = {
  FETCH_AGENCE_LIST: 'agence/FETCH_AGENCE_LIST',
  FETCH_AGENCE: 'agence/FETCH_AGENCE',
  CREATE_AGENCE: 'agence/CREATE_AGENCE',
  UPDATE_AGENCE: 'agence/UPDATE_AGENCE',
  DELETE_AGENCE: 'agence/DELETE_AGENCE',
  RESET: 'agence/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAgence>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AgenceState = Readonly<typeof initialState>;

// Reducer

export default (state: AgenceState = initialState, action): AgenceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AGENCE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AGENCE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AGENCE):
    case REQUEST(ACTION_TYPES.UPDATE_AGENCE):
    case REQUEST(ACTION_TYPES.DELETE_AGENCE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AGENCE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AGENCE):
    case FAILURE(ACTION_TYPES.CREATE_AGENCE):
    case FAILURE(ACTION_TYPES.UPDATE_AGENCE):
    case FAILURE(ACTION_TYPES.DELETE_AGENCE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AGENCE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AGENCE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AGENCE):
    case SUCCESS(ACTION_TYPES.UPDATE_AGENCE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.DELETE_AGENCE):
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

const apiUrl = 'api/agence';

// Actions

export const getEntities: ICrudGetAllAction<IAgence> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AGENCE_LIST,
  payload: axios.get<IAgence>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAgence> = age => {
  const requestUrl = `${apiUrl}/${age}`;
  return {
    type: ACTION_TYPES.FETCH_AGENCE,
    payload: axios.get<IAgence>(requestUrl),
  };
};

export const getUniqueAgence: ICrudGetAction<IAgence> = age => {
  const requestUrl = `${apiUrl}/${age}`;
  return {
    type: ACTION_TYPES.FETCH_AGENCE,
    payload: axios.get<IAgence>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAgence> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AGENCE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAgence> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AGENCE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAgence> = age => async dispatch => {
  const requestUrl = `${apiUrl}/${age}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AGENCE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
