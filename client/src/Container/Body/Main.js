import React, {Component} from 'react';
import axiosInstance from '../../axios';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import CardComponent from '../Body/CardComponent';

class Body extends Component {
    state= {
        loading: true,
        shoppingData: [],
        error: null
    };

    componentWillReceiveProps(props) {
        this.setState({ shoppingData: [], loading: true });
        let type = this.props.type ? 'instore' : 'online';
        const url = 'measures/?shoppingChannel=' + type
        this.getData(url);
      }

    componentDidMount() {
        let type = this.props.type ? 'online' : 'instore';
        const url = 'measures/?shoppingChannel=' + type
        this.getData(url);
    }
    getData(url) {
        return new Promise((resolve, reject) => {
            axiosInstance
            .get(url)
            .then((res) => {
                resolve(true);
                this.setState({ shoppingData: res.data, loading: false });
            }).catch(error => {
                // console.log(error);
                reject(false);
                this.setState({ error: 'Data not loaded!', loading: false });
            });
        })
    }
    cardHandler = (data) => {
        this.setState({
          selectedCard: data
        });
      }

    render() {
        let color = '#9e9e9e';
        let data = <div><span className="placeholder-loader">Loading</span><span className="loader"></span></div>;
        let celValueSpan= '';
        if(!this.state.loading) {
            data = this.state.shoppingData.map(dt => {
                const cellValue = dt.cells[0].value || 0;
                if (cellValue === 0) {
                    celValueSpan = <span className="card-title"><span>{cellValue}</span> out of 9</span>
                } else {
                    celValueSpan = <span className="card-title">No data for {dt.formattedCaption}</span>
                }
                celValueSpan = <span className="card-title"><span>{cellValue}</span> out of 9</span>;
                if (cellValue !== "Real Value") {
                    const width = (cellValue / 9) * 100;
                    color = cellValue <= 5.0 ? "#FF5C5C" : cellValue <= 7.0 ? "#F5B31F" : cellValue <= 9.0 ? "#62DDA9": color;
                    return <Link key={'key_' + cellValue} to={{ pathname: '/'+ dt.formattedCaption.toLowerCase(), query: {"option": dt.formattedCaption, color: color}}}>
                                <div className="card">
                                <span className="card-title">{dt.formattedCaption}</span>
                                <div className="progress">
                                    <div className="progress-bar1" style={{height : 24 + 'px', width: width, backgroundColor: color}}></div>
                                </div>
                                {celValueSpan}
                                </div>
                            </Link>
                } else {
                    return null;
                }
            })
        }
        return (
            <main className="App-intro">
                {data}
                <Route path="/:selectedMeasure" cardData={color} exact component={CardComponent}/>
            </main>
        )
    };
}

export default Body;