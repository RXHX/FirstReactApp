import React from "react";
import "../Login/Log.css"
class Login extends React.Component{

    constructor()
    {
        super();
        this.savedata = this.savedata.bind(this);
    }
savedata()
{

console.log("Data Logged IN");

}


 render()
{
return(
<div>
<h2 className = "des1">Login</h2>      
<form onSubmit = {this.savedata}>
<table className = "design1">
<tbody>
<tr>
<th>Email Id:</th>
<th><input type = "text" name = "emailid" ref ="username"/></th>
</tr>
</tbody>

<tbody>
<tr>
<th>Password:</th>
<th><input type = "text" name = "password" ref ="password"/></th>
</tr>
</tbody>

<tbody>
<tr>
<th><input type = "Submit" name = "submit" ref = "submit"/></th>
</tr>
</tbody>


</table>
</form>
</div>
)
}
}
export default Login;