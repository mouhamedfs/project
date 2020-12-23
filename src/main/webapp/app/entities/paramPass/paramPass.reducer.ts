import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';
import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IParamPass, defaultValue } from 'app/shared/model/paramPass.model';

export const ACTION_TYPES = {
  FETCH_PARAMPASS_LIST: 'paramPass/FETCH_PARAMPASS_LIST',
  FETCH_PARAMPASS: 'paramPass/FETCH_PARAMPASS',
  CREATE_PARAMPASS: 'paramPass/CREATE_PARAMPASS',
  UPDATE_PARAMPASS: 'paramPass/UPDATE_PARAMPASS',
  DELETE_PARAMPASS: 'paramPass/DELETE_PARAMPASS',
  RESET: 'paramPass/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IParamPass>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ParamPassState = Readonly<typeof initialState>;

// Reducer

export default (state: ParamPassState = initialState, action): ParamPassState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PARAMPASS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_PARAMPASS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_PARAMPASS):
    case REQUEST(ACTION_TYPES.UPDATE_PARAMPASS):
    case REQUEST(ACTION_TYPES.DELETE_PARAMPASS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PARAMPASS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_PARAMPASS):
    case FAILURE(ACTION_TYPES.CREATE_PARAMPASS):
    case FAILURE(ACTION_TYPES.UPDATE_PARAMPASS):
    case FAILURE(ACTION_TYPES.DELETE_PARAMPASS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PARAMPASS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PARAMPASS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_PARAMPASS):
    case SUCCESS(ACTION_TYPES.UPDATE_PARAMPASS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_PARAMPASS):
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

const apiUrl = 'api/paramPass';

// Actions

export const getEntities: ICrudGetAllAction<IParamPass> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_PARAMPASS_LIST,
  payload: axios.get<IParamPass>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IParamPass> = numNumbers => {
  const requestUrl = `${apiUrl}/${numNumbers}`;
  return {
    type: ACTION_TYPES.FETCH_PARAMPASS,
    payload: axios.get<IParamPass>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IParamPass> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_PARAMPASS,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IParamPass> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_PARAMPASS,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IParamPass> = numNumbers => async dispatch => {
  const requestUrl = `${apiUrl}/${numNumbers}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_PARAMPASS,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
