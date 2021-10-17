import {useState} from 'react';

function LoginForm(props) {
    const [user, setUser] = useState ({
        username:'',
        email:'',
        password:'',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(user.password !== user.password){
        //     //need to target user password that they already created
        //     setError('Incorrect password')
        // } else {
        props.handleLogin(user);
        setUser(user);
       
        
    }

    return (
        <form className='mt-3' onSubmit = {handleSubmit}>

        <div className="form-group text-left mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" 
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                    name="username"
                    onChange={handleChange}
                    value={user.username}/>
        </div>

        <div className="form-group text-left mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" 
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={user.email}/>
        </div>
        <div className="form-group text-left mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" 
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={user.password}/>
            <span className="text-danger mt-2">{error}</span>
        </div>

        <button type="submit" className="bt btn-primary mt-3">Login</button>

        </form>
    )


}

export default LoginForm