function Signup() {
    return (
        <div className="wrapper">
            <div className="section-login">
                <form action="">
                    <div className="user-details">
                        <div className='bg-img'>
                            <h2>Create Account</h2>
                        </div>
                        <div className="input-box-1">
                            <input type="text" placeholder="Firstname" required />
                            <input type="text" placeholder="Lastname" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                        </div>
                    </div>
                    <div class="age-details">
                        <h5>Age:</h5>
                        <div className="btn-radio">
                            <div className="select-age">
                                <input type="radio" name="age" value="Early Teenagers" />
                                <label for="Early Teenagers">12-16 years old</label>
                            </div>
                            <div className="select-age">
                                <input type="radio" name="age" value="late teenagers" />
                                <label for="late teenagers">17-25 years old</label>
                            </div>
                            <div className="select-age">
                                <input type="radio" name="age" value="early adulthood" />
                                <label for="early adulthood">26-40 years old</label>
                            </div>
                            <div className="select-age">
                                <input type="radio" name="age" value="late adulthood" />
                                <label for="late adulthood"> 40 years old</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn-login">Submit</button>
                    <div className="sign-up">
                        <p>Already have an account? <a href="#"> Login Here</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup