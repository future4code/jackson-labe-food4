import styled from "styled-components";

export const BaseFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  position: relative;
`;

export const BaseFlexNav = styled(BaseFlex)`
  align-items: center;
  position: relative;
`;

export const BoxInfo = styled.div`
  width: 100vw;
  background-color: #eeeeee;
  height: auto;
`;

export const TitleBlack = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 20px;
`;

export const GrayTitle = styled(TitleBlack)`
  color: #b8b8b8;
  text-align: start;
  margin-left: 1rem;
  margin-bottom: 0;
`;

export const InfoAddress = styled(GrayTitle)`
  color: black;
  margin-bottom: 1rem;
`;

export const RestaurantName = styled(InfoAddress)`
  color: #e86e5a;
  margin-bottom: 0;
`;

export const TaxBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90vw;
  margin-left: 1rem;
`;

export const SubTotal = styled.div`
  width: 89vw;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

export const FreteText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

export const TotalText = styled(FreteText)`
  font-size: 18px;
  color: #e86e5a;
`;

export const SubTotalText = styled(FreteText)`
  font-weight: normal;
`;

export const Payment = styled.div`
  width: 90vw;
  border-bottom: 1px solid black;
  margin-left: 18px;
`;

export const CheckBoxContainer = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const LabelCheckBox = styled.label`
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 334px;
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 20px;
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  border: 0;
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
