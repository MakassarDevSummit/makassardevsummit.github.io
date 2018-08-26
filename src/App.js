import React, {Component} from 'react'
import {
  Layout,
  Menu,
  Carousel,
  Icon,
  Row,
  Col,
  List,
  Divider,
  Card,
  Avatar,
} from 'antd'
import './carousel.css'
import logo from './logo.png'

const {Header, Content, Footer} = Layout
const speaker = [
  {
    title: 'Speaker Proposal Title',
    description: 'Description from Speaker / Keynote proposal',
    cover: 'https://image.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147850291.jpg',
  },
]

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
          <div className="logo">
            <a href="/">
              <img src={logo}/>
            </a>
          </div>

          { false && <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          }

        </Header>
        <Content style={{padding: '0 50px', marginTop: 70}}>
          <Carousel vertical autoplay>
            <div><h2><Icon type="compass" /> Lokasi : Makassar</h2></div>
            <div><h2><Icon type="calendar" /> 2018/08/08 WITA</h2></div>
          </Carousel>
          <Divider orientation="left">
            <Icon type="notification" /> Speaker List
          </Divider>
          <List
            grid={{gutter: 16, column: 4}}
            dataSource={speaker}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={item.title}
                  cover={<img alt="example" src={item.cover} />}>
                  <Card.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              </List.Item>
            )}
          />
          <Divider>
            <Icon type="star" /> Sponsor List
          </Divider>
          <List
            grid={{gutter: 16, column: 4}}
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={(item) => (
              <Col span={6}>
                <div className="sponsor"> Sponsor </div>
              </Col>
            )}
          />
        </Content>
        <Footer style={{textAlign: 'center'}}>
            Makassar Dev Summit ©2018 Crafted with <Icon type="heart" />
        </Footer>
      </Layout>
    )
  }
}

export default App
