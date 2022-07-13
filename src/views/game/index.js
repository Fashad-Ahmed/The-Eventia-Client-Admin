import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardImage,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCardHeader,
  CCardTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
import './index.css'
const AddGame = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [developer, setDeveloper] = useState('')
  const [gameType, setGameType] = useState([])
  const [console, setConsole] = useState('')
  const [region, setRegion] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [purchaseStatus, setPurchaseStatus] = useState('')
  const [perDay, setPerDay] = useState(0)
  const [minimumSubscription, setMinimumSubscription] = useState(0)
  const [year, setYear] = useState(0)
  const [packageId, setPackageId] = useState('')
  const [psn, setPsn] = useState('')
  const [twoFA, setTwoFA] = useState(false)
  const [psnID, setPsnID] = useState('')
  const [consoleSerialNumber, setConsoleSerialNumber] = useState('')
  const [purchasePriceInPKR, setPurchasePriceInPKR] = useState('')
  const [primary, setPrimary] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [videoURL, setVideoURL] = useState('')
  const [coverURL, setCoverURL] = useState('')
  const [typeGame, setTypeGame] = useState([])
  const [photos, setPhotos] = useState([])

  const gamesTypeList = [
    'Sandbox',
    'Real-time strategy (RTS)',
    'Shooters (FPS and TPS)',
    'Multiplayer online battle arena (MOBA)',
    'Role-playing (RPG)',
    'Simulation',
    'sports',
    'Puzzlers',
    'Action-adventure',
    'Survival and horror',
    'Platformer',
    'exclusive',
    'popular',
    'mostRented',
  ]
  const handleGameType = (e) => {
    e.preventDefault()
    setGameType(e.target.value)
    console.log('hello')
  }
  const handleSubmit = async () => {
    const user = {
      name,
      description,
      developer,
      gameType,
      console,
      region,
      purchasePrice,
      purchaseStatus,
      perDay,
      minimumSubscription,
      year,
      packageId,
      psn,
      twoFA,
      psnID,
      consoleSerialNumber,
      purchasePriceInPKR,
      primary,
      imageURL,
      videoURL,
      coverURL,
      typeGame,
      photos,
      registeredPhone: '03333426401',
    }

    console.log(user)
    // console.log('submit', user)
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJncHJpbWUiLCJzdWIiOiI1ZjY5YmI4NmNjZmIzMDAwMDQ0YmE0YmMiLCJpYXQiOjE2MDI1MjIyODE1NzAsImV4cCI6MTYzNDA1ODI4MTU3MH0.m7WKeknLDFFkDQy9cC0EuiVtb5-a2dqlLiM_fP04ocA',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
    try {
      await fetch(
        'http://ec2-18-221-225-136.us-east-2.compute.amazonaws.com:5000/api/game/add',
        requestOptions,
      )
        .then((response) => response.json())
        .then((res) => {
          console.log('submitted', res)
          setName('')
          setDescription('')
          setDeveloper('')
          setGameType([])
          setConsole('')
          setRegion('')
          setPurchasePrice('')
          setPurchaseStatus('')
          setPerDay(0)
          setMinimumSubscription(0)
          setYear(0)
          setPackageId('')
          setPsn('')
          setTwoFA(false)
          setPsnID('')
          setConsoleSerialNumber('')
          setPurchasePriceInPKR('')
          setPrimary('')
          setImageURL('')
          setVideoURL('')
          setCoverURL('')
          setTypeGame([])
          setPhotos([])
          toast.success('Game added successfully!')
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
                  <CCard style={{ width: '18rem' }}>
                    <CCardImage
                      orientation="top"
                      src="https://canvasjs.com/wp-content/uploads/images/gallery/react-charts/overview/react-drilldown-charts-graphs.png"
                    />
                    <CCardBody>
                      <CCardText>1800 Returning Customers</CCardText>
                    </CCardBody>
                  </CCard>
                  <br />
                  <CCard style={{ width: '18rem' }}>
                    <CCardImage
                      orientation="top"
                      src="https://canvasjs.com/wp-content/uploads/images/gallery/react-charts/pie/react-funnel-charts-graphs.png"
                    />
                    <CCardBody>
                      <CCardText>80% Profit</CCardText>
                    </CCardBody>
                  </CCard>
                  <br></br>
                  <br></br>

                  <div className="d-grid">
                    <CButton color="primary">Submit Feedback Request</CButton>
                  </div>
                  <br></br>
                  <br></br>

                  <CCard>
                    <CCardHeader>Feedbacks</CCardHeader>
                    <CCardBody>
                      <CCardTitle>The service is superb</CCardTitle>
                      <CCardText>
                        I am astonished the amount and quality of work has been done. Highly
                        recommended.
                      </CCardText>
                      <CButton href="#">Walter Samuel, MIT, USA</CButton>
                    </CCardBody>
                    <br></br>
                    <br></br>

                    <CCardBody>
                      <CCardTitle>Highly Impressed!!</CCardTitle>
                      <CCardText>
                        I am astonished the amount and quality of work has been done. Highly
                        recommended.
                      </CCardText>
                      <CButton href="#">Jon Jones, Qwik, Canada</CButton>
                    </CCardBody>
                  </CCard>
                  <br></br>
                  <br></br>

                  <CCard style={{ width: '18rem' }}>
                    <CCardImage
                      orientation="top"
                      src="https://searchengineland.com/wp-content/seloads/2018/11/Google-Reviews-Study-How-Many-Reviews-Do-Local-Businesses-Need-How-Many-Reviews-Do-Businesses-Need-2018-11-06.jpg"
                    />
                  </CCard>

                  {/* <CCard style={{ width: '18rem' }}>
                    <CCardImage orientation="top" src="/images/react.jpg" />
                    <CCardBody>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the cars content.
                      </CCardText>
                    </CCardBody>
                  </CCard> */}
                  {/*                   
                   <CForm>
                     <CImage
                      align="center"
                      rounded
                      class="rounded-circle"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTsXeW4YKA1CZXwfiOMa3wC1jNRIuQfN705eEUimicEWl8Dq5sNnpbc8hT1i53F0Jbuc&usqp=CAU"
                      width={300}
                      height={300}
                    /> 
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Name"
                        type="text"
                        aria-label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormTextarea
                        placeholder="Description"
                        type="text"
                        aria-label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Developer"
                        type="text"
                        aria-label="Developer"
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormSelect
                        id="inputGroupSelect02"
                        value={gameType}
                        onChange={handleGameType}
                      >
                        {gamesTypeList && gamesTypeList.length > 0 ? (
                          gamesTypeList.map((item, index) => {
                            return <option key={index}>{item}</option>
                          })
                        ) : (
                          <option>No Data</option>
                        )}
                      </CFormSelect>
                      <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                        Game Type
                      </CInputGroupText>
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Console"
                        type="text"
                        aria-label="Console"
                        value={console}
                        onChange={(e) => setConsole(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Region"
                        type="text"
                        aria-label="Region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Purchase Price"
                        type="text"
                        aria-label="Purchase Price"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Purchase Status"
                        type="text"
                        aria-label="Purchase Status"
                        value={purchaseStatus}
                        onChange={(e) => setPurchaseStatus(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Per Day</CInputGroupText>

                      <CFormInput
                        placeholder="Per Day"
                        type="text"
                        aria-label="Per Day"
                        value={perDay}
                        onChange={(e) => setPerDay(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Minimum Subscription</CInputGroupText>

                      <CFormInput
                        placeholder="MinimumSubscription"
                        type="text"
                        aria-label="MinimumSubscription"
                        value={minimumSubscription}
                        onChange={(e) => setMinimumSubscription(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Year</CInputGroupText>

                      <CFormInput
                        placeholder="Year"
                        type="text"
                        aria-label="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Package Id"
                        type="text"
                        aria-label="Package Id"
                        value={packageId}
                        onChange={(e) => setPackageId(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>
                    yeh ids aur password lgin response se ayega  
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Login Id"
                        type="text"
                        aria-label="Login Id"
                        // value={packageId}
                        // onChange={(e) => setPackageId(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Login Password"
                        type="password"
                        aria-label="Login Password"
                        // value={packageId}
                        // onChange={(e) => setPackageId(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="PSN Password"
                        type="password"
                        aria-label="PSN Password"
                        value={psn}
                        onChange={(e) => setPsn(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup
                      className="mb-3"
                      value={twoFA}
                      onChange={(e) => setTwoFA(e.target.value)}
                      valid
                      required
                    >
                      <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                        two FA
                      </CInputGroupText>
                      <CFormSelect id="inputGroupSelect02">
                        <option>true</option>
                        <option>false</option>
                      </CFormSelect>
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Registered Phone"
                        type="text"
                        aria-label="Registered Phone"
                        // value={psn}
                        // onChange={(e) => setPsn(e.target.value)}
                        aria-describedby="basic-addon1"
                      />
                     from api respone 
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="psn ID"
                        type="text"
                        aria-label="psn ID"
                        value={psnID}
                        onChange={(e) => setPsnID(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Console Serial Number"
                        type="text"
                        aria-label="Console Serial Number"
                        value={consoleSerialNumber}
                        onChange={(e) => setConsoleSerialNumber(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="purchase Price In PKR"
                        type="text"
                        aria-label="purchasePriceInPKR"
                        value={purchasePriceInPKR}
                        onChange={(e) => setPurchasePriceInPKR(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="primary"
                        type="text"
                        aria-label="primary"
                        value={primary}
                        onChange={(e) => setPrimary(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="ImageURL"
                        type="text"
                        aria-label="ImageURL"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="VideoURL"
                        type="text"
                        aria-label="VideoURL"
                        value={videoURL}
                        onChange={(e) => setVideoURL(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="CoverURL"
                        type="text"
                        aria-label="CoverURL"
                        value={coverURL}
                        onChange={(e) => setCoverURL(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="TypeGame"
                        type="text"
                        aria-label="TypeGame"
                        value={typeGame}
                        onChange={(e) => setTypeGame(e.target.value)}
                        aria-describedby="basic-addon1"
                        valid
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText component="label" htmlFor="inputGroupFile01">
                        Upload
                      </CInputGroupText>
                      <CFormInput
                        type="file"
                        id="inputGroupFile01"
                        value={photos}
                        onChange={(e) => setPhotos(e.target.value)}
                        valid
                        required
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
                  </CForm>  */}
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AddGame
