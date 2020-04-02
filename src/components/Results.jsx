import React from "react";
// import * as searchResultsService from "../services/searchResultsService";
import Swal from "sweetalert2";

class Results extends React.Component {
    state = {
        results: []
    }

    componentDidMount() {
        // searchResultsService.getAll().then(this.getAllSuccess).catch(this.getAllError)
    }

    getAllSuccess = response => {
        Swal.fire({
            title: "Success!",
            icon: "success"
        })

        console.log(response);
    }

    getAllError = err => {
        Swal.fire({
            title: "Error!",
            icon: "error"
        })

        console.log(err)
    }
    
    render() {
        return (
            <div className="d-flex justify-content-between">
                <h3>Hello there!</h3>
                <h3>Hello again!</h3>
            </div>
        );
    }
}

export default Results;