import React from 'react';
import './CollectionExportForm.css';

const CollectionExportForm = ({ htmlMarkup }) => (
    <form
        action="https://codepen.io/pen/define"
        method="POST"
        target="_blank"
        className="CollectionExportForm"
    >
        <input type="hidden" name="data" value={htmlMarkup}/>
        <button type="submit" className="btn btn-primary mr-2">
            Export as HTML
        </button>
    </form>
);

export default CollectionExportForm;
