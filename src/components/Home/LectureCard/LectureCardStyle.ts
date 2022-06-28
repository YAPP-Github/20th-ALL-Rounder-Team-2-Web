import styled, { css } from 'styled-components';
import { Typograpy } from '@components/Common';

export const LectureCardContainer = styled.li`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      display: flex;
      padding-bottom: 1.4rem;
      border-bottom: 1px solid ${color.gray['EF']};
    `;
  }}
`;

export const LectureImageWrapper = styled.div`
  margin-right: 1.8rem;
`;

export const LectureInfoWrapper = styled.div``;

export const LectureTopic = styled(Typograpy)`
  margin-bottom: 0.4rem;
`;

export const LectureCoachName = styled(Typograpy)`
  margin-bottom: 2.4rem;
`;