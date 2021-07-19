import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';
export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    typeof props.between ? 'space-between' : undefined};
  margin-bottom: ${(props) => props.marginBottom + 'rem'};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === 'number'
        ? props.gap + 'rem'
        : props.gap
        ? '2rem'
        : undefined};
  }
`;
export const FullPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FullPageLoading = () => {
  return (
    <FullPage>
      <Spin size={'large'} />
    </FullPage>
  );
};
export const FullPageError = ({ errormsg }: { errormsg: Error | null }) => {
  return (
    <FullPage>
      <Typography.Text type="danger">{errormsg?.message}</Typography.Text>
    </FullPage>
  );
};
