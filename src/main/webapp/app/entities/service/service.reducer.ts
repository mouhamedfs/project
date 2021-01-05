import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IService, defaultValue } from 'app/shared/model/service.model';

export const ACTION_TYPES = {
  FETCH_SERVICE_LIST: 'service/FETCH_SERVICE_LIST',
  FETCH_SERVICE: 'service/FETCH_SERVICE',
  CREATE_SERVICE: 'service/CREATE_SERVICE',
  UPDATE_SERVICE: 'service/UPDATE_SERVICE',
  DELETE_SERVICE: 'service/DELETE_SERVICE',
  RESET: 'service/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IService>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ServiceState = Readonly<typeof initialState>;

// Reducer

export default (state: ServiceState = initialState, action): ServiceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SERVICE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_SERVICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_SERVICE):
    case REQUEST(ACTION_TYPES.UPDATE_SERVICE):
    case REQUEST(ACTION_TYPES.DELETE_SERVICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_SERVICE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_SERVICE):
    case FAILURE(ACTION_TYPES.CREATE_SERVICE):
    case FAILURE(ACTION_TYPES.UPDATE_SERVICE):
    case FAILURE(ACTION_TYPES.DELETE_SERVICE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SERVICE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SERVICE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_SERVICE):
    case SUCCESS(ACTION_TYPES.UPDATE_SERVICE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.DELETE_SERVICE):
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

const apiUrl = 'api/service';

// Actions

export const getEntities: ICrudGetAllAction<IService> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SERVICE_LIST,
  payload: axios.get<IService>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getService: ICrudGetAllAction<IService> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SERVICE_LIST,
  payload: axios.get<IService>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IService> = cserv => {
  const requestUrl = `${apiUrl}/${cserv}`;
  return {
    type: ACTION_TYPES.FETCH_SERVICE,
    payload: axios.get<IService>(requestUrl),
  };
};

export const getUniqueService: ICrudGetAction<IService> = cserv => {
  const requestUrl = `${apiUrl}/${cserv}`;
  return {
    type: ACTION_TYPES.FETCH_SERVICE,
    payload: axios.get<IService>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IService> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_SERVICE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IService> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_SERVICE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IService> = cserv => async dispatch => {
  const requestUrl = `${apiUrl}/${cserv}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_SERVICE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
