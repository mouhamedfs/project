import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IDepartement, defaultValue } from 'app/shared/model/departement.model';

export const ACTION_TYPES = {
  FETCH_DEPARTEMENT_LIST: 'departement/FETCH_DEPARTEMENT_LIST',
  FETCH_DEPARTEMENT: 'departement/FETCH_DEPARTEMENT',
  CREATE_DEPARTEMENT: 'departement/CREATE_DEPARTEMENT',
  UPDATE_DEPARTEMENT: 'departement/UPDATE_DEPARTEMENT',
  DELETE_DEPARTEMENT: 'departement/DELETE_DEPARTEMENT',
  RESET: 'departement/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IDepartement>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type DepartementState = Readonly<typeof initialState>;

// Reducer

export default (state: DepartementState = initialState, action): DepartementState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_DEPARTEMENT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_DEPARTEMENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_DEPARTEMENT):
    case REQUEST(ACTION_TYPES.UPDATE_DEPARTEMENT):
    case REQUEST(ACTION_TYPES.DELETE_DEPARTEMENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_DEPARTEMENT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_DEPARTEMENT):
    case FAILURE(ACTION_TYPES.CREATE_DEPARTEMENT):
    case FAILURE(ACTION_TYPES.UPDATE_DEPARTEMENT):
    case FAILURE(ACTION_TYPES.DELETE_DEPARTEMENT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DEPARTEMENT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DEPARTEMENT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_DEPARTEMENT):
    case SUCCESS(ACTION_TYPES.UPDATE_DEPARTEMENT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_DEPARTEMENT):
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

const apiUrl = 'api/departements';

// Actions

export const getEntities: ICrudGetAllAction<IDepartement> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_DEPARTEMENT_LIST,
  payload: axios.get<IDepartement>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IDepartement> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_DEPARTEMENT,
    payload: axios.get<IDepartement>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IDepartement> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_DEPARTEMENT,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IDepartement> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_DEPARTEMENT,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IDepartement> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_DEPARTEMENT,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
