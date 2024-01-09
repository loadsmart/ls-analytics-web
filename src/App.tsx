import React from "react";
import { BrowserRouter} from "react-router-dom";
import Router from './router/router'

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default Application