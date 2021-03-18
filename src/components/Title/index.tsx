import styled from 'styled-components/native';

interface Props {
  albums?: boolean;
  search?: boolean;
}
const Title = styled.Text<Props>`
  color: #fff;
  font-size: ${(props) => (props.search ? 35 : 20)}px;
  margin-top: ${(props) => (props.search ? 24 : 8)}px;
  margin-bottom: ${(props) => (props.search ? 20 : 10)}px;
  /* display: ${(props) => (props.YOffSet > 40 ? 'none' : 'flex')}; */
  display: flex;
  align-self: flex-start;
  /* margin: 10px 10px 10px; */
  font-weight: bold;
  z-index: 5;
`;

export default Title;
