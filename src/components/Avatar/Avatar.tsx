import React, { ReactElement } from 'react';

interface AvatarProps {
  backgroundImageUrl: string;
}

const Avatar = (props: AvatarProps): ReactElement => {
  const { backgroundImageUrl } = props;
  return (
    <div
      style={{
        height: '35px',
        width: '35px',
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '50%',
        marginLeft: '5px'
      }}
    />
  );
};

export default Avatar;
