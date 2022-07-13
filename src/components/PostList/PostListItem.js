import styled from "styled-components";

const PostListItemBlock = styled.div`
  width: 100%;
  height: auto;
  margin: 10px auto;
  border-bottom: 1px solid #bcbcbc;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 10px;
`;

const LeftBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const RightBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.div`
  width: 100%;
  height: 40%;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const Date = styled.div`
  width: 100%;
  height: 20%;
  font-size: 16px;
  margin-left: 10px;
`;

const Place = styled.div`
  width: 100%;
  height: 20%;
  font-size: 16px;
  margin-left: 10px;
`;

const Participant = styled.div`
  width: 100%;
  height: 30%;
  font-size: 20px;

  display: flex;
  justify-content: flex-end;
`;

const WrittenTime = styled.div`
  width: 100%;
  height: 3 0%;
  font-size: 14px;
  color: #bcbcbc;

  display: flex;
  justify-content: flex-end;
`;

const PostListItem = ({ title, date, place, participant, written_time }) => {
  return (
    <PostListItemBlock>
      <LeftBox>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Place>{place}</Place>
      </LeftBox>
      <RightBox>
        <Participant>{participant}</Participant>
        <WrittenTime>{written_time}</WrittenTime>
      </RightBox>
    </PostListItemBlock>
  );
};

export default PostListItem;
