import { padding } from "@mui/system"

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
</style>

const Style = {
    tabbarOfEducation: {
        height: '25px',
        width: '25px',
        backgroundColor: 'white',
        border: '1px solid',
        marginRight: '20px',
        marginLeft: '20px',
    },
    cardCal: {
        height: '100%', display: 'flex', flexDirection: 'column',
        borderRadius: '12px',
        boxShadow: '2px 2px 6px #0000004D',
    },
    rightProgramTab: {
        marginRight: '20px'
    },
    businessTab: {
        color: 'white',
        fontSize: '0.9rem',
        marginLeft: '6px',
        fontFamily: `'Roboto', sans-serif`,
        fontWeight: '400'
    },
    programTabMobileCal: {
        backgroundColor: '#2B4574',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '55px',
        padding: '0px 20px 0px 15px',
        marginTop: '20px'

    },
    gridCal: { padding: '25px 0px 40px 0px', borderBottom: '1px solid #0000001F' },
    cardPicture: {
        height: '200px',
    },
    cardContent: {
        flexGrow: 1, textAlign: 'left'
    },
    cardHeader: {
        fontSize: '1.2rem',
        color: '#000000',
        fontWeight: '700',
        fontFamily: `'Roboto', sans-serif`
    },
    cardSubHeader: {
        fontSize: '0.9rem',
        color: '#5AB675',
        fontWeight: '500',
        fontFamily: `'Roboto', sans-serif`
    },
    cardParagraph: {
        fontSize: '0.75rem',
        color: '#555555',
        fontWeight: '300',
        marginTop: '10px',
        fontFamily: `'Roboto', sans-serif`
    },
    hourCost: {
        fontSize: '0.75rem',
        color: '#555555',
        fontWeight: '500',
        fontFamily: `'Roboto', sans-serif`
    },
    cardButtons: {
        padding: 0,
        width: '100%',
        height: '50px',
    },
    planSelect: {
        width: '50%',
        backgroundColor: '#EEF7FF',

    },
    addCardBottomSpace: {
        marginBottom: '-20px'
    },
    addCommonBtn: {
        fontSize: '0.75rem',
        color: '#555555',
        fontWeight: '500',
        borderRadius: '0px',
        height: '100%',
        textTransform: 'capitalize',
        fontFamily: `'Roboto', sans-serif`

    },
    financePlan: {
        width: '50%',
        backgroundColor: '#E1F2FF',
    },
    checkBox: {
        color: '#7B99B4',
        margin: 0,
        padding: 0,
        marginRight: '5px',
    },

    // program tab style
    filterby: {
        color: '#7C90AE',
        fontSize: '0.85rem',
        fontWeight: '400',
        textTransform: 'capitalize',
        marginRight: '15px',
        fontFamily: `'Roboto', sans-serif`
    },
    filterActive: {
        fontSize: '0.85rem',
        fontWeight: '700',
        textTransform: 'capitalize',
        fontFamily: `'Roboto', sans-serif`
    },
    allFilterTxt: {
        marginRight: '5px'
    },
    filterType: {
        color: '#506588',
        fontWeight: '400',
        fontSize: '0.85rem',
        textTransform: 'capitalize',
        fontFamily: `'Roboto', sans-serif`
    },
    filterContainer: {
        width: '100%', bgcolor: '#f3fafe', flexDirection: 'row', display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 0px 0px 0px',
        borderBottom: '1px solid #e8eef6'
    },
    filterMobileContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '55px',
        padding: '0px 14px 0px 15px',
        // padding: '7px 0px 7px 15px',
    },
    tabIndicatorDesign: {
        fontWeight: '800',
        height: '2.5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2B4574"
    },
    leftFilter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightFilter: {
        backgroundColor: 'white',
        border: '1px solid #D0DEEB',
        padding: '3px 5px'
    }

}

export default Style