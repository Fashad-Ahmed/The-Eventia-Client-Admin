import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
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
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from './logo1.png'
import './index.css'

const Register = () => {
  let navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInAs, setSignInAs] = useState('')
  const roleSet = ['Individual Service Provider', 'Event Management Vendor']
  const handleRoleType = (e) => {
    e.preventDefault()
    setSignInAs(e.target.value)
  }
  const handleCreateAccount = () => {
    const user = {
      username,
      email,
      password,
      signInAs,
    }
    console.log(user)
    navigate('/')
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
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
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
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
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
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
                  <br />
                  <div className="d-grid">
                    <CButton color="primary" onClick={handleCreateAccount}>
                      Create Account
                    </CButton>
                  </div>
                  <div className="d-grid">
                    <Link to="/">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Back to login
                      </CButton>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
