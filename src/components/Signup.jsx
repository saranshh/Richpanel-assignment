import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useUserAuth } from '../context/UserAuthContext'


function Signup() {

    const formRef = React.useRef();

    const { signup } = useUserAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        try {
            await signup({
                name: name,
                email: registerEmail,
                password: registerPassword
            })
            navigate('/signin')
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#004D95", height: "100vh" }}>
            <div style={{ height: "60vh", width: "50vh", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>


                <Box
                    component="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1.5, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{textAlign: "center", fontWeight: "bold", fontSize: "1rem"}}>
                        <h3>Create Account</h3>
                    </div>
                    <TextField id="outlined-basic"
                        label="Name"
                        type="name"
                        variant="outlined"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <br />
                    <TextField id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        onChange={(e) => {
                            setRegisterEmail(e.target.value)
                        }}
                    />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setRegisterPassword(e.target.value)
                        }}
                    />
                    <br />
                    <p style={{ fontSize: "12px" }}>Already have an account?
                        <Link href="/signin" style={{textDecoration: "none"}}> Login</Link></p>
                    <Button variant="contained" type="submit">Sign Up</Button>
                </Box>
            </div>
        </div>
    )
}

export default Signup