import React, { Component } from "react";
import collection_icon from '../images/collection_icon.svg';
import decks_icon from '../images/decks_icon.svg';
import decklist_icon from '../images/decklist_icon.svg';
import DisplayIcon from "../components/displayicon";

/**
 * Component that decides what icon to display based on props recieved from SingleSection.js
 */

class RenderIcons extends Component {
  render() {
    let usedIcon;
    const { image } = this.props;
    switch (image) {
      case "cardArr":
        usedIcon = collection_icon;
        return <DisplayIcon icon={usedIcon}/>;
      case "decks_icon":
          usedIcon = decks_icon;
          return <DisplayIcon icon={usedIcon}/>;
      case "decklist_icon":
          usedIcon = decklist_icon;
          return <DisplayIcon icon={usedIcon}/>;
      default:
        return "";
    }
  }
}
export default RenderIcons;