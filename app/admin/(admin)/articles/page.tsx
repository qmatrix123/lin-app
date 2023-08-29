'use client'
import { useEffect, useState } from 'react'
import { Card, Form, Table, Input, Button, Modal, Space, Popconfirm } from 'antd'
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

type Article = {
    id: string,
    title: string,
    desc: string
}

function ArticlePage() {
    const [open, setOpen] = useState(false)
    const [list, setList] = useState<Article[]>([])
    const [myForm] = Form.useForm()

    const [query, setQuery] = useState({
        page: 1,
        per: 10
    })

    const [currentId, setCurrentId] = useState('') // 使用当前ID变量区分是新增，还是修改

    const [total, setTotal] = useState(0)

    // 监听查询条件的改变
    useEffect(() => {
        fetch(`/api/admin/articles?page=${query.page}&per=${query.per}`)
            .then(res => res.json())
            .then(res => {
                setList(res.data.list)
                setTotal(res.data.total)
            })
    }, [query])

    useEffect(() => {
        if (!open) {
            setCurrentId('')
        }
    }, [open])

    return (
        <Card title='文章管理' extra={
            <>
                <Button icon={<PlusOutlined />} type='primary' onClick={() => setOpen(true)} />
            </>
        }>
            <Form layout='inline'>
                <Form.Item label='标题'>
                    <Input placeholder='请输入关键词' />
                </Form.Item>
                <Form.Item>
                    <Button icon={<SearchOutlined />} type='primary' />
                </Form.Item>
            </Form>
            <Table className='mt-2'
                dataSource={list}
                rowKey="id"
                pagination={{
                    total: total,
                    onChange(page) {
                        setQuery({
                            page,
                            per: 10
                        })
                    }
                }}
                columns={[
                    {
                        title: '序号',
                        width: 80,
                        render(v, r, i) { return i + 1 }
                    }, {
                        title: '标题',
                        dataIndex: 'title'
                    }, {
                        title: '简介',
                        dataIndex: 'desc'
                    }, {
                        title: '操作',
                        render(v, r) {
                            return (
                                <Space>
                                    <Button size='small' icon={<EditOutlined />} type='primary' onClick={() => {
                                        setOpen(true)
                                        setCurrentId(r.id)
                                        myForm.setFieldsValue(r)
                                    }}></Button>
                                    <Popconfirm title='是否确认删除' onConfirm={async () => {
                                        await fetch('/api/admin/articles/' + r.id, {
                                            method: 'DELETE'
                                        }).then(res => res.json())

                                        setQuery({})
                                    }}>
                                        <Button
                                            size='small'
                                            icon={<DeleteOutlined />}
                                            type='primary'
                                            danger></Button>
                                    </Popconfirm>

                                </Space>)
                        }
                    }
                ]} />
            <Modal
                title='编辑'
                open={open}
                destroyOnClose={true} // 关闭窗口后销毁
                maskClosable={false} // 点击空白区域不关闭
                onCancel={() => setOpen(false)}
                onOk={() => {
                    myForm.submit();
                }}>
                <Form
                    preserve={false} // 配合Modal结合使用destroyOnClose， 否则不会销毁
                    layout='vertical'
                    form={myForm}
                    onFinish={async (v) => {
                        console.log(v)

                        if (currentId) {
                            // 修改
                            await fetch('/api/admin/articles/' + currentId, {
                                method: 'PUT',
                                body: JSON.stringify(v)
                            }).then(res => res.json())
                        } else {
                            // 新增
                            await fetch('/api/admin/articles', {
                                method: 'POST',
                                body: JSON.stringify(v)
                            }).then(res => res.json())
                        }

                        setOpen(false)
                        setQuery({}) // 改变query触发数据获取
                    }}>
                    <Form.Item label='标题' name="title" rules={[{
                        required: true,
                        message: '标题不能为空'
                    }]}>
                        <Input placeholder='请输入名字' />
                    </Form.Item>
                    <Form.Item label='简介' name="desc">
                        <Input.TextArea placeholder='请输入简介' />
                    </Form.Item>
                </Form>
            </Modal>
        </Card >
    )
}

export default ArticlePage