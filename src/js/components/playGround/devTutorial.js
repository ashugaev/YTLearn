import React, {Component} from 'react';
import ReactDOM from 'react-dom';




class Hello extends Component {
    constructor () {
        super()
        this.state = {
          characterCount: 0,
          toogler: false
        }
        this.textAreaHandler = this.textAreaHandler.bind(this)
        this.toogleToogler = this.toogleToogler.bind(this)
    
    }

    textAreaHandler(event) {
        console.log(event.target.value);
        this.setState({
            characterCount: event.target.value.length
        })
    }

    toogleToogler() {
        this.setState(previousState => ({
            toogler: !previousState.toogler
        }))
        console.log(this.state.toogler)
    }

    render() {
        return ( 
        <div> 
          <textarea onChange={this.textAreaHandler} ></textarea> 
          <div>We have {this.state.characterCount} sumbols there!</div>
          <button onClick={this.toogleToogler}>Toogle</button><span>{this.state.toogler ? 'Я тут!' : 'Меня тут нет!'}</span>
      
        </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));