import {MEMBERS} from '../data/member';
import {PROMOTIONS} from '../data/promotion';
import {SERVICES} from '../data/services';

export const initialState = {
    members: MEMBERS,
    promotions: PROMOTIONS,
    services: SERVICES
};

export const Reducer = (state = initialState, action) => {
    return state;
};