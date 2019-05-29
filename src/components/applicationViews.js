import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from 'react-router'
import * as firebase from 'firebase/app';
import 'firebase/firestore'
// import TaskList from "./components/tasks/tasksList"



class ApplicationViews extends Component {
    db = firebase.firestore();
    state= {
        tasks: []

    }
    
    

    componentDidMount() {
        const newState = {};

        this.db.collection("tasks").get().then((querySnapshot) => {
            const tasks = []
            querySnapshot.forEach((doc) => {
                tasks.push(doc.data());
            })
            this.setState( {
                tasks: tasks
            });
        })
    }
    // componentDidMount() {
    //     const newState = {};
    //     AnimalManager.getAll()
    //         .then(animals => { newState.animals = animals })
    //         .then(EmployeeManager.getAll).then(employees => { newState.employees = employees })
    //         .then(LocationManager.getAll).then(locations => { newState.locations = locations })
    //         .then(OwnerManager.getAll).then(owners => { newState.owners = owners })
    //         .then(EmployeeAnimal.getAll).then(employeeAnimals => { 
    //             newState.employeeAnimals = employeeAnimals})
    //         .then(EmployeeLocation.getAll).then(employeeLocations => { newState.employeeLocations = employeeLocations})
    //         .then(OwnerAnimal.getAll).then(ownerAnimals => { newState.ownerAnimals = ownerAnimals})
    //         .then(() => 
    //         this.setState(newState))
    // };


    render() {
        return (
            <React.Fragment>
                    {/* <Route exact path="/" render={(props) => {
                    return <TaskList locations={this.state.tasks}
                        // deleteLocation={this.deleteLocation}
                    />
                }} /> */}
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)