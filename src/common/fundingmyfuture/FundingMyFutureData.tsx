import MyFutureSubFile from "./MyFutureSubFile";

const cashContribution = {
    heading: `Cash Contribution`,
    content: `Contributing casn toward your tuition and fees can reduce the
    amount of loans needed to pay for school. Please tell us the
    maximum monthly contribution you are able to make toward
    your tuition and fees.`,
    placeholder: `$1,974.00`,
}

const scholarships = {
    heading: `Scholarships`,
    content: `Have you received money from an outside organization to
    help pay for your tuition and fees? If so, please tell us the
    amount of your scholarship and how it will be provided to you
    (i.e., all at once, per term, yearly)`,
    placeholder: '$0.00',
}

const military = {
    heading: `Military`,
    content: `If you believe that you are eligible for funding through the VA
    or another branch of the armed forces please make a
    selection here.`,
    placeholder: 'Select',
}
export const fundingmyFutureData = [
    {
        leftData: 'What is the cost of my program',
    },
    {
        leftData: 'Tution and Fees',
        academicEstimate: '$13,818.00',
        programCost: '$32,242.00'
    },
    {
        leftData: 'What Financial Aid Am I Eligible for?'
    },
    {
        leftData: 'Grants and Other aid',
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
    {
        leftData: 'Pell Grant',
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
    {
        leftData: 'What Other Funding Resuource Will I Use',
    },
    {
        leftData: <MyFutureSubFile data={cashContribution} />,
        academicEstimate: '$13,818.00',
        programCost: '$32,242.00',
    },
    {
        leftData: <MyFutureSubFile data={scholarships} />,
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
    {
        leftData: <MyFutureSubFile data={military} />,
    },
    {
        leftData:'Tuition and Fees Remaining',
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
    {
        leftData:'What Should I Borrow?',
        // academicEstimate: '$0.00',
        // programCost: '$0.00'
    },
    {
        leftData:'All awards are estimated and subject 0 change based upon a student efgbilty for disbursement.',
        // academicEstimate: '$0.00',
        // programCost: '$0.00'
    }
]


