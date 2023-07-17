import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({ value, index, children }) => {
     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               id={`vertical-tabpanel-${index}`}
               aria-labelledby={`vertical-tab-${index}`}
          >
               {value === index && <div>{children}</div>}
          </div>
     );
};

TabPanel.propTypes = {
     value: PropTypes.number.isRequired,
     index: PropTypes.number.isRequired,
     children: PropTypes.node.isRequired,
};

export default TabPanel;
