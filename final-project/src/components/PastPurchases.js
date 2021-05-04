import React from "react";
import fire from '../fire.js';

export default class PastPurchases extends React.Component {

    constructor(props) {
        super(props);
        const {
            prevItems,
            setPrevItems
        } = props;
    }
    
    state = {
        pastCops: ""
    }
    
    componentDidMount(){
        try{
            fire.firestore().collection("Users").doc(fire.auth().currentUser.uid)
            .get().then((doc) =>{
                if(doc.exists){
                    var data = doc.data();
                    data = data.PastPurchases;
                    this.setState({pastCops:data})
                }
                else{
                    console.log("Smh what an L");
                }
            })
            this.props.setPrevItems( this.state.pastCops )
        }
        catch(err){}

    }
    /*
    fire.firestore().collection("cities").doc("LA")
    .get().then((doc) => {
    if (doc.exists){
      var city = doc.data();
      console.log(city.toString());
    } else {
      console.log("No such document!");
    }}).catch((error) => {
      console.log("Error getting document:", error);
    });
*/
    render(){
        return(
            <div>
            <h1>Past Copps</h1>
            <p>{this.state.pastCops}</p>
            </div>
        )
    }
}
