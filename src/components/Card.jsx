import React, { useState } from 'react'
import '../styles/card.css'
import { BiTransfer, BiCommentDetail } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'


const Card = ({ players }) => {


    const [currentDate, setCurrentDate] = useState(new Date())
    const [currancyRate, setCurrancyRate] = useState(1)



    const handleCurr = (e) => {
        if (e.target.value === "dollar") {
            setCurrancyRate(1)
        } else {
            setCurrancyRate(1.5)
        }
    }

    const getFinalPrice = (_price) => {
        return Math.floor(_price * currancyRate);
    }
    const getDate = (_date) => {
        return currentDate.getFullYear() - new Date(_date).getFullYear();

    }
    return (
        <>
            <div className='currency'>
                <label htmlFor='dollar'>Dollar</label>
                <input type="radio" id="dollar" value="dollar" onClick={handleCurr} name='currncyMood' />
                <label htmlFor='euro'>Euro</label>
                <input type="radio" id="euro" value="euro" onClick={handleCurr} name='currncyMood' />
            </div>
            {players.map((player, index) => (
                <div className='card' key={index}>
                    <div className="player-img">
                        <img src={`https://semedia.filgoal.com/Photos/Person/medium/${player.id}.png`} alt="player-img" />
                        <span className='player-price'>{player.careerData[0].price ? getFinalPrice(player.careerData[0].price) : "0"}M $ </span>
                    </div>
                    <p className='player-name'>{player.name} </p>
                    <div className="player-info">
                        <div className="trans">
                            <span>انتقال</span>
                            <BiTransfer />
                        </div>
                        |
                        <div className="player-age">
                            <span>{getDate(player.dateOfBirth)} عام</span>
                            <BsFillPersonFill />
                        </div>
                    </div>
                    <div className="club-info">
                        <div className="current-club">
                            <img src={`https://semedia.filgoal.com/Photos/Team/Medium/${player.careerData[0].teamId}.png`} alt="current-club" />
                            <span className="club-name">{player.careerData[0].teamName}</span>
                        </div>
                        <div className="trans-date">
                            <img src="./Group 48.svg" alt="prev-club" />
                            <span className="trans-year">2023</span>
                        </div>
                        <div className="prev-club">
                            <img src={`https://semedia.filgoal.com/Photos/Team/Medium/${player.careerData[1].teamId}.png`} alt="prev-club" />
                            <span className="club-name">{player.careerData[1].teamName}</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="likes">
                            <div className='like'>
                                <AiFillLike />
                                <span>48</span>
                            </div>
                            <div className='dislike'>
                                <AiFillDislike />
                                <span>8</span>
                            </div>
                        </div>

                        <div className="comments">
                            <span>26 تعليق</span>
                            <BiCommentDetail />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


export default Card