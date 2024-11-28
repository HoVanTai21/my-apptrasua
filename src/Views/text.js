import React from "react";


class Text extends React.Component{

    state = {
        Ho: "Hồ",
        TenLot: "Văn",
        Ten: "Tài",
        Tuoi: " 22",

    }
    render(){

        return(
            <header> Tôi Tên là :{this.state["Ho"] }</header>

        );
    }
}
class Menu extends React.Component{
    render(){
        return(
            <div> tôi tên tài</div>
        );
    }
}
export {Text, Menu};