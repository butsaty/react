import React, { Component } from 'react';

const Component1 = function () { };
Component1.prototype = Object.create(Component.prototype);
Component1.prototype.render = function () {
    return <div>
        <h1>Component 1</h1>
        <p>powered by create Component via prototype</p>
    </div>
}

export default Component1;