import { deleteNewInfo } from '@/services/news';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';

const Delete = ({ open, setDeleteVisible, actionRef, currentNew }: any) => {
  const handleDelete = async () => {
    const success = await deleteNewInfo({ momentId: currentNew });
    if (success) {
      setDeleteVisible(false);
      if (actionRef.current) {
        actionRef.current.reload();
      }
    }
  };

  const handleCancel = () => {
    setDeleteVisible(false);
  };

  return (
    <Modal
      title={
        <Space>
          <ExclamationCircleOutlined />
          删除动态
        </Space>
      }
      open={open}
      okText="确认"
      okType="danger"
      cancelText="取消"
      centered
      onOk={handleDelete}
      onCancel={handleCancel}
    >
      确定删除这条动态吗？
    </Modal>
  );
};

export default Delete;
