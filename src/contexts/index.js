import React from 'react';
const contexts = {

};
export default function setContext(name, value) {
    if (!contexts[name]) {
        contexts[name] = React.createContext(value);
    }
    return contexts[name];
};
export const getContexts = (name) => contexts[name];