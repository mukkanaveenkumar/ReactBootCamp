import React from 'react';

class Profile extends React.Component {

    constructor(props){
        super(props);
        //Create State Variables here
        this.state = {
            count:0,
            count2:0
        }
        this.state = {
            userInfo:{
            login:'Dummy Name',
            id:'Dummy Location'
          }
          }
        console.log(this.props.name +" Child constructor");
    }

    async componentDidMount(){   
        /*console.log("Child componentDidMount Before Parent componentDidMount");     
        const data = await fetch("https://api.github.com/users/naveenkumarmukka");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        });    
        console.log("Child componentDidMount After API Call");*/
        this.timer = setInterval(()=>{
            console.log("Hello this is from set interval from profile page");
        },1000);
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log("Child Component is Updated");
        if(this.state.userInfo.id != prevState.userInfo.id)
        {
            console.log("Id is updated");
        }
        
        if(this.props.name === prevProps.name)
        {
            console.log("Property name is not changed");
        }
    }

    componentWillUnmount()
    {
        console.log("Profile Component is unmounted");
        clearInterval(this.timer);
    }

    render() {
        console.log(this.props.name + " Child render");
        const {name} = this.props;
       // console.log(this.state.userInfo);
        return (
            <div>
                <h1>This is from class based component</h1>
                <h2>This is the Props Name : {this.state.userInfo?.login}</h2>
                <h2>This is the Props Name : {this.state.userInfo?.id}</h2>
                <h2> Increment : {this.state.count}</h2>
                <h2> Decrement : {this.state.count2}</h2>
                <button
                onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                        count2:this.state.count2-1
                    })
                }}                
                >
                    Class Counter
                </button>
            </div>
        );
    }
}

export default Profile;