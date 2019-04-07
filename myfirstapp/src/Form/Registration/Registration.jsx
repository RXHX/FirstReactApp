import React from "react";
import "../Registration/Register.css"
class Registration extends React.Component{
constructor()
{
    super();
    this.savedata = this.savedata.bind(this);
}
savedata(event)
{
    
var fname = this.refs.fname.value;
    console.log("data saved"+fname);
}
render()
{
return(
<div>
<h2 className = "des">Register Here</h2>      
<form onSubmit = {this.savedata}>
<table className = "designer">
<tbody>
<tr>
<th>First Name</th>
<th><input type = "text" name = "firstname" ref ="fname"/></th>
</tr>
</tbody>
<tbody>
<tr>
<th>Last Name</th>
<th><input type = "text" name = "lastname" ref ="lname"/></th>
</tr>
</tbody>
<tbody>
<tr>
<th>Age</th>
<th><input type = "number" name ="age" ref = "age"/></th>
</tr>
</tbody>
<tbody>
<tr>
<th>Mobile Number</th>
<th><input type = "number" name ="number" ref = "number"/></th>
</tr>
</tbody>
<tbody>
<tr>
<th>Email</th>
<th><input type = "email" name ="email" ref = "email"/></th>
</tr>
</tbody>
<tbody>
<tr>
<th>Password</th>
<th><input type = "password" name ="email" ref = "p1"/></th>
</tr>
</tbody>
<tbody>
<tr>
<th>Confirm Password</th>
<th><input type = "password" name ="email" ref = "p2"/></th>
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
export default Registration;