import React from 'react';
import './index.css';

function FormQuestion(props) {
    return (
        <div className="textinput">
            <label>{props.label}&nbsp;&nbsp;</label>
            <input type={props.inputType === "text" ? "text" : "number"} value={props.value} onChange={props.handleChange}/>
            <p>{props.explanation}</p>
            <br/>
        </div>
    );
}

function NavBar(props) {
    return (
        <div>
            <button onClick={props.leftFunc} disabled={props.currentPage === 1 ? true : false}>Previous</button>
            &nbsp;Page {props.currentPage} of 7&nbsp;
            <button onClick={props.rightFunc} disabled={props.currentPage === 8 ? true : false}>Next</button>
        </div>
    );
}

class ROIForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            q1: 0,
            q2: 0,
            q3: 0,
            q4_1: 0,
            q4_2: 0,
            q4_3: 0,
            q4_4: 0,
            q4_5: 0,
            q4_6: 0,
            q4_7: 0,
            q5: 0,
            q6_1: 0,
            q6_2: 0,
            q7_1: 0,
            q7_2: 0,
            q7_3: 0,
            q7_4: 0,
            q7_5: 0,
            q8: 0,
            q9: 0,
            q10_1: 0,
            q10_2: 0,
            q10_3: 0,
            t2r2: 1,
            t2r3: 10,
            t2r4: 4,
            t2r5: 8,
            t2r6: 80,
            onBoardPct: 80,
            t3c2: 0.25,
            t6c1: 16,
            t6c2: 12.5,
            t7c1: 50,
            t7c2: 4,
            t7c3: 20,
            t8c2: 10,
            t8c3: 40,
            clientName: "",
            clientTitle: "",
            clientCompany: "",
            clientEmailAddress: "",
            complexReport: false,
            clientId: 0,

        }
    }

    setClientId = () => {
        return fetch(`/newclientid`)
            .then(result => result.json())
            .then(data => {
                this.setState({clientId: data});
                return data;
            })
    }
    addClient() {
        fetch(`/addclient?client_id=${this.state.clientId}&client_name=${this.state.clientName}&client_company=${this.state.clientCompany}&client_title=${this.state.clientTitle}&client_email=${this.state.clientEmailAddress}&q1=${this.state.q1}&q2=${this.state.q2}&q3=${this.state.q3}&q4_1=${this.state.q4_1}&q4_2=${this.state.q4_2}&q4_3=${this.state.q4_3}&q4_4=${this.state.q4_4}&q4_5=${this.state.q4_5}&q4_6=${this.state.q4_6}&q4_7=${this.state.q4_7}&q5=${this.state.q5}&q6_1=${this.state.q6_1}&q6_2=${this.state.q6_2}&q7_1=${this.state.q7_1}&q7_2=${this.state.q7_2}&q7_3=${this.state.q7_3}&q7_4=${this.state.q7_4}&q7_5=${this.state.q7_5}&q8=${this.state.q8}&q9=${this.state.q9}&q10_1=${this.state.q10_1}&q10_2=${this.state.q10_2}&q10_3=${this.state.q10_3}`)
            .then(data => {console.log(data)})
            .catch(err => console.log(err))
    }
    

    render() {
        if (this.state.page === 1) {
            return (
                <form>
                    <h3>General Questions</h3>
                    <FormQuestion 
                        label="Number of End Users"
                        value={this.state.q1}
                        handleChange={e => this.setState({q1: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Average Employee Hourly Cost ($)"
                        value={this.state.q2}
                        handleChange={e => this.setState({q2: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Average External Consultant Hourly Cost ($)"
                        value={this.state.q3}
                        handleChange={e => this.setState({q3: parseFloat(e.target.value)})}
                    />
                    <NavBar currentPage={1} rightFunc={() => this.setState({page: 2})}/>
                </form>
            );
        } else if (this.state.page === 2) {
            return (
                <form>
                    <h3>Onboarding and Training</h3>
                    <FormQuestion 
                        label="Number of SAP Changes/Enhancements/Rollouts per year"
                        value={this.state.q4_1}
                        explanation = "Include new site rollouts, but also new modules, upgrades, major custom enhancements"
                        handleChange={e => this.setState({q4_1: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Number of Word Docs created/modified per SAP Project"
                        value={this.state.q4_2}
                        explanation = "See above"
                        handleChange={e => this.setState({q4_2: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Number of Simulations created/modified per SAP Project"
                        value={this.state.q4_3}
                        explanation = "See above"
                        handleChange={e => this.setState({q4_3: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Number of LMS courses created/modified per SAP Project"
                        value={this.state.q4_4}
                        explanation = "See above"
                        handleChange={e => this.setState({q4_4: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Number of Videos create/modified per SAP Project"
                        value={this.state.q4_5}
                        explanation = "See above"
                        handleChange={e => this.setState({q4_5: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Number of Custom Development Object rollouts per year"
                        value={this.state.q4_7}
                        explanation = "See above"
                        handleChange={e => this.setState({q4_7: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Number of Custom Development Objects created per SAP Project (only list those that could be avoided with OnScreen - typically those created to avoid user error)"
                        value={this.state.q4_6}
                        explanation = "See above"
                        handleChange={e => this.setState({q4_6: parseFloat(e.target.value)})}
                    />
                    <NavBar currentPage={2} rightFunc={() => this.setState({page: 3})} leftFunc={() => this.setState({page: 1})}/>
                </form>
            );
        } else if (this.state.page === 3) {
            return (
                <form>
                    <h3>Onboarding and Training - Page 2</h3>
                    <h5>Retraining Costs</h5>
                    <FormQuestion
                        label = "Number of Trainers"
                        value={this.state.q7_1}
                        explanation = "Only include the number of trainers that typically would be sent to conduct training after the initial implementation training."
                        handleChange = {e => this.setState({q7_1: parseFloat(e.target.value)})}
                    />
                    <FormQuestion
                        label = "Travel Cost Per Trainer for 1 trip ($) "
                        value={this.state.q7_2}
                        explanation = "All inclusive travel cost for 1 trainer per trip"
                        handleChange = {e => this.setState({q7_2: parseFloat(e.target.value)})}
                    />
                    <FormQuestion
                        label = "Average Training Duration in days"
                        value={this.state.q7_3}
                        handleChange = {e => this.setState({q7_3: parseFloat(e.target.value)})}
                    />
                    <FormQuestion
                        label = "Number of training courses per year"
                        value={this.state.q7_4}
                        explanation = "How many times does retraining typically occur per year.  This only counts re-training courses."
                        handleChange = {e => this.setState({q7_4: parseFloat(e.target.value)})}
                    />
                    <FormQuestion
                        label = "Training employee Cost per Hour ($)"
                        value={this.state.q7_5}
                        explanation = "This may be different than average employee hourly cost."
                        handleChange = {e => this.setState({q7_5: parseFloat(e.target.value)})}
                    />
                    <h5>Onboarding/Time to Proficiency</h5>
                    <FormQuestion
                        label = "Hours per week shadowing asking another user"
                        value={this.state.q9}
                        handleChange = {e => this.setState({q9: parseFloat(e.target.value)})}
                    />
                    <NavBar currentPage={3} rightFunc={() => this.setState({page: 4})} leftFunc={() => this.setState({page: 2})}/>
                </form>
            );
        } else if (this.state.page === 4) {
            return (
                <form>
                    <h3>Employee Productivity</h3>
                    <FormQuestion
                        label = "Average number of transactions executed per week per user"
                        value={this.state.q8}
                        explanation = "This is used to calculate time saved by not having to ask for help on 10% of transactions"
                        handleChange = {e => this.setState({q8: parseFloat(e.target.value)})}
                    />
                    <NavBar currentPage={4} rightFunc={() => this.setState({page: 5})} leftFunc={() => this.setState({page: 3})}/>
                </form>     
            );
        } else if (this.state.page === 5) {
            return (
                <form>
                    <h3>Data Quality and Accuracy</h3>
                    <FormQuestion 
                        label="Help Desk Tickets Reduced per user per year"
                        value={this.state.q5}
                        explanation = "Number of tickets reduced, not total number of tickets (e.g. if total number of tickets per user per year reduced from 5 to 3 then this number is 2.) Default estimate is to reduce 20-30%."
                        handleChange={e => this.setState({q5: parseFloat(e.target.value)})}
                    />
                    <FormQuestion 
                        label="Errors prevented per year per user"
                        value={this.state.q6_1}
                        explanation = "Number of errors that could be prevented using OnScreen.  Default estimate is to reduce 20% of errors."
                        handleChange={e => this.setState({q6_1: parseFloat(e.target.value)})}
                    />
                    <br/>
                    <FormQuestion 
                        label="Hours to fix each error"
                        value={this.state.q6_2}
                        handleChange={e => this.setState({q6_2: parseFloat(e.target.value)})}
                    />

                    <NavBar currentPage={5} rightFunc={() => this.setState({page: 6})} leftFunc={() => this.setState({page: 4})}/>
                </form>
            );
        } else if (this.state.page === 6) {
            return (
                <form>
                    <h3>Additional Possible Savings</h3>
                    <FormQuestion
                        label = "Training Development and Costs ($)"
                        value={this.state.q10_1}
                        explanation = "Any cost reductions not included above"
                        handleChange = {e => this.setState({q10_1: parseFloat(e.target.value)})}
                    />
                    <FormQuestion
                        label = "Employee Productivity ($)"
                        value={this.state.q10_2}
                        explanation = "Any cost reductions not included above"
                        handleChange = {e => this.setState({q10_2: parseFloat(e.target.value)})}
                    />
                    <FormQuestion
                        label = "Data Quality and Errors ($)"
                        value={this.state.q10_3}
                        explanation = "Any cost reductions not included above"
                        handleChange = {e => this.setState({q10_3: parseFloat(e.target.value)})}
                    />
                    <NavBar currentPage={6} leftFunc={() => this.setState({page: 5})} rightFunc={() => {
                        this.setState({page: 7});
                        this.setClientId();
                    }}/>
                </form>
            );
        } else if (this.state.page === 7) {
            const emailRegex = /[\w-]+@([\w-]+\.)+[\w-]+/;
            return (
                <form>
                    <h3>Additional Required Information</h3>
                    <FormQuestion
                        label = "Name"
                        value = {this.state.clientName}
                        inputType = "text"
                        handleChange = {e => this.setState({clientName: e.target.value})}
                        explanation = {this.state.clientName.trim() ? "" : "Required Question"}
                    />
                    <FormQuestion
                        label = "Title"
                        value = {this.state.clientTitle}
                        inputType = "text"
                        handleChange = {e => this.setState({clientTitle: e.target.value})}
                        explanation = {this.state.clientTitle.trim() ? "" : "Required Question"}
                    />
                    <FormQuestion
                        label = "Company"
                        value = {this.state.clientCompany}
                        inputType = "text"
                        handleChange = {e => this.setState({clientCompany: e.target.value})}
                        explanation = {this.state.clientCompany.trim() ? "" : "Required Question"}        
                    />

                    <FormQuestion
                        label = "Email Address"
                        inputType = "text"
                        value = {this.state.clientEmailAddress}
                        explanation = {emailRegex.test(this.state.clientEmailAddress) ? "" : "Please enter a valid email address"}
                        handleChange = {e => this.setState({clientEmailAddress: e.target.value})}
                    />
                    <NavBar currentPage={7} leftFunc={() => this.setState({page: 6})}/>
                    <br/>
                    <button disabled = {!(emailRegex.test(this.state.clientEmailAddress) && this.state.clientName.trim() && this.state.clientTitle.trim() && this.state.clientCompany.trim())}
                    onClick={() => {
                        this.setState({page: 8});
                        this.addClient();
                    }}
                    >Submit</button>
                </form>
            );

        } else if (this.state.page === 8) {
            const totalDevelopmentCostSavings = this.state.q4_1*(
                0.2*this.state.q4_2*this.state.t2r2*this.state.q2 +
                0.4*this.state.q4_3*this.state.t2r3*this.state.q3 +
                0.3*this.state.q4_4*this.state.t2r4*this.state.q2 +
                0.4*this.state.q4_5*this.state.t2r5*this.state.q2) 
                + this.state.q4_7*0.8*this.state.q4_6*this.state.t2r6*this.state.q3;
            const totalDevelopmentTimeSavings = this.state.q4_1*(
                0.2*this.state.q4_2*this.state.t2r2 +
                0.4*this.state.q4_3*this.state.t2r3 +
                0.3*this.state.q4_4*this.state.t2r4 +
                0.4*this.state.q4_5*this.state.t2r5) 
                + this.state.q4_7*0.8*this.state.q4_6*this.state.t2r6;
            
            const trainingCostSavings = (
                this.state.q5*this.state.q1*this.state.t3c2*this.state.q2 +
                this.state.q6_1*this.state.q6_2*this.state.q1*this.state.q2 +
                this.state.q7_1*(this.state.q7_2*this.state.q7_4 + 8*this.state.q7_3*this.state.q7_5) +
                this.state.t6c1*this.state.t6c2/100*this.state.q1*this.state.q2 +
                this.state.q1*this.state.t7c1/100*this.state.t7c2*this.state.t7c3/100*12*this.state.q2 +
                this.state.q1*this.state.q8*this.state.t8c2/100*this.state.t8c3/360*50*this.state.q2
            );
            const trainingTimeSavings = (
                this.state.q5*this.state.q1*this.state.t3c2 +
                this.state.q6_1*this.state.q6_2*this.state.q1 +
                this.state.t6c1*this.state.t6c2/100*this.state.q1 +
                this.state.q1*this.state.t7c1/100*this.state.t7c2*this.state.t7c3/100*12 +
                this.state.q1*this.state.q8*this.state.t8c2/100*this.state.t8c3/360*50
            );
        
            const onBoardingCostSaved = this.state.q9*this.state.onBoardPct/100*12*this.state.q1*this.state.q2;
            const onBoardingHoursSaved = this.state.q9*this.state.onBoardPct/100*12*this.state.q1;

            if (this.state.complexReport) {
                return (
                    <div>
                        <h1>Estimated Savings with OnScreen</h1>
                        <button onClick={() => this.setState({complexReport: false})}>Show Less</button>
                        <h3>Client Information</h3>
                        <table><tbody>
                            <tr><td>Number of end users</td><td>{this.state.q1}</td></tr>
                            <tr><td>Employee cost (hour)</td><td>${this.state.q2}</td></tr>
                            <tr><td>Consultant cost (hour)</td><td>${this.state.q3}</td></tr>
                        </tbody></table>

                        <h3>Client Costs related to Change Management, User Adoption and Support</h3>
                        <table><tbody>
                            <tr><th>Training development and Delivery</th><th>Number of project rollouts annually</th><th>Artifacts created per SAP project</th><th>Hours to create, test and deploy</th><th>Savings with OnScreen</th><th>Time Saved (hrs)</th></tr>
                            <tr><td>Word Docs</td><td>{this.state.q4_1}</td><td>{this.state.q4_2}</td><td><input type="number" value={this.state.t2r2} onChange={e => this.setState({t2r2: parseFloat(e.target.value)})} /></td><td>${0.2*this.state.q4_1*this.state.q4_2*this.state.t2r2*this.state.q2}</td><td>{0.2*this.state.q4_1*this.state.q4_2*this.state.t2r2}</td></tr>
                            <tr><td>Simulations</td><td>{this.state.q4_1}</td><td>{this.state.q4_3}</td><td><input type="number" value={this.state.t2r3} onChange={e => this.setState({t2r3: parseFloat(e.target.value)})} /></td><td>${0.4*this.state.q4_1*this.state.q4_3*this.state.t2r3*this.state.q3}</td><td>{0.4*this.state.q4_1*this.state.q4_3*this.state.t2r3}</td></tr>
                            <tr><td>LMS articles</td><td>{this.state.q4_1}</td><td>{this.state.q4_4}</td><td><input type="number" value={this.state.t2r4} onChange={e => this.setState({t2r4: parseFloat(e.target.value)})} /></td><td>${0.3*this.state.q4_1*this.state.q4_4*this.state.t2r4*this.state.q2}</td><td>{0.3*this.state.q4_1*this.state.q4_4*this.state.t2r4}</td></tr>
                            <tr><td>Videos</td><td>{this.state.q4_1}</td><td>{this.state.q4_5}</td><td><input type="number" value={this.state.t2r5} onChange={e => this.setState({t2r5: parseFloat(e.target.value)})} /></td><td>${0.4*this.state.q4_1*this.state.q4_5*this.state.t2r5*this.state.q2}</td><td>{0.4*this.state.q4_1*this.state.q4_5*this.state.t2r5}</td></tr>
                            <tr><td>Custom Development</td><td>{this.state.q4_1}</td><td>{this.state.q4_6}</td><td><input type="number" value={this.state.t2r6} onChange={e => this.setState({t2r6: parseFloat(e.target.value)})} /></td><td>${0.8*this.state.q4_1*this.state.q4_6*this.state.t2r6*this.state.q3}</td><td>{0.8*this.state.q4_1*this.state.q4_6*this.state.t2r6}</td></tr>
                        </tbody></table>
                        <p><b>Total Development Cost Savings:</b> ${totalDevelopmentCostSavings}</p>
                        <p><b>Total Development Time Savings:</b> <br/>{Number((totalDevelopmentTimeSavings).toFixed(2))} hours <br/>{Number((totalDevelopmentTimeSavings/50).toFixed(2))} weeks<br/>{Number((totalDevelopmentTimeSavings/2080).toFixed(2))} years</p>

                        <h3>Training Effectiveness and Consumption</h3>

                        <p><b>Support</b> - Help Desk Tickets/Calls</p>
                        <table><tbody>
                            <tr><th>Calls/Tickets reduced yearly, per user</th><th>Time per call (hours)</th><th>Total hours saved</th><th>Total cost saved</th></tr>  
                            <tr><td>{this.state.q5}</td><td><input type="number" value={this.state.t3c2} onChange={e => this.setState({t3c2: parseFloat(e.target.value)})} /></td><td>{this.state.q5*this.state.q1*this.state.t3c2}</td><td>${this.state.q5*this.state.q1*this.state.t3c2*this.state.q2}</td></tr>
                        </tbody></table>

                        <p><b>Quality Improvement</b> - Process compliance and data quality</p>
                        <table><tbody>
                            <tr><th>Errors prevented yearly, per user</th><th>Hours to fix each error</th><th>Total hours saved</th><th>Total cost saved</th></tr>
                            <tr><td>{this.state.q6_1}</td><td>{this.state.q6_2}</td><td>{this.state.q6_1*this.state.q6_2*this.state.q1}</td><td>${this.state.q6_1*this.state.q6_2*this.state.q1*this.state.q2}</td></tr>
                        </tbody></table>

                        <p><b>Re-Training Costs</b></p>
                        <table><tbody>
                            <tr><th>Number of Trainers</th><th>Travel Cost per Trainer</th><th>Training Avg Duration (days)</th><th>Training Courses per Year</th><th>Training Employee Cost per Hour</th><th>Total cost saved</th></tr>
                            <tr><td>{this.state.q7_1}</td><td>{this.state.q7_2}</td><td>{this.state.q7_3}</td><td>{this.state.q7_4}</td><td>{this.state.q7_5}</td><td>${this.state.q7_1*(this.state.q7_2*this.state.q7_4 + 8*this.state.q7_3*this.state.q7_5)}</td></tr>
                        </tbody></table>

                        <p><b>User Time Saving</b></p>
                        <p>Training time savings (time off the job)</p>
                        <table><tbody>
                            <tr><th>Training Hours per user</th><th>% of training hours saved</th><th>Total hours saved</th><th>Total cost saved</th></tr>
                            <tr><td><input type="number" value={this.state.t6c1} onChange={e => this.setState({t6c1: parseFloat(e.target.value)})}/></td><td><input type="number" value={this.state.t6c2} onChange={e => this.setState({t6c2: parseFloat(e.target.value)})}/></td><td>{this.state.t6c1*this.state.t6c2/100*this.state.q1}</td><td>${this.state.t6c1*this.state.t6c2/100*this.state.q1*this.state.q2}</td></tr>
                        </tbody></table>  

                        <p>On the job saving (info accessibility)</p>
                        <table><tbody>
                            <tr><th>% of users in search mode each month</th><th>Hours Spent on Search (per user in search mode per month)</th><th>% of search time saved</th><th>Search time saved per year</th><th>Total cost saved</th></tr>
                            <tr><td><input type="number" value={this.state.t7c1} onChange={e => this.setState({t7c1: parseFloat(e.target.value)})}/></td><td><input type="number" value={this.state.t7c2} onChange={e => this.setState({t7c2: parseFloat(e.target.value)})}/></td><td><input type="number" value={this.state.t7c3} onChange={e => this.setState({t7c3: parseFloat(e.target.value)})}/></td><td>{this.state.q1*this.state.t7c1/100*this.state.t7c2*this.state.t7c3/100*12}</td><td>${this.state.q1*this.state.t7c1/100*this.state.t7c2*this.state.t7c3/100*12*this.state.q2}</td></tr>
                        </tbody></table> 

                        <p>Process speed and efficiency</p>
                        <table><tbody>   
                            <tr><th># of transactions (processes) executed per week per user</th><th>% of transactions requiring help</th><th>Seconds saved per transaction</th><th>Time saved per year (hours)</th><th>Total cost saved</th></tr>
                            <tr><td>{this.state.q8}</td><td><input type="number" value={this.state.t8c2} onChange={e => this.setState({t8c2: parseFloat(e.target.value)})}/></td><td><input type="number" value={this.state.t8c3} onChange={e => this.setState({t8c3: parseFloat(e.target.value)})}/></td><td>{Number((this.state.q1*this.state.q8*this.state.t8c2/100*this.state.t8c3/360*50).toFixed(2))}</td><td>${Number((this.state.q1*this.state.q8*this.state.t8c2/100*this.state.t8c3/360*50*this.state.q2).toFixed(2))}</td></tr>
                        </tbody></table>

                        <h3>Onboarding/Turnover Cost</h3>
                        <table><tbody>
                            <tr><th>Onboarding/time to proficiency</th><th>Hours a week shadowing asking another, per user</th><th>% of hours saved in shadowing asking another, per user</th><th>Total hours saved yearly</th><th>Total cost saved</th></tr>
                            <tr><td>Time requirement for assistance</td><td>{this.state.q9}</td><td><input type="number" value={this.state.onBoardPct} onChange={e => this.setState({onBoardPct: parseFloat(e.target.value)})} max="100" min="0"/></td><td>{Number((onBoardingHoursSaved).toFixed(2))}</td><td>${Number((onBoardingCostSaved).toFixed(2))}</td></tr>
                        </tbody></table>

                        <p><b>Total Training & OnBoarding Cost Savings:</b> ${Number((trainingCostSavings+onBoardingCostSaved).toFixed(2))}</p>
                        <p><b>Total Cost Savings:</b> ${Number((trainingCostSavings+onBoardingCostSaved+totalDevelopmentCostSavings).toFixed(2))}</p>
                        <br/>
                        <p><b>Total Training & OnBoarding Time Savings:</b> <br/>{Number((trainingTimeSavings+onBoardingHoursSaved).toFixed(2))} hours<br/>{Number(((trainingTimeSavings+onBoardingHoursSaved)/2080).toFixed(2))} years</p>
                        <p><b>Total Time Savings:</b> <br/>{Number((trainingTimeSavings+onBoardingHoursSaved+totalDevelopmentTimeSavings).toFixed(2))} hours<br/>{Number(((trainingTimeSavings+onBoardingHoursSaved+totalDevelopmentTimeSavings)/2080).toFixed(2))} years</p>
                        
                        <h3>Other Soft Costs</h3>
                        <ul>
                            <li>Lost instititutional knowledge</li>
                            <li>Lost productivity</li>
                            <li>Faster cycle times</li>
                            <li>Employee Satisfaction</li>
                            <li>Customer satisfaction</li>
                        </ul>
                    </div>
                );
            } else {
                return(
                    <div>
                        <h1>Estimated Savings with OnScreen</h1>
                        <button onClick={() => this.setState({complexReport: true})}>Show More</button>

                        <h3>Client Costs related to Change Management, User Adoption and Support</h3>
                        <table><tbody>
                            <tr><th>Category</th><th>Savings with OnScreen</th><th>Time Saved (hrs)</th></tr>
                            <tr><td>Word Docs</td><td>${0.2*this.state.q4_1*this.state.q4_2*this.state.t2r2*this.state.q2}</td><td>{0.2*this.state.q4_1*this.state.q4_2*this.state.t2r2}</td></tr>
                            <tr><td>Simulations</td><td>${0.4*this.state.q4_1*this.state.q4_3*this.state.t2r3*this.state.q3}</td><td>{0.4*this.state.q4_1*this.state.q4_3*this.state.t2r3}</td></tr>
                            <tr><td>LMS articles</td><td>${0.3*this.state.q4_1*this.state.q4_4*this.state.t2r4*this.state.q2}</td><td>{0.3*this.state.q4_1*this.state.q4_4*this.state.t2r4}</td></tr>
                            <tr><td>Videos</td><td>${0.4*this.state.q4_1*this.state.q4_5*this.state.t2r5*this.state.q2}</td><td>{0.4*this.state.q4_1*this.state.q4_5*this.state.t2r5}</td></tr>
                            <tr><td>Custom Development</td><td>${0.8*this.state.q4_1*this.state.q4_6*this.state.t2r6*this.state.q3}</td><td>{0.8*this.state.q4_1*this.state.q4_6*this.state.t2r6}</td></tr>
                        </tbody></table>
                        
                        <h3>Training Effectiveness and Consumption</h3>
                        <table><tbody>
                            <tr><th>Category</th><th>Total Hours Saved per Year</th><th>Total Cost Saved</th></tr>
                            <tr><td><b>Support</b> - Help Desk Tickets/Calls</td><td>{this.state.q5*this.state.q1*this.state.t3c2}</td><td>${this.state.q5*this.state.q1*this.state.t3c2*this.state.q2}</td></tr>
                            <tr><td><b>Quality Improvement</b> - Process compliance and data quality</td><td>{this.state.q6_1*this.state.q6_2*this.state.q1}</td><td>${this.state.q6_1*this.state.q6_2*this.state.q1*this.state.q2}</td></tr>
                            <tr><td><b>Re-Training Costs</b></td><td>N/A</td><td>${this.state.q7_1*(this.state.q7_2*this.state.q7_4 + 8*this.state.q7_3*this.state.q7_5)}</td></tr>
                            <tr><td><b>User Time Saving</b> - Training time savings (time off the job)</td><td>{this.state.t6c1*this.state.t6c2/100*this.state.q1}</td><td>${this.state.t6c1*this.state.t6c2/100*this.state.q1*this.state.q2}</td></tr>
                            <tr><td>On the job saving (info accessibility)</td><td>{this.state.q1*this.state.t7c1/100*this.state.t7c2*this.state.t7c3/100*12}</td><td>${this.state.q1*this.state.t7c1/100*this.state.t7c2*this.state.t7c3/100*12*this.state.q2}</td></tr>
                            <tr><td>Process speed and efficiency</td><td>{Number((this.state.q1*this.state.q8*this.state.t8c2/100*this.state.t8c3/360*50).toFixed(2))}</td><td>${Number((this.state.q1*this.state.q8*this.state.t8c2/100*this.state.t8c3/360*50*this.state.q2).toFixed(2))}</td></tr>
                        </tbody></table>
           
                        <h3>Onboarding/Turnover Cost</h3>
                        <table><tbody>
                            <tr><th>Total hours saved yearly</th><th>Total cost saved</th></tr>
                            <tr><td>{Number((onBoardingHoursSaved).toFixed(2))}</td><td>${Number((onBoardingCostSaved).toFixed(2))}</td></tr>
                        </tbody></table>
                        
                        <h3>Manually Inputted Additional Savings</h3>
                        <table><tbody>
                            <tr><th>Category</th><th>Cost saved</th></tr>
                            <tr><td>Training Development and Costs</td><td>${Number((this.state.q10_1).toFixed(2))}</td></tr>
                            <tr><td>Employee Productivity</td><td>${Number((this.state.q10_2).toFixed(2))}</td></tr>
                            <tr><td>Data Quality and Errors</td><td>${Number((this.state.q10_3).toFixed(2))}</td></tr>
                            <tr><td><b>Total</b></td><td>${Number((this.state.q10_1 + this.state.q10_2 + this.state.q10_3).toFixed(2))}</td></tr>
                        </tbody></table>

                        <h3>Total Savings with OnScreen</h3>
                        <table><tbody>
                            <tr><th>Category</th><th>Cost Savings</th><th colSpan="3">Time Savings</th></tr>
                            <tr><td>Development</td><td>${totalDevelopmentCostSavings}</td><td>{Number((totalDevelopmentTimeSavings).toFixed(2))} hours</td><td>{Number((totalDevelopmentTimeSavings/50).toFixed(2))} weeks</td><td>{Number((totalDevelopmentTimeSavings/2080).toFixed(2))} years</td></tr>
                            <tr><td>Training & OnBoarding</td><td>${Number((trainingCostSavings+onBoardingCostSaved).toFixed(2))}</td><td>{Number((trainingTimeSavings+onBoardingHoursSaved).toFixed(2))} hours</td><td colSpan="2">{Number(((trainingTimeSavings+onBoardingHoursSaved)/2080).toFixed(2))} years</td></tr>
                            <tr><td>Manually Inputted</td><td>${Number((this.state.q10_1 + this.state.q10_2 + this.state.q10_3).toFixed(2))}</td><td colSpan="3">N/A</td></tr>
                            <tr><td><b>Total</b></td><td>${Number((trainingCostSavings+onBoardingCostSaved+totalDevelopmentCostSavings+this.state.q10_1+this.state.q10_2+this.state.q10_3).toFixed(2))}</td><td>{Number((trainingTimeSavings+onBoardingHoursSaved+totalDevelopmentTimeSavings).toFixed(2))} hours</td><td colSpan="2">{Number(((trainingTimeSavings+onBoardingHoursSaved+totalDevelopmentTimeSavings)/2080).toFixed(2))} years</td></tr>
                        </tbody></table>
                        
                        <h3>Other Soft Costs</h3>
                        <ul>
                            <li>Lost instititutional knowledge</li>
                            <li>Lost productivity</li>
                            <li>Faster cycle times</li>
                            <li>Employee Satisfaction</li>
                            <li>Customer satisfaction</li>
                        </ul>
                    </div>
                );
            }
        }
        return(<div></div>);
    }
}


export default ROIForm;