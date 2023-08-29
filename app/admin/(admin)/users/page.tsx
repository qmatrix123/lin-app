'use client'
import React from 'react'
import PageContainer from '../../_components/PageContainer'
import { Card, Form, Table, Input, Button } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'

function UsersPage() {
    return (
        <Card title='用户信息' extra={
            <>
                <Button icon={<PlusOutlined />} type='primary' />
            </>
        }>
            <Form layout='inline'>
                <Form.Item label='名字'>
                    <Input placeholder='请输入名字' />
                </Form.Item>
                <Form.Item>
                    <Button icon={<SearchOutlined />} type='primary'></Button>
                </Form.Item>
            </Form>
            <Table style={{ marginTop: '8px' }} columns={[{
                title: '序号'
            }, {
                title: '名字'
            }, {
                title: '昵称'
            }, {
                title: '用户名'
            }, {
                title: '头像'
            }, {
                title: '手机号'
            }, {
                title: '年龄'
            }, {
                title: '性别'
            }, {
                title: '操作'
            }
            ]}></Table>
        </Card >
    )
}

export default UsersPage