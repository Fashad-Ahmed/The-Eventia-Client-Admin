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
  CFormSelect,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './edit.css'

const VendorProfile = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [seq, setSeq] = useState('')
  const [location, setLocation] = useState('')
  const [skill, setSkill] = useState([])
  const [imageURL, setImageURL] = useState('')
  const [videoURL, setVideoURL] = useState('')
  const [coverURL, setCoverURL] = useState('')
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])

  const skillList = [
    'Bartending',
    'Catering',
    'Chef',
    'DJ',
    'Event Setup & Cleaning',
    'Event Staff',
    'Hair & Makeup Artist',
    'Models',
    'Photo & Video Editing',
    'Photography & Video',
    'Promotional Staff',
    'Wedding Assistant',
    'Wedding Help',
    'Wedding photography',
    'Wedding Planning',
    'Product Photography',
    'Photography',
    'Photography Dublin',
    'Photography Cork',
    'Photography Limerick',
    'Xmas Help',
    'Other Tasks',
  ]
  const handleSubmit = async () => {
    const user = {
      title,
      type,
      seq,
      location,
      skill,
      imageURL,
      videoURL,
      coverURL,
      photos,
      videos,
    }
    console.log('submit', user)
    localStorage.setItem('title', title)
    localStorage.setItem('type', type)
    localStorage.setItem('seq', seq)
    localStorage.setItem('location', location)
    localStorage.setItem('skill', skill)
    localStorage.setItem('imageURL', imageURL)
    localStorage.setItem('videoURL', videoURL)
    localStorage.setItem('coverURL', coverURL)
    localStorage.setItem('photos', photos)
    localStorage.setItem('videos', videos)

    setTitle('')
    setType('')
    setSeq('')
    setLocation('')
    setSkill([])
    setImageURL('')
    setVideoURL('')
    setCoverURL('')
    setPhotos([])
    setVideos([])
    // `Bearer ${localStorage.getItem('token')}`,
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJncHJpbWUiLCJzdWIiOiI1ZjcyNGIxNjM2YTBjOTM4ZTgxZmU3MGMiLCJpYXQiOjE2MDEzMjU4NDY1MjUsImV4cCI6MTYzMjg2MTg0NjUyNX0.26JC9J45cV2U-PyKYFTbsHWkZm4W0UQHpclGoH60Uww',
    //   },
    //   body: JSON.stringify(user),
    // }

    // try {
    //   await fetch(
    //     'http://ec2-18-221-225-136.us-east-2.compute.amazonaws.com:5000/api/sequence/add',
    //     requestOptions,
    //   )
    //     .then((response) => response.json())
    //     .then((res) => {
    //       console.log('submitted', res)
    //       setTitle('')
    //       setType('')
    //       setSeq(0)
    //       //   history.push("/dashboard");
    //     })
    // } catch (err) {
    //   toast.error('Not Submitted', {
    //     position: 'bottom-center',
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   })
    // }
  }

  const handleSkillType = (e) => {
    e.preventDefault()
    setSkill(e.target.value)
    console.log('hello')
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
                    <center>
                      <h1>Vendor Profile</h1>
                      <CImage
                        align="center"
                        rounded
                        class="rounded-circle"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTsXeW4YKA1CZXwfiOMa3wC1jNRIuQfN705eEUimicEWl8Dq5sNnpbc8hT1i53F0Jbuc&usqp=CAU"
                        width={200}
                        height={200}
                      />
                    </center>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Vendor Name"
                        type="text"
                        aria-label="Vendor Name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Coverage Area"
                        type="text"
                        aria-label="Coverage Area"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Speciality"
                        type="text"
                        aria-label="Speciality"
                        value={seq}
                        onChange={(e) => setSeq(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1"> </CInputGroupText>
                      <CFormInput
                        placeholder="Zip Code | Locality"
                        type="text"
                        aria-label="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormSelect id="inputGroupSelect02" value={skill} onChange={handleSkillType}>
                        {skillList && skillList.length > 0 ? (
                          skillList.map((item, index) => {
                            return <option key={index}>{item}</option>
                          })
                        ) : (
                          <option>No Data</option>
                        )}
                      </CFormSelect>
                      <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                        What Service do you offer
                      </CInputGroupText>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Recent Event Image URL"
                        type="text"
                        aria-label="ImageURL"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Recent Event Video URL"
                        type="text"
                        aria-label="VideoURL"
                        value={videoURL}
                        onChange={(e) => setVideoURL(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Recent Event Portfolio URL"
                        type="text"
                        aria-label="CoverURL"
                        value={coverURL}
                        onChange={(e) => setCoverURL(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="inputGroupFile01">
                        Upload Picture
                      </CInputGroupText>
                      <CFormInput
                        type="file"
                        id="inputGroupFile01"
                        value={photos}
                        onChange={(e) => setPhotos(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="inputGroupFile01">
                        Upload Video
                      </CInputGroupText>
                      <CFormInput
                        type="file"
                        id="inputGroupFile01"
                        value={videos}
                        onChange={(e) => setVideos(e.target.value)}
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

export default VendorProfile
