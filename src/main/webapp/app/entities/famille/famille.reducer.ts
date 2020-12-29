import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IFamille, defaultValue } from 'app/shared/model/famille.model';

export const ACTION_TYPES = {
  FETCH_FAMILLE_LIST: 'famille/FETCH_FAMILLE_LIST',
  FETCH_FAMILLE: 'famille/FETCH_FAMILLE',
  CREATE__FAMILLE: 'famille/CREATE__FAMILLE',
  UPDATE__FAMILLE: 'famille/UPDATE__FAMILLE',
  DELETE__FAMILLE: 'famille/DELETE__FAMILLE',
  RESET: 'famille/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFamille>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type FamilleState = Readonly<typeof initialState>;

// Reducer

export default (state: FamilleState = initialState, action): FamilleState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FAMILLE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FAMILLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE__FAMILLE):
    case REQUEST(ACTION_TYPES.UPDATE__FAMILLE):
    case REQUEST(ACTION_TYPES.DELETE__FAMILLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FAMILLE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FAMILLE):
    case FAILURE(ACTION_TYPES.CREATE__FAMILLE):
    case FAILURE(ACTION_TYPES.UPDATE__FAMILLE):
    case FAILURE(ACTION_TYPES.DELETE__FAMILLE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FAMILLE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FAMILLE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE__FAMILLE):
    case SUCCESS(ACTION_TYPES.UPDATE__FAMILLE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.DELETE__FAMILLE):
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

const apiUrl = 'api/famille';

// Actions

export const getEntities: ICrudGetAllAction<IFamille> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FAMILLE_LIST,
  payload: axios.get<IFamille>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getFamille: ICrudGetAllAction<IFamille> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FAMILLE_LIST,
  payload: axios.get<IFamille>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IFamille> = cfam => {
  const requestUrl = `${apiUrl}/${cfam}`;
  return {
    type: ACTION_TYPES.FETCH_FAMILLE,
    payload: axios.get<IFamille>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFamille> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE__FAMILLE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFamille> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE__FAMILLE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFamille> = cfam => async dispatch => {
  const requestUrl = `${apiUrl}/${cfam}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE__FAMILLE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
