import React from "react";

import { compose } from "@reduxjs/toolkit"

import {withStore} from "./store/with-store";
import {withRouter} from "./router";



export const withProviders = compose<React.ComponentType>(withStore, withRouter)