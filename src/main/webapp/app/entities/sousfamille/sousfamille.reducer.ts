import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ISousFamille, defaultValue } from 'app/shared/model/sousFamille.model';

export const ACTION_TYPES = {
  FETCH_SOUSFAMILLE_LIST: 'ssfamille/FETCH_SOUSFAMILLE_LIST',
  FETCH_SOUSFAMILLE: 'ssfamille/FETCH_SOUSFAMILLE',
  CREATE__SOUSFAMILLE: 'ssfamille/CREATE__SOUSFAMILLE',
  UPDATE__SOUSFAMILLE: 'ssfamille/UPDATE__SOUSFAMILLE',
  DELETE__SOUSFAMILLE: 'ssfamille/DELETE__SOUSFAMILLE',
  RESET: 'ssfamille/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ISousFamille>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type SousFamilleState = Readonly<typeof initialState>;

// Reducer

export default (state: SousFamilleState = initialState, action): SousFamilleState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SOUSFAMILLE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_SOUSFAMILLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE__SOUSFAMILLE):
    case REQUEST(ACTION_TYPES.UPDATE__SOUSFAMILLE):
    case REQUEST(ACTION_TYPES.DELETE__SOUSFAMILLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_SOUSFAMILLE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_SOUSFAMILLE):
    case FAILURE(ACTION_TYPES.CREATE__SOUSFAMILLE):
    case FAILURE(ACTION_TYPES.UPDATE__SOUSFAMILLE):
    case FAILURE(ACTION_TYPES.DELETE__SOUSFAMILLE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SOUSFAMILLE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SOUSFAMILLE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE__SOUSFAMILLE):
    case SUCCESS(ACTION_TYPES.UPDATE__SOUSFAMILLE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.DELETE__SOUSFAMILLE):
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

const apiUrl = 'api/ssfamille';

// Actions

export const getEntities: ICrudGetAllAction<ISousFamille> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SOUSFAMILLE_LIST,
  payload: axios.get<ISousFamille>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ISousFamille> = csfam => {
  const requestUrl = `${apiUrl}/${csfam}`;
  return {
    type: ACTION_TYPES.FETCH_SOUSFAMILLE,
    payload: axios.get<ISousFamille>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ISousFamille> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE__SOUSFAMILLE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ISousFamille> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE__SOUSFAMILLE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ISousFamille> = csfam => async dispatch => {
  const requestUrl = `${apiUrl}/${csfam}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE__SOUSFAMILLE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
