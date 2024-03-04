npimport React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Featured.css'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    
    



    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore Raising Capital for Your Small Business </h2>
                    <p>Mint your own Capital NFT's. Pay Interest</p>
                    <button className='btn'>Invest in Capital NFT's</button>
                    <p>Mint your own Profit Share NFT's. Share Profit</p>
                    <button className='btn'>Invest in Profit Share NFT's </button>
                </div>

                {/* Right */}

                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{"qBit".toLocaleString()}</h5>
                            <p>${"100000".toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < -100 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {"5.50".toLocaleString()}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {"5.50".toLocaleString()}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{"qBit".toLocaleString()}</h5>
                            <p>${"50000".toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < -100 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {"3.50".toLocaleString()}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {"3.50".toLocaleString()}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{"qBit".toLocaleString()}</h5>
                            <p>${"25000".toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < -100 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {"2.50".toLocaleString()}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {"2.50".toLocaleString()}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{"qBit".toLocaleString()}</h5>
                            <p>${"100000".toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < -100 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {"2.00".toLocaleString()}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {"2.00".toLocaleString()}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{"qBit".toLocaleString()}</h5>
                            <p>${"50000".toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < -100 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {"5.50".toLocaleString()}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {"1.50".toLocaleString()}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{"qBit".toLocaleString()}</h5>
                            <p>${"25000".toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < -100 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {"3.50".toLocaleString()}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {"1.00".toLocaleString()}%
                                </span>
                            )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
