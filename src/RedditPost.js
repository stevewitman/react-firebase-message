import React from 'react';

const style = {display: 'flex', flexDirection: 'column', marginBottom: 30}

export default () => {
    return <div style={style}>
        <a href="http:/google.com">A Reddit Post</a>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{marginRight: 30}}>45 Comments</p>
            <p>Submitted 5 minutes ago</p>
        </div>
    </div>
}