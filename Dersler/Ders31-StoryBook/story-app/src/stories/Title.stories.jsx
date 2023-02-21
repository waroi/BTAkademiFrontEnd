import Title from "../components/Title";

export default {
  title: "Araclarim/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Başlık Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  text: "Başlık Medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Başlık Large",
};

export const withClick = Template.bind({});
withClick.args = {
  size: "large",
  text: "Başlık onClick",
  onClick: () => {
    console.log("Tıklandı");
  },
};
