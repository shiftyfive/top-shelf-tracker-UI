import React from 'react';


const AUTH_URL = window.location.host.indexOf('localhost') > -1 ? 'http://localhost:3000/' : null;

export default AUTH_URL;