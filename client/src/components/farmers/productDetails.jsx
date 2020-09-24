import React, {Component} from "react"

class Prods extends Component {
    constructor(props){
        super(props)
        this.state={
            id : null
        }
    }
    componentDidMount(){
        let p_id = this.props.match.params.prod_id

        this.setState({
            id : p_id
        })
    }
    render(){
        return(
            <div>{this.state.id}</div>
        )
    }
}

export default Prods