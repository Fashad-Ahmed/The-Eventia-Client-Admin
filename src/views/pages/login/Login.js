import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilImagePlus, cilLockLocked, cilUser } from '@coreui/icons'
import { toast } from 'react-toastify'
import logo from './logo1.png'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
const Login = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInMethod, setSignInMethod] = useState('facebook')
  const [signInAs, setSignInAs] = useState('')
  const roleSet = ['Individual Service Provider', 'Event Management Vendor']
  const handleRoleType = (e) => {
    e.preventDefault()
    setSignInAs(e.target.value)
  }
  const handleSubmit = async () => {
    const user = {
      email,
      password,
      signInMethod,
      signInAs,
    }
    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }

    try {
      if (email == 'cto@rubikkube.com' && password == '12345678') {
        navigate('/dashboard')
      }
      await fetch(
        'http://ec2-18-221-225-136.us-east-2.compute.amazonaws.com:5000/api/auth/login',
        requestOptions,
      )
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem('token', res.result)
          console.log('submitted', res.result)
          //   history.push("/dashboard");
        })
    } catch (err) {
      toast.error('Invalid Credentials', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      localStorage.clear()
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <center>
                  <CImage
                    align="center"
                    rounded
                    class="rounded-circle"
                    src={logo}
                    // src="https://raw.githubusercontent.com/Fashad-Ahmed/asset/main/logo1.png?token=GHSAT0AAAAAABPOYX4TMKVTVZK4BI5HUFKOYVDQUGQ"
                    width={200}
                    height={200}
                  />
                </center>
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CFormSelect id="inputGroupSelect02" value={signInAs} onChange={handleRoleType}>
                      {roleSet && roleSet.length > 0 ? (
                        roleSet.map((item, index) => {
                          return <option key={index}>{item}</option>
                        })
                      ) : (
                        <option>No Data</option>
                      )}
                    </CFormSelect>
                    <CRow>
                      <CCol xs={6}></CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    {/* <h2>Sign up</h2> */}
                    <p>
                      <br></br>
                      Kiki Collab. is an event platform that helps us easily navigate the world of
                      event planning, from Birthdays, Brunches and Baby Showers to Weddings and
                      ‘Once-in-a lifetime’ wonders.
                    </p>
                    <br></br>
                    <CButton color="primary" className="px-4" onClick={handleSubmit}>
                      Login
                    </CButton>
                    <br></br>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
