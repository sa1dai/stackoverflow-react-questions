import React, { ReactElement } from 'react';

interface AvatarProps {
  backgroundImageUrl: string;
}

const Avatar = (props: AvatarProps): ReactElement | null => {
  const { backgroundImageUrl } = props;
  const isGravatar = (url: string): boolean => url.includes('www.gravatar.com');
  if (isGravatar(backgroundImageUrl)) {
    return null;
  }
  return (
    <span
      style={{
        height: '40px',
        width: '40px',
        display: 'inline-block',
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        borderRadius: '50%'
      }}
    />
  );
};

export default Avatar;
