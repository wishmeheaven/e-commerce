import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    mediaContainer: {
        height: 200, // set a fixed height for the container
        width: '100%', // set a fixed width for the container
        overflow: 'hidden', // hide any overflow
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        maxHeight: '100%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textContainer: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "3", // Limit the text to 3 lines
        "-webkit-box-orient": "vertical",
    },
}));