import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IAuthority, defaultValue } from 'app/shared/model/authority.model';

export const ACTION_TYPES = {
  FETCH_AUTHORITY_LIST: 'authority/FETCH_AUTHORITY_LIST',
  FETCH_AUTHORITY: 'authority/FETCH_AUTHORITY',
  CREATE_AUTHORITY: 'authority/CREATE_AUTHORITY',
  UPDATE_AUTHORITY: 'authority/UPDATE_AUTHORITY',
  DELETE_AUTHORITY: 'authority/DELETE_AUTHORITY',
  RESET: 'authority/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAuthority>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AuthorityState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthorityState = initialState, action): AuthorityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AUTHORITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AUTHORITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AUTHORITY):
    case REQUEST(ACTION_TYPES.UPDATE_AUTHORITY):
    case REQUEST(ACTION_TYPES.DELETE_AUTHORITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AUTHORITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AUTHORITY):
    case FAILURE(ACTION_TYPES.CREATE_AUTHORITY):
    case FAILURE(ACTION_TYPES.UPDATE_AUTHORITY):
    case FAILURE(ACTION_TYPES.DELETE_AUTHORITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AUTHORITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AUTHORITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AUTHORITY):
    case SUCCESS(ACTION_TYPES.UPDATE_AUTHORITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.DELETE_AUTHORITY):
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

const apiUrl = 'api/authority';

// Actions

export const getEntities: ICrudGetAllAction<IAuthority> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AUTHORITY_LIST,
  payload: axios.get<IAuthority>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAuthority> = name => {
  const requestUrl = `${apiUrl}/${name}`;
  return {
    type: ACTION_TYPES.FETCH_AUTHORITY,
    payload: axios.get<IAuthority>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAuthority> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AUTHORITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAuthority> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AUTHORITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAuthority> = name => async dispatch => {
  const requestUrl = `${apiUrl}/${name}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AUTHORITY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
