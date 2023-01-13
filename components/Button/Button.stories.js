import Button from './Button'

export default {
    title:'Button',
    component: Button,
    argTypes: {
        tag: {
            options: ['button','a','nuxt-link'],
            control: { type: 'radio' },
        },
        color: {
            options: ['btn-primary', 'btn-secondary', 'btn-gray', 'btn-dark', 'btn-success'],
            control: { type: 'radio' },
        },
        size: {
            options: ['xs','sm','md','lg'],
            control: { type: 'radio' },
        },
        type: { control: 'text' },
        to: { control: 'text' },
        outline: { control: 'boolean' },
        block: { control: 'boolean' },
    },
};


const Template = (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props">Tıkla</Button>',
});

export const Default = Template.bind({});
Default.args = {
    tag:'button',
    color:"btn-primary",
    size:'md',
    outline:false,
    block:false
};
