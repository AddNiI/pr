import React from "react";
class Form extends React.Component{
    state = {
        login:"",
        email:"",
        telephone:"",
        xp:"junior",
        agree:false
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleCheck = e =>{
        this.setState((prevstate)=>({agree:!prevstate.agree}))
    }

    handleSubmit = e=>{
        e.preventDefault()
        e.currentTargetr.reset()
    }

    render(){
        return(
            <form autoComplete="off" action="" onSubmit={this.handleSubmit}>
                <b><h2>Форма</h2></b>
                <hr></hr>
                <label>
                    login: <input type="text" name="login" 
                    value={this.state.login}
                    onChange={this.handleChange} />
                </label>
                <hr></hr>
                <label>
                    email: <input type="mail" name="email" 
                    value={this.state.email}
                    onChange={this.handleChange} />
                </label>
                <hr></hr>
                <label>
                    telephone: <input type="tel" name="telephone" 
                    value={this.state.telephone}
                    onChange={this.handleChange} />
                </label>
                <hr></hr>
                <b>Ваш рiвень:</b>
                <hr></hr>
                <label>
                    <input type="radio" name="xp" checked={this.state.xp === "junior"}
                    value="junior" 
                    onChange={this.handleChange} /> junior 
                </label>
                <hr></hr>
                <label>
                    <input type="radio" name="xp" checked={this.state.xp === "middle"}
                    value="middle"
                    onChange={this.handleChange} /> middle 
                </label>
                <hr></hr>
                <label>
                    <input type="radio" name="xp" checked={this.state.xp === "senior"}
                    value="senior"
                    onChange={this.handleChange} /> senior 
                </label>
                <hr></hr>
                <button type="submit">Send</button>
                <hr></hr>
                <label>
                    <input type="checkbox" name="agree" checked={this.state.agree}
                    onChange={this.handleCheck} /> Я погоджуюсь з умовами лiцензii
                </label>
            </form>
        )
    }
}

export default Form
