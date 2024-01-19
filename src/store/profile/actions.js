import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

export const updateProfile = (profile) => {
    return {type: UPDATE_PROFILE, payload: profile};
}
export const toggleVisibleProfile = (profile) => {
    return {type: TOGGLE_VISIBLE_PROFILE, payload: profile};
}