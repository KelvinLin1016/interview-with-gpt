import styled from '@emotion/styled';
import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../../store';
import { openOpenAIApiKeyPanel } from '../../store/settings-ui';
import { Page } from '../page';
import { useOption } from '../../core/options/use-option';
import { isProxySupported } from '../../core/chat/openai';
import React, { useState } from 'react';
import { Button as MantineButton } from '@mantine/core';

const Container = styled.div`
    flex-grow: 1;
    padding-bottom: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Work Sans", sans-serif;
    line-height: 1.7;
    gap: 1rem;
`;

const UploadButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const UploadButton = ({ children, ...props }) => {
    return <MantineButton {...props}>{children}</MantineButton>;
  };

function LandingPage(props: any) {
    const [openAIApiKey] = useOption<string>('openai', 'apiKey');
    const dispatch = useAppDispatch();
    const onConnectButtonClick = useCallback(() => dispatch(openOpenAIApiKeyPanel()), [dispatch]);
    const [selectedJobDescription, setSelectedJobDescription] = useState(null);
    const [selectedCV, setCVDescription] = useState(null);

    const handleJobDescriptionFileInput = (e) => {
        setSelectedJobDescription(e.target.files[0]);
    };

    const handleJobDescriptionUpload = () => {
        const jobDescriptionFileInput = document.getElementById('job-description-file-input');
        jobDescriptionFileInput?.click();
    };

    const handleCVFileInput = (e) => {
        setCVDescription(e.target.files[0]);
    };

    const handleCVUpload = () => {
        const cvFileInput = document.getElementById('cv-file-input');
        cvFileInput?.click();
    };

    return <Page id={'landing'} showSubHeader={true}>
        <Container>
            <UploadButtonsContainer>
                <UploadButton onClick={handleJobDescriptionUpload}>Upload Job Description</UploadButton>
                <UploadButton onClick={handleCVUpload}>Upload Candidate CV</UploadButton>
            </UploadButtonsContainer>
            <input type="file" id="job-description-file-input" onChange={handleJobDescriptionFileInput} accept=".txt,.pdf" style={{ display: 'none' }} />
            <input type="file" id="cv-file-input" onChange={handleCVFileInput} accept=".txt,.pdf" style={{ display: 'none' }} />
            <p>
                <FormattedMessage defaultMessage={'Hello, welcome to the interview?'}
                    description="A friendly message that appears at the start of new interview sessions" />
            </p>
            {!openAIApiKey && !isProxySupported() && (
                <MantineButton size="xs" variant="light" compact onClick={onConnectButtonClick}>
                    <FormattedMessage defaultMessage={'Connect your OpenAI account to get started'} />
                </MantineButton>
            )}
        </Container>
    </Page>;
}

export default LandingPage;