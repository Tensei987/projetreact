import Rating from './rating'
import '../style/user.css'
function User () {
    const users = [ {nom: "mariam", commentaire : "console", suivi: false,note:5,adresse:"mariam@gmail.com"},
     {nom: "rené", commentaire : "console", suivi: false,note:3 , adresse:"rene@gmail.com"},{nom: "ryan", commentaire : "cool", suivi: true, note:4,adresse:"ryan@gmail.com"} ]
    return(
        /*{ ta condition (ex: 6 >5) ? "c'est vraie" : "c'est faux"}
        { if ? reponse if ok: reponse if non ok}*/
<div className='contenu'>
    {
        users.map(user =>(
       <div>
         <h2 > {user.nom} </h2>
         <li> {user.commentaire}</li>
       { user.suivi && <a> suivi</a>}
       <Rating value ={user.note}/>
        

       </div>
        ))
    }

</div>    ) }

export default User



