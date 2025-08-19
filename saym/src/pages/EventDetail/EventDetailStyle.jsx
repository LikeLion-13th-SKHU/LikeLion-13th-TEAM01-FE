import styled from 'styled-components';

// 전체 페이지
export const PageContainer = styled.div`
   width: 100%;
   height: 100vh; /* 모바일 브라우저 호환성 ↑ */
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   position: relative;
   padding-top: 75px;
   overflow: hidden; /* 전체 페이지 스크롤 방지, 내부 컨텐츠에서 처리 */
`;

// 콘텐츠 스크롤 영역
export const ContentWrapper = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   overflow-y: auto;
   padding: 25px;
   padding-bottom: 40px;
`;

// --- 상단 (이미지, 제목, 날짜) ---
export const EventHeaderContainer = styled.div`
   display: flex;
   gap: 16px;
   margin-bottom: 16px;
`;

export const EventImagePlaceholder = styled.div`
   width: 100px;
   height: 100px;
   background-color: #f0f0f0;
   border-radius: 8px;
   flex-shrink: 0;
`;

export const EventInfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 4px;
`;

export const TitleWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 8px;
   gap: 8px;
`;

export const EventTitle = styled.h1`
   font-size: 22px;
   font-weight: bold;
   margin: 0;
`;

export const BookmarkWrapper = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
`;

export const EventDate = styled.p`
   font-size: 14px;
   color: #888;
   margin: 4px 0 0;
   padding-top: 40px;
`;

// --- 중간 ---
export const ContentSection = styled.div`
   padding: 16px 0;
   line-height: 1.6;
`;

export const DescriptionText = styled.p`
   margin: 0 0 24px 0;
   font-size: 16px;
   white-space: pre-wrap;
   color: #333;
`;

// 주소 정보 박스
export const AddressInfoBox = styled.div`
   background-color: #f9f9f9;
   border-radius: 8px;
   padding: 20px;
   margin-top: 16px;
   font-size: 15px;
   line-height: 1.7;
   color: #555;

   p {
      margin: 0 0 8px 0;
      padding-left: 5px;
   }

   strong {
      font-weight: 600;
      color: #333;
      margin-right: 8px;
   }
`;

export const AddressTitle = styled.h4`
   display: flex;
   align-items: center;
   gap: 8px;
   font-size: 16px;
   font-weight: 600;
   color: #333;
   margin: 0 0 16px 0;
`;

export const Divider = styled.hr`
   border: none;
   border-top: 1px solid #e0e0e0;
   margin: 0 25px;
`;

// --- 하단 근처 맛집 ---
export const FixedBottomWrapper = styled.div`
   flex-shrink: 0;
   background-color: #ffffff;
   box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
   z-index: 10;
`;

export const NearbySection = styled.div`
   padding: 24px 25px;
`;

export const SectionTitle = styled.h3`
   font-size: 18px;
   font-weight: 600;
   margin: 0 0 23px 5px;
`;

export const PlaceList = styled.div`
   display: flex;
   overflow-x: auto;
   gap: 12px;
   min-width: 0;

   -ms-overflow-style: none;
   scrollbar-width: none;
   &::-webkit-scrollbar {
      display: none;
   }
`;

export const PlaceCard = styled.div`
   width: 105px;
   height: 105px;
   background-color: #f0f0f0;
   border-radius: 8px;
   flex-shrink: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 14px;
`;
