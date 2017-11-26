import moment from 'moment';

export default [
    {
        title: "A Reddit Post",
        comments: 0,
        submitted: moment()
    },
    {
        title: "Check this out",
        comments: 2,
        submitted: moment().subtract(1, 'minute')
    },
    {
        title: "Create React App",
        comments: 25,
        submitted: moment().subtract(20, 'minute')
    },
    {
        title: "Java Script",
        comments: 36,
        submitted: moment().subtract(1, 'day')
    }
];