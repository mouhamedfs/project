import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ILocalisation, defaultValue } from 'app/shared/model/localisation.model';

export const ACTION_TYPES = {
  FETCH_LOCALISATION_LIST: 'localisation/FETCH_LOCALISATION_LIST',
  FETCH_LOCALISATION: 'localisation/FETCH_LOCALISATION',
  CREATE_LOCALISATION: 'localisation/CREATE_LOCALISATION',
  UPDATE_LOCALISATION: 'localisation/UPDATE_LOCALISATION',
  DELETE_LOCALISATION: 'localisation/DELETE_LOCALISATION',
  RESET: 'localisation/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ILocalisation>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type LocalisationState = Readonly<typeof initialState>;

// Reducer

export default (state: LocalisationState = initialState, action): LocalisationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_LOCALISATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_LOCALISATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_LOCALISATION):
    case REQUEST(ACTION_TYPES.UPDATE_LOCALISATION):
    case REQUEST(ACTION_TYPES.DELETE_LOCALISATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_LOCALISATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_LOCALISATION):
    case FAILURE(ACTION_TYPES.CREATE_LOCALISATION):
    case FAILURE(ACTION_TYPES.UPDATE_LOCALISATION):
    case FAILURE(ACTION_TYPES.DELETE_LOCALISATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_LOCALISATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_LOCALISATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_LOCALISATION):
    case SUCCESS(ACTION_TYPES.UPDATE_LOCALISATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_LOCALISATION):
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

const apiUrl = 'api/localisation';

// Actions

export const getEntities: ICrudGetAllAction<ILocalisation> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_LOCALISATION_LIST,
  payload: axios.get<ILocalisation>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getLocalisations: ICrudGetAllAction<ILocalisation> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_LOCALISATION_LIST,
  payload: axios.get<ILocalisation>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ILocalisation> = codeLocal => {
  const requestUrl = `${apiUrl}/${codeLocal}`;
  return {
    type: ACTION_TYPES.FETCH_LOCALISATION,
    payload: axios.get<ILocalisation>(requestUrl),
  };
};

export const getUniqueLocalisation: ICrudGetAction<ILocalisation> = codeLocal => {
  const requestUrl = `${apiUrl}/${codeLocal}`;
  return {
    type: ACTION_TYPES.FETCH_LOCALISATION,
    payload: axios.get<ILocalisation>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ILocalisation> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_LOCALISATION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ILocalisation> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_LOCALISATION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ILocalisation> = codeLocal => async dispatch => {
  const requestUrl = `${apiUrl}/${codeLocal}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_LOCALISATION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
