import React from 'react';
import {HashRouter, Route,link, switch } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "../streams/streamCreate";
import StreamDelete from "../streams/streamDelete";
import StreamEdit from "../streams/streamEdit";
import StreamList from "../streams/streamList";
import StreamShow from "../streams/streamShow";

 

const App = ()=>{
    return(
        <div className = "ui container">
            <HashRouter>
                
                <div>
                    <Header/>
                    <switch>
                    <Route exact path="/" component={StreamList}/>
                    <Route exact path="/streams/new" component={StreamCreate} />
                    <Route exact path="/streams/edit" component={StreamEdit} />
                    <Route exact path="/streams/delete" component={StreamDelete}/>
                    <Route exact path="/streams/show" component={StreamShow}/>
                    </switch>
                </div>
        
            </HashRouter>
        </div>
        )
}

export default App;
