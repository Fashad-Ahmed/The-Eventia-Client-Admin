import React, { useStatae, useEffect } from 'react'

const ViewVendor = () => {
  let imgUrl = localStorage.getItem('photo')
  useEffect(() => {
    let data = localStorage.getItem('user')
    if (data) {
      // data = JSON.parse(data)
      console.log(data)
    }
  }, [])
  return (
    <>
      <div className="h-screen">
        <div className="mt-14 shadow bg-white h-screen">
          {/* PROFILE HEADER */}
          <div>
            {/* // INFOS */}
            <div className="flex justify-center flex-col mt-5 mb-3.5">
              <h1 className="text-center font-bold text-3xl">{localStorage.getItem('title')}</h1>
              {/* <a href="#" className="text-center text-blue-700 font-semibold">
                Add Bio
              </a> */}
              <hr className="full flex self-center w-2/3 mt-2" />
            </div>
            {/* // END INFOS */}
            {/* // TABS */}
            <div className="w-full flex justify-center">
              <div className="flex justify-between mb-2.5">
                {/* <ul className="flex px-5 py-1.5">
                  <li className="px-3 font-semibold text-gray-600">
                    <a href="#">Posts</a>
                  </li>
                  <li className="px-3 font-semibold text-gray-600">
                    <a href="#">About</a>
                  </li>
                  <li className="px-3 font-semibold text-gray-600">
                    <a href="#">Friends</a>
                  </li>
                  <li className="px-3 font-semibold text-gray-600">
                    <a href="#">Photos</a>
                  </li>
                  <li className="px-3 font-semibold text-gray-600">
                    <a href="#">Story Archive</a>
                  </li>
                  <li className="px-3 font-semibold text-gray-600">
                    <a href="#">More</a>
                  </li>
                </ul> */}
                {/* <ul className="flex mb:pl-14">
                  <li className="px-2 font-semibold">
                    <button className="bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold">
                      <i className="bx bx-plus-circle text-xl mr-2"></i>
                      Add to Story
                    </button>
                  </li>
                  <li className="px-2 font-semibold">
                    <button className="bg-gray-200 px-5 py-1 rounded-lg text-black font-semibold">
                      <i className="bx bx-edit-alt mr-2 text-xl"></i>
                      Edit Profile
                    </button>
                  </li>
                  <li className="px-2 font-semibold">
                    <button className="bg-gray-200 px-3 py-1 rounded-lg text-black font-semibold">
                      ...
                    </button>
                  </li>
                </ul> */}
              </div>
            </div>
            {/* // END TABS */}
          </div>
          {/* END PROFILE HEADER */}

          {/* // CONTENT */}
          <div>
            <div className="bg-gray-100 ">
              <div className="flex justify-center h-screen">
                {/* LEFT */}
                <div>
                  {/* // INTRO */}
                  <div className="mr-12 mt-4">
                    <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                      <h1 className="font-bold text-xl">{localStorage.getItem('type')}</h1>
                    </div>
                  </div>
                  {/* // END INTRO */}

                  {/* // PHOTOS */}
                  {/* <div className="mr-12 mt-4">
                    <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                      <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Photos</h1>
                        <div>
                          <img src={imgUrl} alt="profile" className="rounded-full" />
                        </div>
                        {/* <a href=`${localStorage.getItem('videoURL')}`>Video</div>
                        <div>{localStorage.getItem('coverURL')}</div> 
                      </div>
                    </div>
                  </div> */}
                  {/* // END PHOTOS */}

                  {/* // FRIENDS */}
                  <div className="mr-12 mt-4">
                    <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                      {/* Header */}
                      <div className="flex justify-between">
                        <h1 className="font-bold text-xl">{localStorage.getItem('seq')}</h1>
                        {/* <Link
                          to="/friends/myId"
                          className="text-lg text-blue-700 hover:bg-blue-200"
                        > */}
                        {localStorage.getItem('location')}
                        {/* </Link> */}
                      </div>
                      {/* List */}
                      <div className="">
                        <p className="text-base text-gray-400">{localStorage.getItem('skill')}</p>
                        <div className="grid grid-cols-3 gap-1">
                          {/* <div className="bg-white p-0.5">
                            <img
                              src="./images/profile_photo_cat.jpg"
                              className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                            />
                            <Link to={`/profile/friendId`} className="font-semibold text-sm">
                              Friend FullName
                            </Link>
                          </div>
                          <div className="bg-white p-0.5">
                            <img
                              src="./images/profile_photo_cat.jpg"
                              className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                            />
                            <Link to={`/profile/friendId`} className="font-semibold text-sm">
                              Friend FullName
                            </Link>
                          </div>
                          <div className="bg-white p-0.5">
                            <img
                              src="./images/profile_photo_cat.jpg"
                              className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                            />
                            <Link to={`/profile/friendId`} className="font-semibold text-sm">
                              Friend FullName
                            </Link>
                          </div>
                          <div className="bg-white p-0.5">
                            <img
                              src="./images/profile_photo_cat.jpg"
                              className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                            />
                            <Link to={`/profile/friendId`} className="font-semibold text-sm">
                              Friend FullName
                            </Link>
                          </div>
                          <div className="bg-white p-0.5">
                            <img
                              src="./images/profile_photo_cat.jpg"
                              className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                            />
                            <Link to={`/profile/friendId`} className="font-semibold text-sm">
                              Friend FullName
                            </Link>
                          </div>
                          <div className="bg-white p-0.5">
                            <img
                              src="./images/profile_photo_cat.jpg"
                              className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                            />
                            <Link to={`/profile/friendId`} className="font-semibold text-sm">
                              Friend FullName
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* // END FRIENDS */}
                </div>
                {/* END LEFT */}

                {/* // POST LIST */}
                <div className="w-2/5">
                  {/* CREATE POST */}
                  {/* <CreatePost /> */}
                  {/* END CREATE POST */}

                  {/* POST */}
                  {/* <Post /> */}
                  {/* END POST */}
                </div>
                {/* // END POST LIST */}
              </div>
            </div>
          </div>
          {/* // END CONTENT */}
        </div>
      </div>
    </>
  )
}

export default ViewVendor
