import React from "react";

import { compose } from "@reduxjs/toolkit"

import {withPersistReducer} from "./store/with-persist-reducer";
import {withRouter} from "./router";

export const withProviders = compose<React.ComponentType>(withPersistReducer, withRouter)