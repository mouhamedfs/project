import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IImmo, defaultValue } from 'app/shared/model/immobilisation.model';

export const ACTION_TYPES = {
  FETCH_IMMO_LIST: 'immo/FETCH_IMMO_LIST',
  FETCH_IMMO: 'immo/FETCH_IMMO',
  CREATE_IMMO: 'immo/CREATE_IMMO',
  UPDATE_IMMO: 'immo/UPDATE_IMMO',
  DELETE_IMMO: 'immo/DELETE_IMMO',
  RESET: 'immo/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IImmo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
  totalItems: 0,
};

export type ImmoState = Readonly<typeof initialState>;

// Reducer

export default (state: ImmoState = initialState, action): ImmoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_IMMO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_IMMO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_IMMO):
    case REQUEST(ACTION_TYPES.UPDATE_IMMO):
    case REQUEST(ACTION_TYPES.DELETE_IMMO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_IMMO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_IMMO):
    case FAILURE(ACTION_TYPES.CREATE_IMMO):
    case FAILURE(ACTION_TYPES.UPDATE_IMMO):
    case FAILURE(ACTION_TYPES.DELETE_IMMO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_IMMO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_IMMO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_IMMO):
    case SUCCESS(ACTION_TYPES.UPDATE_IMMO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_IMMO):
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

const apiUrl = 'api/immo';

// Actions

export const getEntities: ICrudGetAllAction<IImmo> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_IMMO_LIST,
    payload: axios.get<IImmo>(requestUrl),
  };
};

export const getEntity: ICrudGetAction<IImmo> = immo => {
  const requestUrl = `${apiUrl}/${immo}`;
  return {
    type: ACTION_TYPES.FETCH_IMMO,
    payload: axios.get<IImmo>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IImmo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_IMMO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IImmo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_IMMO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IImmo> = immo => async dispatch => {
  const requestUrl = `${apiUrl}/${immo}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_IMMO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
