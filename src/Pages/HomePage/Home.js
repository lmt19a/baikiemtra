import { Avatar, Button, Input, Space, Table, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { getAllList } from './api/ApiHomePage'
import PostFitlersForm from '../../Components/PostFiltersForm/PostFiltersForm'

function Home() {
    const [dataSoucre, setDataSource] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [newList, setNewList] = useState([])
    useEffect(() => {
        setIsLoading(true)
        getAllList().then(
            res => {
                setDataSource(res)
                setIsLoading(false)
            }
        )
    }, [])

    const handleFiltersChange = (data) => {
        console.log("data", data);
        // console.log(searchTerm);
        const filtered = dataSoucre.filter(item => item.ten_khoa_hoc.includes(data))
        setSearchTerm(data)
        setNewList(filtered)
        console.log('list:', filtered);
    }
    return (
        <div style={{ margin: "0 20px" }}>
            <Space style={{ width: "100%" }} direction='vertical' size={20}>
                <Space>
                    <Avatar />
                    <Typography.Title>Loài nguy cấp quý hiếm</Typography.Title>
                </Space>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Input.Search
                        style={{ width: "40%" }}
                        prefix={<SearchOutlined />}
                        value={searchTerm}
                        allowClear
                        enterButton
                        placeholder='Tìm kiếm'
                        onChange={(e) => { handleFiltersChange(e.target.value) }}
                    />
                    {/* <PostFitlersForm
                        onSubmit={handleFiltersChange}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    /> */}
                    <Button type='primary' danger>+ Thêm Mới</Button>
                </div>
                <Table

                    columns={[
                        {
                            title: "ID",
                            dataIndex: "id",
                            key: "id"

                        },
                        {
                            title: "Tên Khoa Học",
                            dataIndex: "ten_khoa_hoc"
                        },
                        {
                            title: "Giới",
                            dataIndex: ["kingdom", "ten"],
                            key: "kingdom.ten"
                        },
                        {
                            title: "Ngành",
                            dataIndex: ["phylumn", "ten"],
                            key: "phylumn.ten"
                        },
                        {
                            title: "Lớp",
                            dataIndex: ["class", "ten"],
                            key: "class.ten"
                        },
                        {
                            title: "Bộ",
                            dataIndex: ["order", "ten"],
                            key: "order.ten"
                        },
                        {
                            title: "Họ",
                            dataIndex: ["family", "ten"],
                            key: "family.ten"
                        }

                    ]}
                    loading={isloading}
                    dataSource={newList.length > 0 ? newList : dataSoucre}
                    pagination={{
                        pageSize: 8
                    }}
                >


                </Table>
            </Space>
        </div >
    )
}

export default Home