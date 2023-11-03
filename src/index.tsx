import React from 'react';
import ReactDOM from 'react-dom/client';

import StuffThing from './stuff';

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root") as any);

reactRoot.render(
    <div>
        <StuffThing />
    </div>
);
