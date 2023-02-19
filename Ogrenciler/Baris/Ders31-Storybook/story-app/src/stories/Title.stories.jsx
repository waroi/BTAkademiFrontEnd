import Title from "../components/Title";

export default {
  title: "Araçlarım/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Başlık small",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  text: "Başlık Medium",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Başlık large",
};

export const withClick = Template.bind({});
withClick.args = {
  size: "large",
  text: "Başlık onClick",
  onClick: () => {
    alert("TIKLANDI");
  },
};
