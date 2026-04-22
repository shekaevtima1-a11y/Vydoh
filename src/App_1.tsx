import { ConfigProvider, Button, Card, Progress, Space, Typography } from 'antd';
import { vydohTheme } from './theme';
import { HomePage } from './pages/HomePage';

const { Title, Text } = Typography;

function App() {
  return (
    <ConfigProvider theme={vydohTheme}>
      <div style={{ padding: 40, background: '#F9F7F5', minHeight: '100vh' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title>Выдох</Title>
          
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
          </Space>

          <Card title="Карточка" style={{ width: 300 }}>
            <Text>Текст внутри карточки</Text>
          </Card>
         <HomePage />
          <Progress percent={70} />
        </Space>
      </div>
    </ConfigProvider>
    
  );
}


export default App;

