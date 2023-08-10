import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BedAvaliability = () => {
    const appLink = "https://api.rootnet.in/covid19-in/hospitals/beds"
    const [bedavailable, SetBedAvailability] = useState({ "data": { "regional": [] } }
    )
    const [isLoading, Setisloading] = useState(true)

    useEffect(
        ()=>{
            fetchData()
        }
    )

    const fetchData = () => {
        axios.get(appLink).then(
            (response) => {
                SetBedAvailability(response.data)
                Setisloading(false)
            }
        )
    }


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">State</th>
                                            <th scope="col">Rural Hospital</th>
                                            <th scope="col">Rural Beds</th>
                                            <th scope="col">Urban Hospital</th>
                                            <th scope="col">Urban Beds</th>
                                            <th scope="col">Total Hospitals</th>
                                            <th scope="col">Total Beds</th>
                                            <th scope="col">As On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoading ? (<div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>) : (bedavailable.data.regional.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value.state}</td>
                                                    <td>{value.ruralHospitals}</td>
                                                    <td>{value.ruralBeds}</td>
                                                    <td>{value.urbanHospitals}</td>
                                                    <td>{value.urbanBeds}</td>
                                                    <td>{value.totalHospitals}</td>
                                                    <td>{value.totalBeds}</td>
                                                    <td>{value.asOn}</td>

                                                </tr>

                                            }
                                        )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default BedAvaliability