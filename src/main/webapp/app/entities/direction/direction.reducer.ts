import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IDirection, defaultValue } from 'app/shared/model/direction.model';

export const ACTION_TYPES = {
  FETCH_DIRECTION_LIST: 'direction/FETCH_DIRECTION_LIST',
  FETCH_DIRECTION: 'direction/FETCH_DIRECTION',
  CREATE_DIRECTION: 'direction/CREATE_DIRECTION',
  UPDATE_DIRECTION: 'direction/UPDATE_DIRECTION',
  DELETE_DIRECTION: 'direction/DELETE_DIRECTION',
  RESET: 'direction/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IDirection>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type DirectionState = Readonly<typeof initialState>;

// Reducer

export default (state: DirectionState = initialState, action): DirectionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_DIRECTION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_DIRECTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_DIRECTION):
    case REQUEST(ACTION_TYPES.UPDATE_DIRECTION):
    case REQUEST(ACTION_TYPES.DELETE_DIRECTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_DIRECTION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_DIRECTION):
    case FAILURE(ACTION_TYPES.CREATE_DIRECTION):
    case FAILURE(ACTION_TYPES.UPDATE_DIRECTION):
    case FAILURE(ACTION_TYPES.DELETE_DIRECTION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DIRECTION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DIRECTION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_DIRECTION):
    case SUCCESS(ACTION_TYPES.UPDATE_DIRECTION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.DELETE_DIRECTION):
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

const apiUrl = 'api/direction';

// Actions

export const getEntities: ICrudGetAllAction<IDirection> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_DIRECTION_LIST,
  payload: axios.get<IDirection>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getDirection: ICrudGetAllAction<IDirection> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_DIRECTION_LIST,
  payload: axios.get<IDirection>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IDirection> = cdir => {
  const requestUrl = `${apiUrl}/${cdir}`;
  return {
    type: ACTION_TYPES.FETCH_DIRECTION,
    payload: axios.get<IDirection>(requestUrl),
  };
};

export const getUniqueDirection: ICrudGetAction<IDirection> = cdir => {
  const requestUrl = `${apiUrl}/${cdir}`;
  return {
    type: ACTION_TYPES.FETCH_DIRECTION,
    payload: axios.get<IDirection>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IDirection> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_DIRECTION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IDirection> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_DIRECTION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IDirection> = cdir => async dispatch => {
  const requestUrl = `${apiUrl}/${cdir}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_DIRECTION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
