import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import React from 'react';

const BackButton: React.FC = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <IconButton onClick={handleBackClick} aria-label="back">
            <ArrowBackIcon />
        </IconButton>
    );
};

export default BackButton;