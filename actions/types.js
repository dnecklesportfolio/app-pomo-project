import {
    FACEBOOK_LOGIN_SUCCESS
} from './types';

/*

Facebook Login Action Creator
See if the token exists
    If yes then dispatch FB Login Success
    If no then open FB Login Wait for token
        save token to asynctorage
*/

/*
AsyncStorage.setItem('fb_token", token)
Async Storage.getItem('fb_token'.)
When user restarts the token gets dumped, we must persist it ourself
This returns a promise and we have to wait for the promise
*/
export const facebookLogin = () =>  async  dispatch =>  {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            // Dispatch an action saying FB Login is done
            dispatch( {type: FACEBOOK_LOGIN_SUCCESS, payload:token})
        } else {
            // Start up FB Login process to get the token
            doFacebookLogin();
        }
    }

const doFacebookLogin = async () => {
let result = await Facebook.loginInWithReadPermissionsAsync();
};

/* need redux thunk and redux and promise to deal with asyn function */
