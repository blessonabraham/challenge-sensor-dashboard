import { FunctionComponent } from "react"
import * as React from 'react'
import { SideMenu } from "./SideMenu";
import { Header } from "./Header";

export const HeaderAndMenu = (WrappedComponent: FunctionComponent) => {
  class HigherOrderComponent extends React.Component {
    render() {
      return <>
        <Header />
        <div className="flex flex-row">
          <SideMenu />
          <div className="container mx-auto px-8 py-8">
            <WrappedComponent />
          </div>
        </div>
      </>;
    }
  }
  return HigherOrderComponent;
}