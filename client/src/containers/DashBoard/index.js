
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Header from '../../components/layouts/header';
import Footer from '../../components/layouts/footer';
import Wrapper from '../../Hoc/wrapper';
import Card from '../../components/ui/card';
import ListLoader from '../../components/ui/loader';

class DashBoard extends Component {

    state = {
        type: ''
    }

    componentDidMount() {
        this.fetchRating('online')
    }

    fetchRating = (type) => {
        this.setState({ type: type })
        this.props.fetchRating(type)
    }


    render() {

        return (
            <Wrapper>
                <div className="container" >
                    <Header />



                    <div className="row" style={{ marginTop: '100px', marginBottom: '100px' }}>
                        {this.props.loading ?
                            <div className="col">
                                <div className="row px-5">
                                    <ListLoader />
                                </div>
                            </div>
                            :
                            <div className="col">
                                <div className="row px-5">
                                    <div className="col-12 col-md-6">
                                        <button onClick={() => this.fetchRating('online')} type="button" className="btn mx-2 btn-primary"> Online Rating</button>
                                        <button onClick={() => this.fetchRating('instore')} type="button" className="btn mx-2 btn-secondary"> Instore Rating</button>
                                    </div>
                                    <div className="col-12 col-md-6 text-center pt-2">
                                        <p>Current : {this.state.type}</p>
                                    </div>
                                </div>
                                <div className="row px-5">
                                    {this.props.ratings.map((element, index) => (
                                        index == 0 ? '' : <Card key={element.caption + index} data={element} />
                                    ))}
                                </div>
                            </div>
                        }
                    </div>

                    <Footer />
                </div>
            </Wrapper>
        )
    }


}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        ratings: state.ratings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRating: (type) => dispatch(actions.fetchRating(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);