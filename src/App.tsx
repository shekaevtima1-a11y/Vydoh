import { ConfigProvider } from 'antd';
import { vydohTheme } from './theme';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <ConfigProvider theme={vydohTheme}>
      <HomePage />
    </ConfigProvider>
  );
}


export default App;

