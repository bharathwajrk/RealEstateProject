import React, { Component } from 'react';
import bg from './images/homePage.jpg'
import './homePageAB.css';
import logo from './images/logo192.png'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchLocation : "",
          checkInDate : null,
          checkOutDate : null,
          adults : 1,
          child : 0
        };
    }

    handleSearchLocationChange = (e) => {
        this.setState({
            searchLocation : e.target.value
        })
    }

    handleCheckInDateChange = (e) => {
        this.setState({
            checkInDate : e.target.value
        })
    }

    handleCheckoutDateChange = (e) => {
        this.setState({
            checkOutDate : e.target.value
        })
    }

    adultPlusChange = (e) =>{
        e.preventDefault();
        if(this.state.adults <= 15){
            this.setState({
                adults : this.state.adults+1
            })
        }
    }
    adultMinusChange = (e) =>{
        e.preventDefault();
        if(this.state.adults !== 1){
            this.setState({
                adults : this.state.adults-1
            })
        }
    }
    childPlusChange = (e) =>{
        e.preventDefault();
        if(this.state.child <= 6){
            this.setState({
                child : this.state.child+1
            })
        }
    }
    childMinusChange = (e) =>{
        e.preventDefault();
        if(this.state.child !== 0){
            this.setState({
                child : this.state.child-1
            })
        }
    }
    render() {
        return (
            <div className="homePage">
                <div>
                    <img className="homePageImg" id="bgHomeImage" alt="Rooms, Hotels in XYZ" sizes="100vw" src={bg}></img>
                </div>
                <div id="menu-bar">
                    <img className="logoImg" alt="logoImg" src={logo}/>
                    <nav className="menbarNav">
                        <ul>
                            <li><a className="menubarATag" href="#">Help</a></li>
                            <li><a className="menubarATag" href="#">SignUp</a></li>
                            <li><a className="menubarATag" href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <br />
                <div className="homediv1_">
                    <div className="homediv2_">
                        <div className="homediv3_">
                            <div className="homediv4_">
                                <div className="homediv5_">
                                    <div>
                                        <div className="homediv6_">
                                            <div className="homediv7_">
                                                <section>
                                                    <h1 className="homediv8_">Book rooms in xyz</h1>
                                                </section>
                                                <form>
                                                    <div className="searchlocation">
                                                        <label className="searchlocation_label">Search Location</label>
                                                        <div className="searchlocation_inp_div">
                                                            <input className="searchlocation_input" type="text" placeholder="Search location" onChange={this.handleSearchLocationChange} value={this.state.searchLocation}></input>
                                                        </div>
                                                    </div>
                                                    <div className="stayPeriod">
                                                        <div className="checkInDate">
                                                            <label className="checkin_label">Check-In</label>
                                                            <div className="checkin_inp_div">
                                                                <input type="date" className="checkin_input" onChange={this.handleCheckInDateChange} value={this.state.checkInDate}/>
                                                            </div>
                                                        </div>
                                                        <div className="checkOutDate">
                                                            <label className="checkout_label">Check-Out</label>
                                                            <div className="checkout_inp_div">
                                                                <input type="date" className="checkout_input" onChange={this.handleCheckoutDateChange} value={this.state.checkOutDate}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cleardiv"></div>
                                                    <div className="peopleCount">
                                                        <div className="adultCount">
                                                            <label className="adult_label">Adults</label>
                                                            <div className="adult_inp_div">
                                                                <button className={this.state.adults === 1 ? "disable_svg_button" : "minus_button"} onClick={this.adultMinusChange} disabled={this.state.adults === 1}>
                                                                    <span>
                                                                    <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect></svg>
                                                                    </span>
                                                                </button>
                                                                <input className="adult_input" type="number" value={this.state.adults}></input>
                                                                <button className={this.state.adults >= 16 ? "disable_svg_button" : "plus_button"} onClick={this.adultPlusChange} disabled={this.state.adults >= 16}>
                                                                    <span>
                                                                    <svg className="plusSVG" viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect><rect height="12" rx="1" width="2" x="11" y="6"></rect></svg>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="childCount">
                                                            <label className="child_label">Children</label>
                                                            <div className="child_inp_div">
                                                                <button className={this.state.child === 0 ? "disable_svg_button" : "minus_button"} onClick={this.childMinusChange} disabled={this.state.child === 0}>
                                                                    <span>
                                                                    <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect></svg>
                                                                    </span>
                                                                </button>
                                                                <input className="child_input" type="number" value={this.state.child}></input>
                                                                <button className={this.state.child >= 6 ? "disable_svg_button" : "plus_button"} onClick={this.childPlusChange} disabled={this.state.child >= 6}>
                                                                    <span>
                                                                    <svg className="plusSVG" viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect><rect height="12" rx="1" width="2" x="11" y="6"></rect></svg>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cleardiv"></div>
                                                    <div className="search_button_div">
                                                        <button className="searchButton">Search</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;