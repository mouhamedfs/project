import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ISubvention, defaultValue } from 'app/shared/model/subvention.model';

export const ACTION_TYPES = {
  FETCH_SUBVENTION_LIST: 'subvention/FETCH_SUBVENTION_LIST',
  FETCH_SUBVENTION: 'subvention/FETCH_SUBVENTION',
  CREATE_SUBVENTION: 'subvention/CREATE_SUBVENTION',
  UPDATE_SUBVENTION: 'subvention/UPDATE_SUBVENTION',
  DELETE_SUBVENTION: 'subvention/DELETE_SUBVENTION',
  RESET: 'subvention/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ISubvention>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type SubventionState = Readonly<typeof initialState>;

// Reducer

export default (state: SubventionState = initialState, action): SubventionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SUBVENTION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_SUBVENTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_SUBVENTION):
    case REQUEST(ACTION_TYPES.UPDATE_SUBVENTION):
    case REQUEST(ACTION_TYPES.DELETE_SUBVENTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_SUBVENTION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_SUBVENTION):
    case FAILURE(ACTION_TYPES.CREATE_SUBVENTION):
    case FAILURE(ACTION_TYPES.UPDATE_SUBVENTION):
    case FAILURE(ACTION_TYPES.DELETE_SUBVENTION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SUBVENTION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SUBVENTION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_SUBVENTION):
    case SUCCESS(ACTION_TYPES.UPDATE_SUBVENTION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_SUBVENTION):
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

const apiUrl = 'api/subvention';

// Actions

export const getEntities: ICrudGetAllAction<ISubvention> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SUBVENTION_LIST,
  payload: axios.get<ISubvention>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getSubs: ICrudGetAllAction<ISubvention> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SUBVENTION_LIST,
  payload: axios.get<ISubvention>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ISubvention> = numSub => {
  const requestUrl = `${apiUrl}/${numSub}`;
  return {
    type: ACTION_TYPES.FETCH_SUBVENTION,
    payload: axios.get<ISubvention>(requestUrl),
  };
};

export const getUniqueSubvention: ICrudGetAction<ISubvention> = numSub => {
  const requestUrl = `${apiUrl}/${numSub}`;
  return {
    type: ACTION_TYPES.FETCH_SUBVENTION,
    payload: axios.get<ISubvention>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ISubvention> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_SUBVENTION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ISubvention> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_SUBVENTION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ISubvention> = numSub => async dispatch => {
  const requestUrl = `${apiUrl}/${numSub}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_SUBVENTION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
