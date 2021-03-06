import { TextArea, Typograpy } from '@components/Common';
import { playerMatchingState } from '@recoil/matching/atoms';
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import * as Styled from './SecondStepStyle';
import { PageLayout } from '@components/Common/Layout';
import useApplyMatching from '@hooks/matching/useApplyMatching';

const SecondStep = () => {
  const [content, setContent] = useState('');
  const playerMatching = useRecoilValue(playerMatchingState);

  const handleIntroductionContent = (value: string) => {
    setContent(value);
  };

  const applyMatching = useApplyMatching(playerMatching.scheduleId);

  const handleNextButtonClick = () => {
    const payload = { scheduleId: playerMatching.scheduleId, content: content };
    applyMatching.mutate(payload);
  };
  const [isFocused, setIsFocused] = useState(false);

  const resizeViewportEvent = () => {
    window.visualViewport.addEventListener('resize', () => {
      if (window.visualViewport.height < 500) {
        //키보드가 열린 상태라고 판단
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    });
  };

  useEffect(() => {
    resizeViewportEvent();
    return () => {
      window.visualViewport.removeEventListener('resize', resizeViewportEvent);
    };
  }, [window.visualViewport.height]);

  return (
    <>
      <PageLayout isSpacing>
        <Styled.TextWrapper>
          <Typograpy variant="subtitle-2">소개 작성</Typograpy>
          <Typograpy variant="body-2" textColor="gray8F">
            간단한 소개와 궁금한 내용을 적어주세요.
          </Typograpy>
        </Styled.TextWrapper>
        <TextArea value={content} maxLength={500} _onInputEntered={handleIntroductionContent} />
      </PageLayout>
      <Styled.ButtonWrapper isFocused={isFocused}>
        <Styled.AlertText>
          <Typograpy variant="body-2" textColor="primary">
            한번 신청한 매칭은 취소나 변경이 불가능해요.
          </Typograpy>
          <Typograpy variant="body-2" textColor="primary">
            신중하게 선택해주세요.
          </Typograpy>
        </Styled.AlertText>

        <Styled.MatchingButton _onClick={handleNextButtonClick} disabled={content.length === 0}>
          매칭 신청 완료하기
        </Styled.MatchingButton>
      </Styled.ButtonWrapper>
    </>
  );
};

export default SecondStep;
