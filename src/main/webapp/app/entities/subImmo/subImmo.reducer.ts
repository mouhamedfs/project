import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ISubImmo, defaultValue } from 'app/shared/model/subImmo.model';

export const ACTION_TYPES = {
  FETCH_SUBIMMO_LIST: 'subImmo/FETCH_SUBIMMO_LIST',
  FETCH_SUBIMMO: 'subImmo/FETCH_SUBIMMO',
  CREATE_SUBIMMO: 'subImmo/CREATE_SUBIMMO',
  UPDATE_SUBIMMO: 'subImmo/UPDATE_SUBIMMO',
  DELETE_SUBIMMO: 'subImmo/DELETE_SUBIMMO',
  RESET: 'subImmo/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ISubImmo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type SubImmoState = Readonly<typeof initialState>;

// Reducer

export default (state: SubImmoState = initialState, action): SubImmoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SUBIMMO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_SUBIMMO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_SUBIMMO):
    case REQUEST(ACTION_TYPES.UPDATE_SUBIMMO):
    case REQUEST(ACTION_TYPES.DELETE_SUBIMMO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_SUBIMMO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_SUBIMMO):
    case FAILURE(ACTION_TYPES.CREATE_SUBIMMO):
    case FAILURE(ACTION_TYPES.UPDATE_SUBIMMO):
    case FAILURE(ACTION_TYPES.DELETE_SUBIMMO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SUBIMMO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SUBIMMO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_SUBIMMO):
    case SUCCESS(ACTION_TYPES.UPDATE_SUBIMMO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_SUBIMMO):
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

export const getEntities: ICrudGetAllAction<ISubImmo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SUBIMMO_LIST,
  payload: axios.get<ISubImmo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getSubImmoISubImmo: ICrudGetAllAction<ISubImmo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SUBIMMO_LIST,
  payload: axios.get<ISubImmo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ISubImmo> = numSub => {
  const requestUrl = `${apiUrl}/${numSub}`;
  return {
    type: ACTION_TYPES.FETCH_SUBIMMO,
    payload: axios.get<ISubImmo>(requestUrl),
  };
};

export const getUniqueSubvention: ICrudGetAction<ISubImmo> = numSub => {
  const requestUrl = `${apiUrl}/${numSub}`;
  return {
    type: ACTION_TYPES.FETCH_SUBIMMO,
    payload: axios.get<ISubImmo>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ISubImmo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_SUBIMMO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ISubImmo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_SUBIMMO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ISubImmo> = numSub => async dispatch => {
  const requestUrl = `${apiUrl}/${numSub}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_SUBIMMO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
