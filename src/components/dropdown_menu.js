import React from "react";
import {any} from "prop-types";
import { Popup } from 'semantic-ui-react';

export default function DropdownMenu({trigger, children, ...props}) {
  return (
    <Popup position="bottom left" basic trigger={trigger} offset={[-25, 0]} className="dropdown light" {...props}>
        {children}
    </Popup>
  )
}

DropdownMenu.propTypes = {
  button: any,
  children: any,
};
