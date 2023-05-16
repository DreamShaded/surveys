import { Layout, Space } from 'antd'

const { Header, Footer, Content } = Layout

const resetyStyle: React.CSSProperties = {
  backgroundColor: 'white',
}

export default function Index(): JSX.Element {
  return (
    <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={resetyStyle}>Header</Header>
        <Content style={resetyStyle}>Content</Content>
        <Footer style={resetyStyle}>Footer</Footer>
      </Layout>
    </Space>
  )
}
