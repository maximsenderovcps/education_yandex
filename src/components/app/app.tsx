import React from 'react';

import {withProviders} from "components/services/providers";

import {Pages} from "components/page";

import './app.module.css'


const App = () => {

    return (
        <Pages/>
    );
}

export default withProviders(App);