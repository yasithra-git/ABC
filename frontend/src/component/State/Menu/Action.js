

import { api } from "../../config/api";
import{
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    CREATE_MENU_ITEM_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
} from "./ActionType";

export const createManuItem = ({menu,jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.post("api/admin/food", menu,{
                headers: {
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
            console.log("create menu item", data);
        } catch (error) {
            console.log("create menu item error", error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
                &nonveg=${reqData.nonveg}
                &seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
                {
                headers: {
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,payload:data});
            console.log("get menu item", data);
        } catch (error) {
            console.log("get menu item error", error);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,payload:error});
        }
    };
};

export const searchManuItem = ({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.get(`api/food/search?name=${keyword}`,{
                headers: {
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("data ------------", data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
            
        } catch (error) {
            console.log("can not found search menu item error", error);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

export const updateManuItemsAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/food/${foodId}`,{},
                {
                headers: {
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("update menu items availability", data);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
            
        } catch (error) {
            console.log("error", error);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error});
        }
    };
};

export const deleteFoodAction = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.delete(`/api/admin/food/${foodId}`,
                {
                headers: {
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("delete food", data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:foodId});
            
        } catch (error) {
            console.log("food delete error", error);
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};