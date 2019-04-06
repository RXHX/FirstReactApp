import React from "react";
import {Route,Switch} from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Search from "../Search/Search";

class Container extends React.Component{
render()
{
return(
<div>
<Switch>
<Route exact path ="/"component = {Home}></Route>
<Route path = "/about" component = {About}></Route>
<Route path = "/contact" component = {Contact}></Route>
<Route path = "/search" component = {Search}></Route>
<Route component = {NotFound}></Route>
</Switch>
</div>
)
}
}
export default Container;