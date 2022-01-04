import {createContext} from 'react';
import UserCredentials from '../classes/UserCredentials'
export const UserContext = createContext(new UserCredentials(false,null,null));