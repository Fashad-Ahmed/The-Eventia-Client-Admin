import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChart, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cibUbuntu,
} from '@coreui/icons'

import { games } from './data'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from './widget'
import WidgetsDropdown from './wij'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJncHJpbWUiLCJzdWIiOiI1ZjViZGE0M2Y2YWFhYTJhNjhjNGIyNzQiLCJpYXQiOjE1OTk4NTUxNzIxNTIsImV4cCI6MTYzMTM5MTE3MjE1Mn0.aQcCPEeIEpMhiyc6vYcoDRTGqPJ67br_cQ2xzNzFtKA',
    },
  }

  try {
    fetch(
      'http://ec2-18-221-225-136.us-east-2.compute.amazonaws.com:5000/api/sequence/add',
      requestOptions,
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
      })
  } catch (err) {
    console.log(err)
  }

  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  const progressExample = games.map((game) => {
    return {
      title: game.name,
      value: game.purchasePrice,
      percent: game.perDay,
      color: 'info',
    }
  })

  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  const progressGroupExample1 = games.map((game) => {
    return {
      title: game.name,
      value1: game.purchasePriceInPKR ? game.purchasePriceInPKR : 2000,
      value2: game.minimumSubscription ? game.minimumSubscription : 100,
    }
  })

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: cilUser, value: 53 },
  //   { title: 'Female', icon: cilUserFemale, value: 43 },
  // ]

  const progressGroupExample2 = games.map((game) => {
    return {
      title:
        game.primary == 'Undefined' || game.primary == 'Not Set'
          ? `User ${game.region}`
          : `${game.primary} ${game.region}`,
      icon: cilUser,
      value: game.perDay > 100 ? 100 : game.perDay,
    }
  })

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  // ]

  const consoleCount = games.reduce((acc, curr) => {
    if (acc[curr.console]) {
      acc[curr.console]++
    } else {
      acc[curr.console] = 1
    }
    return acc
  }, {})

  const progressGroupExample3 = Object.keys(consoleCount).map((key) => {
    return {
      title: key,
      icon: cibGoogle,
      percent: consoleCount[key],
      value: consoleCount[key],
    }
  })

  const gameTypeCount = games.reduce((acc, curr) => {
    if (acc[curr.gameType]) {
      acc[curr.gameType]++
    } else {
      acc[curr.gameType] = 1
    }
    return acc
  }, {})

  const progressGroupExample4 = Object.keys(gameTypeCount).map((key) => {
    return {
      title: key !== 'undefined' ? key : 'Other',
      icon: cibUbuntu,
      percent: gameTypeCount[key],
      value: gameTypeCount[key],
    }
  })

  const totalNumberOfGames = games.reduce((acc, curr) => {
    return acc + parseInt(curr._id)
  }, 0)
  const totalPurchasePrice = games.reduce((acc, curr) => {
    return acc + parseInt(curr.purchasePrice)
  }, 0)
  const totalMinimumSubscription = games.reduce((acc, curr) => {
    return acc + parseInt(curr.minimumSubscription)
  }, 0)

  const totalNumberOfPurchasedGames = games.reduce((acc, curr) => {
    if (curr.purchaseStatus == 'Purchased' || curr.purchaseStatus == 'Purchashed') {
      return acc + 1
    } else {
      return acc
    }
  }, 0)

  const getRandomColor = () => {
    const colors = ['info', 'success', 'warning', 'primary', 'danger']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const tableExample = games.map((game) => {
    return {
      avatar: game.imageURL,
      user: {
        name: game.primary == 'Undefined' || game.primary == 'Not Set' ? `User` : game.primary,
        new: true,
        registered: game.year == 'Undefined' || game.year == 'Not Set' ? game.year : 2019,
      },
      country: { name: game.region },
      usage: {
        value: game.perDay > 100 ? 100 : game.perDay - 5,
        period: game.createdAt,
        color: getRandomColor(),
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: games.perDay ? parseInt(games.perDay) : 4,
    }
  })

  function getRandomName() {
    return games[Math.floor(Math.random() * games.length)].name
  }

  const barChartLabels = games.map((game) => {
    return game.name
  })

  const barChartData = games.map((game) => {
    return game.perDay
  })

  const barChartColor = games.map((game) => {
    return '#' + (~~(Math.random() * 2 ** 24)).toString(16).padStart(6, 0)
  })

  console.log(barChartData)
  console.log(barChartLabels)
  console.log(barChartColor)

  return (
    <>
      <WidgetsDropdown />
      {/* <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">Over the years of development</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Stats'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Stats'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: `${getRandomName()}`,
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: `${getRandomName()}`,
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(60, 180),
                    random(60, 180),
                    random(60, 180),
                    random(60, 180),
                    random(60, 180),
                    random(60, 180),
                    random(60, 180),
                  ],
                },
                {
                  label: `${getRandomName()}`,
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
                {
                  label: `${getRandomName()}`,
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-warning'),
                  pointHoverBackgroundColor: getStyle('--cui-warning'),
                  borderWidth: 2,
                  data: [
                    random(80, 190),
                    random(80, 190),
                    random(80, 190),
                    random(80, 190),
                    random(80, 190),
                    random(80, 190),
                    random(80, 190),
                  ],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow md={{ cols: 2 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard> */}

      {/* <WidgetsBrand withCharts /> */}

      {/* <CRow className="text-center">
        <div>
          <CChart
            type="polarArea"
            data={{
              labels: barChartLabels,
              datasets: [
                {
                  data: barChartData,
                  backgroundColor: barChartColor,
                },
              ],
            }}
          />
        </div>
        {/* <CChart
          type="polarArea"
          data={{
            labels: { barChartLabels },
            datasets: [
              {
                data: { barChartData },
                backgroundColor: { pieRandomColor },
              },
            ],
          }}
        /> 
      </CRow> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              {/* <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Games</div>
                        <div className="fs-5 fw-semibold">{totalNumberOfGames}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Income</div>
                        <div className="fs-5 fw-semibold">{totalPurchasePrice}</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Subscriptions</div>
                        <div className="fs-5 fw-semibold">{totalMinimumSubscription}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Purchases</div>
                        <div className="fs-5 fw-semibold">{totalNumberOfPurchasedGames}</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>
                  <div className="mb-5"></div>

                  {progressGroupExample4.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="primary" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow> */}

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    {/* <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell> */}
                    <CTableHeaderCell>Customer</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Location</CTableHeaderCell>
                    <CTableHeaderCell>Task Completed</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell> */}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      {/* <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell> */}
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.country.name}</div>

                        {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
