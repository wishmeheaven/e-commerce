import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));
// export default styled(() => ({
//     root: {
//         maxWidth: '100%'
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', //16:9
//     },
//     cardActions: {
//         display:'flex',
//         justifyContent: 'flex-end',
//     },
//     cardContent: {
//         display:'flex',
//         justifyContent: 'space-between',
//     },
// }));