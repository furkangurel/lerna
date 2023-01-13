import Badge from './Badge'

export default {
    title: 'Badge',
    component: Badge,
    decorators: [() => ({ template: '<div style="padding: 5em; margin:auto; margin-top: 5em; position:relative;  background-color:gray; width:200px"><story/></div>' })],
    argTypes: {
        badge: { control: 'text' },
        color:{control:'text'},
        notification: {
            options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
            control: { type: 'radio' },
        },
        customClass: { control: 'text' },
    },
};


const Template = (args, { argTypes }) => ({
    components: { Badge },
    props: Object.keys(argTypes),
    template: '<Badge v-bind="$props">Custom Badge</Badge>',
});

export const Default = Template.bind({});
Default.args = {
  badge:'',
  color:'bg-pink-500',
  notification:'top-right',
};
