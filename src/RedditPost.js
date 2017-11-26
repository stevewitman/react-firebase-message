import React from 'react';

const style = {display: 'flex', flexDirection: 'column', marginBottom: 30}

export default (props) => {
    return <div style={style}>
        <a href="http:/google.com">{props.title}</a>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{marginRight: 30}}>{props.comments} Comments</p>
            <p>Submitted {props.submitted.fromNow()}</p>
        </div>
    </div>
}