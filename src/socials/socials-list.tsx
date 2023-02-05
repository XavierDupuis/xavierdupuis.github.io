import React from 'react';
import { Social } from './social.interface';
import { SocialInstance } from './social/social';

interface Props {
    socials: Social[];
}

export const Socials: React.FC<Props> = ({ socials }: Props) => {
    const renderSocial = (social: Social) => {
        return <SocialInstance social={social} />;
    };

    return (
        <div>
            <h1>Socials</h1>
            <div className="socials">{socials.map(renderSocial)}</div>
        </div>
    );
};
