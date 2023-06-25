import React, { useEffect, useState } from 'react'
import { Button, Divider, Form, Input, Space, Typography } from 'antd';
import './Login.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate('/home')
        }
    }, [])

    const handleLogin = async (e) => {
        const user = {
            username: userName,
            password: password
        }
        try {

            const res = await axios.post("http://wlp.howizbiz.com/api/web-authenticate",
                user
            )
            if (res) {
                localStorage.setItem("user", JSON.stringify(res.data))
                navigate('/home')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login-container'>
            <Form className='loginForm' onFinish={handleLogin}>
                <Typography.Title style={{ textAlign: "center" }}>Đăng nhập</Typography.Title>
                <Space direction='vertical'>
                    <Form.Item
                        label="Tài Khoản"
                        name={"taikhoan"}
                        rules={[
                            {
                                required: true,

                                message: "Bạn cần nhập tài khoản!"
                            }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder='Tên đăng nhập'
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name={"matkhau"}
                        rules={[{
                            required: true,
                            message: "Bạn cần nhập mật khẩu!"
                        }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder='Mật khẩu'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Button type='primary' htmlType='submit' block>Login</Button>
                    <Divider style={{ borderColor: "black" }}><span style={{ cursor: "pointer" }}>Quên Mật Khẩu</span></Divider>
                </Space>
            </Form>
        </div>
    )
}

export default Login