import React from 'react';
import {Button} from 'antd';
import {Link, useRouteMatch} from 'react-router-dom'
export default function() {
    let match = useRouteMatch();
    return (<div>
         <div><Link to={`${match.url}/storyline`}><Button type="primary">Create Storyline</Button></Link></div>
        <div><Link to={`${match.url}/script`}><Button type="primary">Create Script</Button></Link></div>
    </div>)
}