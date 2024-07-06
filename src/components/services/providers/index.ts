import { compose } from "@reduxjs/toolkit"

import { withStore } from "./store/with-store";
import React from "react";


export const withProviders = compose<React.ComponentType>(withStore)