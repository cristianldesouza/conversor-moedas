import React, {Component} from 'react';
import './Conversor.css';


export default class Conversor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor:0,
        }
        
        this.converter = this.converter.bind(this);
    }

    converter() {
        
        let dePara = `${this.props.moedaA}_${this.props.moedaB}` ;
        let URL = `https://free.currconv.com/api/v7/convert?q=${dePara}&compact=ultra&apiKey=118ee20f485cb60ef82a`;
        
        fetch(URL)
            .then(res => {

                return res.json();

            })
            .then(json => {
                
                let cotacao = json[dePara];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao).toFixed(2));
                this.setState({moedaB_valor});
            
        })
    }

    render() {
        return (
            <div className="conversor">
            <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
            <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}/>
            <input type="button" value="Converter" onClick={this.converter}/>
            <h2>{this.state.moedaB_valor}</h2>
        </div>
        )
    }
}

