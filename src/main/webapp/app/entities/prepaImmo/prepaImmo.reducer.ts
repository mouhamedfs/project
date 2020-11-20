import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IPrepaImmo, defaultValue } from 'app/shared/model/prepaImmo.model';

export const ACTION_TYPES = {
  FETCH_PREPAIMMO_LIST: 'prepaImmo/FETCH_PREPAIMMO_LIST',
  FETCH_PREPAIMMO: 'prepaImmo/FETCH_PREPAIMMO',
  CREATE_PREPAIMMO: 'prepaImmo/CREATE_PREPAIMMO',
  UPDATE_PREPAIMMO: 'prepaImmo/UPDATE_PREPAIMMO',
  DELETE_PREPAIMMO: 'prepaImmo/DELETE_PREPAIMMO',
  RESET: 'prepaImmo/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IPrepaImmo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type PrepaImmoState = Readonly<typeof initialState>;

// Reducer

export default (state: PrepaImmoState = initialState, action): PrepaImmoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PREPAIMMO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_PREPAIMMO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_PREPAIMMO):
    case REQUEST(ACTION_TYPES.UPDATE_PREPAIMMO):
    case REQUEST(ACTION_TYPES.DELETE_PREPAIMMO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PREPAIMMO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_PREPAIMMO):
    case FAILURE(ACTION_TYPES.CREATE_PREPAIMMO):
    case FAILURE(ACTION_TYPES.UPDATE_PREPAIMMO):
    case FAILURE(ACTION_TYPES.DELETE_PREPAIMMO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PREPAIMMO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PREPAIMMO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_PREPAIMMO):
    case SUCCESS(ACTION_TYPES.UPDATE_PREPAIMMO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_PREPAIMMO):
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

const apiUrl = 'api/prepaImmo';

// Actions

export const getEntities: ICrudGetAllAction<IPrepaImmo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_PREPAIMMO_LIST,
  payload: axios.get<IPrepaImmo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IPrepaImmo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_PREPAIMMO,
    payload: axios.get<IPrepaImmo>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IPrepaImmo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_PREPAIMMO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IPrepaImmo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_PREPAIMMO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IPrepaImmo> = numero => async dispatch => {
  const requestUrl = `${apiUrl}/${numero}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_PREPAIMMO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
