import React, { Component } from 'react';

export const Component1 = () => {
    return React.createElement('div', null,
        React.createElement('h1', null, 'Component'),
        React.createElement('p', null, 'powered by React.createElement')
    );
};