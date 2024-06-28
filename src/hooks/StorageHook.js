import {createContext} from "react";

export const InMemoryStorage = {
    getItem: (key, type='sessionStorage') => {
        if (type === "localStorage") {
            return window.localStorage.getItem(key)
        } else if (type === "sessionStorage") {
            return window.sessionStorage.getItem(key)
        }
    },
    setItem: (key, item, type='sessionStorage') => {
        if (type === "localStorage") {
            return window.localStorage.setItem(key, item)
        } else if (type === "sessionStorage") {
            return window.sessionStorage.setItem(key, item)
        }
    },
    removeItem: (key, type='sessionStorage') => {
        if (type === "localStorage") {
            return window.localStorage.removeItem(key)
        } else if (type === "sessionStorage") {
            return window.sessionStorage.removeItem(key)
        }
    },
    clear: (type= "sessionStorage") => {
        if (type === "localStorage") {
            return window.localStorage.clear()
        } else if (type === "sessionStorage") {
            return window.sessionStorage.clear()
        }
    }
}

export const StorageContext = createContext();
