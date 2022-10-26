import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
  padding: 3px 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.20);
  width: 85%;
  height: 50px;
  border-radius: 50px;
  padding: 8px 15px;
  font-size: 18px;
  color: #fff;
`;

export const SearchButtom = styled.TouchableOpacity`
  width: 15%;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  padding-left: 14px;
  padding-right: 14px;
`;

export const BannerButtom = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height: 550px;
  border-radius: 10px;
  margin: 0 10px;
`;

export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;
