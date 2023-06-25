import { Button, Form, Input, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import axios from 'axios'
import { createNewAnimal } from './api/ApiCreate'
import { getAllList } from '../HomePage/api/ApiHomePage'

function Create() {

    const [tenLoai, setTenLoai] = useState("")
    const [tenKhoaHoc, setTenKhoaHoc] = useState("")

    const [tenTacGia, setTenTacGia] = useState("")

    const [tenDiaPhuong, setTenDiaPhuong] = useState("")

    const [nguonDuLieu, setNguonDuLieu] = useState("")

    const handleCreate = async () => {
        const data = {
            ten: tenLoai,
            ten_khoa_hoc: tenKhoaHoc,
            ten_tac_gia: tenTacGia,
            ten_dia_phuong: tenDiaPhuong,
            nguon_du_lieu: nguonDuLieu
        }
        console.log("data", data);
        try {
            let response = await createNewAnimal(data)
            if (response) {
                await getAllList()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Space direction='vertical' size={5}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <ArrowLeftOutlined style={{ fontSize: '24px', color: "#da2a1c", marginTop: "12px" }} />
                <Typography.Title level={3}>THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP,QUÝ,HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</Typography.Title>
            </div>
            <Form direction='vertical' size={5} style={{ width: "70%" }} onFinish={handleCreate} >
                <Typography.Title level={4}>I.Thông tin chung về loài</Typography.Title>
                <Form.Item
                    label="Tên"
                    name={"ten"}
                    rules={[
                        {
                            required: true,

                            message: "Bạn cần nhập tên loài!"
                        }
                    ]}>
                    <Input
                        placeholder='Tên'
                        onChange={(e) => setTenLoai(e.target.value)}

                    />
                </Form.Item>
                <Space style={{ width: "100%" }}>
                    <Form.Item
                        label="Tên Khoa Học"
                        name='ten_khoa_hoc'

                        rules={[
                            {
                                required: true,
                                message: "Bạn cần nhập tên khoa học!"
                            }
                        ]}
                    >
                        <Input
                            placeholder='Tên khoa học'
                            onChange={(e) => setTenKhoaHoc(e.target.value)}

                        />
                    </Form.Item>
                    <Form.Item
                        label="Tên tác giả "
                        name='ten_tac_gia'

                    >
                        <Input

                            placeholder='Tên tác giả'
                            onChange={(e) => setTenTacGia(e.target.value)}

                        />
                    </Form.Item>
                </Space>
                <Form.Item
                    label="Tên Địa Phương"
                    name={"ten_dia_phuong"}
                >
                    <Input
                        placeholder='Tên Địa Phương'
                        onChange={(e) => setTenDiaPhuong(e.target.value)}

                    />
                </Form.Item>
                <Form.Item
                    label="Nguồn dữ liệu"
                    name={"nguon_du_lieu"}
                >
                    <Input

                        placeholder='Nguồn dữ liệu'
                        onChange={(e) => setNguonDuLieu(e.target.value)}


                    />
                </Form.Item>
                <Button type='primary' htmlType='submit' danger>Thêm Mới</Button>
            </Form>
        </Space>
    )
}

export default Create