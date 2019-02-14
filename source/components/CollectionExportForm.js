import React from 'react';

const formStyle = {
    display: 'inline-block'
};

const CollectionExportForm = ({ htmlMarkup }) => (
    <form
        action="https://codepen.io/pen/define"
        method="POST"
        target="_blank"
        style={formStyle}
    >
        <input type="hidden" name="data" value={htmlMarkup}/>
        <button type="submit" className="btn btn-primary mr-2">
            Export as HTML
        </button>
    </form>
);

export default CollectionExportForm;
