import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './EventDetailStyle';
import { FaBookmark, FaRegBookmark, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../../components/Header/Header_ customer/Header_ customer';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

// --- Mock 데이터 정의 ---
const mockEventDetail = {
   eventId: 1,
   eventName: '행사 1',
   eventStartDate: '2025-07-31',
   eventEndDate: '2025-09-25',
   pictureUrl: null,
   content:
      '여기에 API에서 받아올 행사의 자세한 설명이 들어갑니다.\n\n여러 줄로 구성될 수 있으며, 실제 데이터처럼 보이도록 충분한 텍스트를 넣어 테스트합니다.',
   addless: '서울특별시 구로구 연동로 320',
};

const mockRestaurants = [
   { id: 1, name: '맛집 1' },
   { id: 2, name: '맛집 2' },
   { id: 3, name: '맛집 3' },
   { id: 4, name: '맛집 4' },
   { id: 5, name: '맛집 5' },
   { id: 6, name: '맛집 6' },
];

const EventDetail = () => {
   const scrollRef = useHorizontalScroll();
   const { id: eventId } = useParams();

   const [event, setEvent] = useState(null);
   const [restaurants, setRestaurants] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isBookmarked, setIsBookmarked] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            await new Promise((resolve) => setTimeout(resolve, 500)); // 가짜 로딩
            setEvent(mockEventDetail);
            setRestaurants(mockRestaurants);
         } catch (error) {
            console.error('데이터를 불러오는 데 실패했습니다.', error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [eventId]);

   if (loading) return <div>로딩 중...</div>;
   if (!event) return <div>이벤트 정보를 찾을 수 없습니다.</div>;

   return (
      <S.PageContainer>
         <Header />
         <S.ContentWrapper>
            {/* 상단 섹션 */}
            <S.EventHeaderContainer>
               <S.EventImagePlaceholder />
               <S.EventInfoWrapper>
                  <S.TitleWrapper>
                     <S.EventTitle>{event.eventName}</S.EventTitle>
                     <S.BookmarkWrapper
                        onClick={() => setIsBookmarked(!isBookmarked)}
                     >
                        {isBookmarked ? (
                           <FaBookmark size={24} color="#4daeff" />
                        ) : (
                           <FaRegBookmark size={24} color="#4daeff" />
                        )}
                     </S.BookmarkWrapper>
                  </S.TitleWrapper>
                  <S.EventDate>
                     {event.eventStartDate.replaceAll('-', '/')} ~{' '}
                     {event.eventEndDate.replaceAll('-', '/')}
                  </S.EventDate>
               </S.EventInfoWrapper>
            </S.EventHeaderContainer>

            {/* 중간 콘텐츠 섹션 */}
            <S.ContentSection>
               <S.DescriptionText>{event.content}</S.DescriptionText>
            </S.ContentSection>

            {/* 주소 상세 정보 */}
            <S.AddressInfoBox>
               <S.AddressTitle>
                  <FaMapMarkerAlt /> 주소 및 안내
               </S.AddressTitle>
               <p>
                  <strong>주소:</strong> {event.addless}
               </p>
               <p>
                  <strong>주차:</strong> 주차 정보는 없습니다.
               </p>
               <p>
                  <strong>대중교통:</strong> 대중교통 정보는 없습니다.
               </p>
            </S.AddressInfoBox>

            <S.Divider />
         </S.ContentWrapper>

         {/* 하단 고정 영역 */}
         <S.FixedBottomWrapper>
            <S.NearbySection>
               <S.SectionTitle>근처 맛집</S.SectionTitle>
               <S.PlaceList ref={scrollRef}>
                  {restaurants.map((store) => (
                     <S.PlaceCard key={store.id}>{store.name}</S.PlaceCard>
                  ))}
               </S.PlaceList>
            </S.NearbySection>
         </S.FixedBottomWrapper>
      </S.PageContainer>
   );
};

export default EventDetail;
