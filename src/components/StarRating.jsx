import React from 'react'

const StarRating = ({ratings}) => {
    const star = [];
    for(let i = 1;i<=5;i++){
        if(i <= ratings){
            star.push(<i key={i} className="fas fa-star text-warning"></i>)
        }else if(i === Math.ceil(ratings) && !Number.isInteger(ratings)){
            star.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>)
        }
        else{
            star.push(<i key={i} className="far fa-star text-warning"></i>)
        }
    }
    return (
        <div>
            {star}
        </div>
    )
}

export default StarRating
