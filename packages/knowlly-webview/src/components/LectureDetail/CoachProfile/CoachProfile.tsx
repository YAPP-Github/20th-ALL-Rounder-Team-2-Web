import { Typograpy } from '@components/Common';
import { IUserCoach } from '@/types/profile';

import React from 'react';
import * as Styled from './CoachProfileStyle';

interface ICoachProfileProps {
  coachProfile: IUserCoach;
}
const CoachProfile = ({ coachProfile }: ICoachProfileProps) => {
  const coach = coachProfile.user;
  return (
    <>
      <Styled.CoachProfileContainer>
        <Styled.CoachProfileImg type="coach-profile" src={coach.userImgUrl} />
        <Styled.CoachProfileContentWrapper>
          <Typograpy variant="subtitle-4" textColor="gray44">
            {coach.username}
          </Typograpy>
          <Typograpy variant="body-2" textColor="gray44">
            {coach.intro}
          </Typograpy>
        </Styled.CoachProfileContentWrapper>
      </Styled.CoachProfileContainer>
      <Styled.Line />
    </>
  );
};

export default CoachProfile;
