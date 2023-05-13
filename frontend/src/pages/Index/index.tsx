import { Layout, Space } from 'antd'
const { Header, Footer, Content } = Layout

export default function Index(): JSX.Element {
  return (
    <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Space>
  )
}
