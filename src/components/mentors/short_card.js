import React from "react";
import Image from 'next/image'
import imageLoader from "/src/components/utilities/imageLoader";
import defaultImg from "/src/assets/images/mark-icon.png";

const ShortCardMentor = ({item}) => {
    let { avatar_url, first_name, about, city } = item
    return(
        <div className="col-md-3">
        <article className="mentor-card">
            <div className="portfolio-avatar-placeholder">
                <Image
                    loader={imageLoader}
                    layout="fill"
                    className="portfolio-avatar-placeholder"
                    objectFit="cover"
                    src={avatar_url ? avatar_url : defaultImg}
                    alt="Molly McClurg"
                />
                <div className="availability-tag available">
                    Mentor Available
                </div>
            </div>
            <div className="card-content">
                <h3 className="ta-c">{first_name}</h3>
                <p className="title">
                    <span className="title-header">
                       {about}
                    </span>
                    <span className="hide">Austin Community College</span>
                    <span>{city}</span>
                    <a className="mentorSignup" href="/our-mentors">
                        Learn More
                    </a>
                </p>
            </div>
        </article>
    </div>
    )
}
export default ShortCardMentor