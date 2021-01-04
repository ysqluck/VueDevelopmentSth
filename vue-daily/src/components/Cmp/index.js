//vue function component
export default {
    name: "cmp",
    functional: true,
    props: {
        html: {
            type: String,
            rquired: true
        },
        index: {
            type: Number
        }
        //add something props
    },
    render(createElement, context) {
        return createElement(context.props.html, {
            props: {
                index: context.props.index//为子组件传递数据
                // add something props
            }
        })
    }
}