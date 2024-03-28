import { createCard } from "./card";

export default {
    title: 'Design System/Atoms/card',
};

const Template = ({ label, ...args }) => {
    return createCard({ label, ...args });
}

export const Default = Template.bind({});
Default.args = {
    title: 'Card title',
    description: 'Card description',
};