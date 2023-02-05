// import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Social } from '../social.interface';
import './social.css';

interface Props {
    social: Social;
}

export const SocialInstance: React.FC<Props> = (props: Props) => {
    const openSocial = () => {
        window.open(props.social.url);
    };

    // const iconProp: IconName = props.social.icon;

    return (
        <div className="Social" onClick={() => openSocial()}>
            <FontAwesomeIcon icon={['fab', 'github']} />
        </div>
    );
};
