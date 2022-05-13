import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from "/src/components/utilities/imageLoader";
import defaultImg from "/src/assets/images/mark-icon.png";
const MidCardMentor = ({item}) => {
    const {avatar_url, first_name, about, username} = item;
    return (
        <div className="mentor">
            <div className="image-container">
                <div className="mentor-profile-image">
                    <Image
                        loader={imageLoader}
                        layout="fill"
                        className="mentor-profile-image"
                        objectFit="cover"
                        src={avatar_url ? avatar_url : defaultImg}
                        alt="Molly McClurg"
                    />
                </div>
            </div>
            <div className="mentor-card-profile">
                <h2>{first_name}</h2>
                <h3>UX Designer at HubSpot</h3>
                <ul className="simple-tags">
                    <li>User Experience</li>
                    <li>Product Design</li>
                    <li>Research</li>
                </ul>
                <p>
                    {about}
                </p>
                <Link href={`/mentors/${username}`}>
                    <a className="button primary mt-3">View Profile</a>
                </Link>
            </div>
        </div>
    )
}
export default MidCardMentor;