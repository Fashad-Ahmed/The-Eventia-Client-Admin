import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import './index.css'
import { CCard } from '@coreui/react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { format } from 'timeago.js'
import GoogleMapReact from 'google-map-react'

const PreferLocation = () => {
  const center = {
    lat: 59.95,
    lng: 30.33,
  }
  const zoom = 11
  const myStorage = window.localStorage
  const [currentUsername, setCurrentUsername] = useState('user')
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  const [star, setStar] = useState(0)
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  })
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const data = [
    ['Dublin', 'Street6 Street9 '],
    ['Dubai', 'Street6 Street9 '],
    ['London', ' Street9 '],
    ['Paris', 'Street6 Street9 '],
    ['Rome', 'Street6 Street9 '],
    ['New York', 'Block B C-30'],
    ['Tokyo', 'Street6 Street9 '],
    ['Beijing', 'Street6  '],
    ['Seoul', 'Street6 Block9 '],
  ]

  const columns = ['Location', 'Coverage Area']

  const options = {
    filterType: 'checkbox',
  }

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id)
    setViewport({ ...viewport, latitude: lat, longitude: long })
  }

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat
    setNewPlace({
      lat: latitude,
      long: longitude,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    }

    // try {
    //   const res = await axios.post('/pins', newPin)
    //   setPins([...pins, res.data])
    //   setNewPlace(null)
    // } catch (err) {
    //   console.log(err)
    // }
  }

  // useEffect(() => {
  //   const getPins = async () => {
  //     try {
  //       const allPins = await axios.get('/pins')
  //       setPins(allPins.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getPins()
  // }, [])

  const handleLogout = () => {
    setCurrentUsername(null)
    // myStorage.removeItem('user')
  }
  const accessToken =
    'pk.eyJ1IjoiZmFzLTIwMCIsImEiOiJjbDM0YnFiOWEwd3JmM2NtdzVkeG9meHFvIn0.8MVQRx5I6a70y8WGiDVjtg'
  return (
    <div className="bg-color">
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCk14Y_qWfJ5c4wHrTjJQG3rRA60mbeLLM' }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>

        {/* <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={accessToken}
          width="100%"
          height="100%"
          transitionDuration="200"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          // mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
          onViewportChange={(viewport) => setViewport(viewport)}
          onDblClick={currentUsername && handleAddClick}
        >
          {/* {pins.map((p) => (
            <>
              <Marker
                latitude={p.lat}
                longitude={p.long}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                {/* <Room
                  style={{
                    fontSize: 7 * viewport.zoom,
                    color: currentUsername === p.username ? 'tomato' : 'slateblue',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                /> 
              </Marker>
              {p._id === currentPlaceId && (
                <Popup
                  key={p._id}
                  latitude={p.lat}
                  longitude={p.long}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setCurrentPlaceId(null)}
                  anchor="left"
                >
                  <div className="card">
                    <label>Place</label>
                    <h4 className="place">{p.title}</h4>
                    <label>Review</label>
                    <p className="desc">{p.desc}</p>
                    {/* <label>Rating</label>
                    <div className="stars">{Array(p.rating).fill(<Star className="star" />)}</div> 
                    <label>Information</label>
                    <span className="username">
                      Created by <b>{p.username}</b>
                    </span>
                    <span className="date">{format(p.createdAt)}</span>
                  </div>
                </Popup>
              )}
            </>
          ))}
          {newPlace && (
            <>
              <Marker
                latitude={newPlace.lat}
                longitude={newPlace.long}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                {/* <Room
                  style={{
                    fontSize: 7 * viewport.zoom,
                    color: 'tomato',
                    cursor: 'pointer',
                  }}
                /> 
              </Marker>
              <Popup
                latitude={newPlace.lat}
                longitude={newPlace.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setNewPlace(null)}
                anchor="left"
              >
                <div>
                  <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                      placeholder="Enter a title"
                      autoFocus
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea
                      placeholder="Say us something about this place."
                      onChange={(e) => setDesc(e.target.value)}
                    />
                    <label>Rating</label>
                    <select onChange={(e) => setStar(e.target.value)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button type="submit" className="submitButton">
                      Add Pin
                    </button>
                  </form>
                </div>
              </Popup>
            </>
          )} *
        </ReactMapGL> */}
      </div>
      <MUIDataTable title={'Coverage Areas List'} data={data} columns={columns} options={options} />
    </div>
  )
}

export default PreferLocation
