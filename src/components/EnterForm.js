import { Form, Input, Button } from "antd";

const EnterForm = () => {
  const onUsernameSubmit = (values) => {
    console.log("Success:", values);
  };

  const onUsernameSubmitFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="inline"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onUsernameSubmit}
      onFinishFailed={onUsernameSubmitFailed}
    >
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Start game
        </Button>
      </Form.Item>
    </Form>
  );
};

export { EnterForm };
