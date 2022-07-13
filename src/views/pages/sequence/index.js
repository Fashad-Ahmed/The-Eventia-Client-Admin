import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
const Sequence = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [seq, setSeq] = useState(0)

  const handleSubmit = async () => {
    const user = {
      title,
      type,
      seq,
    }
    console.log('submit', user)
    // `Bearer ${localStorage.getItem('token')}`,
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJncHJpbWUiLCJzdWIiOiI1ZjcyNGIxNjM2YTBjOTM4ZTgxZmU3MGMiLCJpYXQiOjE2MDEzMjU4NDY1MjUsImV4cCI6MTYzMjg2MTg0NjUyNX0.26JC9J45cV2U-PyKYFTbsHWkZm4W0UQHpclGoH60Uww',
      },
      body: JSON.stringify(user),
    }

    try {
      await fetch(
        'http://ec2-18-221-225-136.us-east-2.compute.amazonaws.com:5000/api/sequence/add',
        requestOptions,
      )
        .then((response) => response.json())
        .then((res) => {
          console.log('submitted', res)
          setTitle('')
          setType('')
          setSeq(0)
          //   history.push("/dashboard");
        })
    } catch (err) {
      toast.error('Not Submitted', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Title"
                        type="text"
                        aria-label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Type"
                        type="text"
                        aria-label="Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Sequence"
                        type="number"
                        aria-label="Sequence"
                        value={seq}
                        onChange={(e) => setSeq(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton
                          color="primary"
                          variant="outline"
                          className="px-4"
                          onClick={handleSubmit}
                        >
                          Submit
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Sequence
