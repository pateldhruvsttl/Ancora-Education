const Style = {
    fundingFuture: { marginTop: '30px' },
    futureCard: {
        height: '100%', display: 'flex', flexDirection: 'column',
        borderRadius: '18px',
        boxShadow: '2px 2px 6px #0000004D'
    },
    cardLable: { fontSize: '0.92rem', color: 'black', fontWeight: '700' },
    futureContent: { flexGrow: 1, textAlign: 'left' },

    fundingType: {
        width: '15%',
        borderRight: '1px solid #BAD4E9',
    },
    addBottomBorder: {
        borderBottom: '1px solid #BAD4E9',
        paddingTop:0,
        paddingBottom:0,
        fontSize : '13.5px'
    },
    evenCell: {
        borderBottom: '1px solid #BAD4E9',
        // backgroundColor: '#f2f9ff',
        fontSize: '0.76rem',
        fontWeight: '400',
    },
    oddCell: {
        borderBottom: '1px solid #BAD4E9',
        fontSize: '0.76rem',
        fontWeight: '400'
    },
    directLoanHeader : {
        fontSize: '0.8rem',
        fontWeight: '500',
        paddingTop:'5px',
        paddingBottom:'5px',
        color:'#2B4574',
    },
    directLoanVal : {
        fontSize: '0.8rem',
        fontWeight: '400',
        paddingTop:0,
        paddingBottom:0,
        color:'#323232',
        lineHeight : '20px',
        // height : '3px',
    },
    dirLoanRiBorder : {
        borderRight : '1px solid #A7A7A7'
    },
    dirLoanHead : {borderBottom : '1px solid #A7A7A7'},
    dirLoanBodyBack : {backgroundColor:'#F7F7F7',},
    financialHeadCell : { backgroundColor:'#d4ebff' },
    financialTable : { minWidth: 650, border: '1px solid #BAD4E9' },
    financialContainer  :{ marginTop: '30px', boxShadow: 'none' },
    youtubeCal : {position:'absolute',bottom:'50%',left:'40%'}
}

export default Style