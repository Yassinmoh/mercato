import React, { useState } from 'react'
import '../styles/rowcard.css'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { BiCommentDetail} from 'react-icons/bi'


const RowCard = ({ players }) => {

    const [currentDate, setCurrentDate] = useState(new Date())

    const getDate = (_date) => {
        return currentDate.getFullYear() - new Date(_date).getFullYear();

    }


    return (
        <>
            {players.map((player, index) => (
                <div className='rowcard' key={index}>
                    <div className="card-comm-likes">
                        <div className="comments">
                            <span>26 تعليق</span>
                            <BiCommentDetail />
                        </div>
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
                    </div>
                    <div className="player-info">
                        <span>2023</span>
                        |
                        <span>إنتقال</span>
                        |
                        <span>عام {getDate(player.dateOfBirth)}</span>
                        |
                        <span>80M$</span>
                    </div>
                    <div className="clup-info">
                        <div className="current-club">
                            <span className="club-name">{player.careerData[0]?.teamName}</span>
                            <img src={`https://semedia.filgoal.com/Photos/Team/Medium/${player.careerData[0]?.teamId}.png`} alt="current-club" />
                        </div>
                        <div className="trans-date">
                            <img src="./Group 48.svg" alt="prev-club" />
                        </div>
                        <div className="prev-club">
                            <img src={`https://semedia.filgoal.com/Photos/Team/Medium/${player.careerData[1]?.teamId}.png`} alt="prev-club" />
                            <span className="club-name">{player.careerData[1].teamName}</span>
                        </div>
                    </div>
                    <div className="player-img">
                        <span>{player.name}</span>
                        <img src={`https://semedia.filgoal.com/Photos/Person/medium/${player.id}.png`} alt='player name' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default RowCard