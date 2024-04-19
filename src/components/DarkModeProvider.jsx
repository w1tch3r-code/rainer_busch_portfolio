import PropTypes from "prop-types";
import { useState } from 'react';
import DarkModeContext from "./DarkModeContext";

const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={[ darkMode, setDarkMode ]}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export default DarkModeProvider;