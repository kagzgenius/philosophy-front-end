import React from "react";
import axios from "axios";

class QuotesComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: [],
            quote: [],
            id: []
        };
    }

    componentDidMount() {
        this.getQuotes();
        console.log(this.state.name, this.state.quote)
    }

    getQuotes() {
        axios.get(
            "https://philosophyapi.herokuapp.com/api/ideas"
        )
            .then(res => {
                res.data.results.forEach(element => {
                    this.setState({ name: element.author, quote: element.quote });
                });
            })
            .catch(e => {
                throw e
            });
    }


    render() {
        return (

            <div className="flex flex-nowrap relative w-full gap-4 snap-x overflow-x p-20" >
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-80 h-80 rounded-lg shadow-xl bg-white"> </div>
                </div>
            </div>


        );
    }
}

export default QuotesComponent;