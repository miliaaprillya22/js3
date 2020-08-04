let getmont = (callback)=>{
    setTimeout(()=>{
        let error = false ;
        let month =['January','febuary','March','April','May','Juni','july','Augustus','September','October','november','demsember']
        if(error){
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    },4000)
}

showMonths = (err, dataMonths) => {
    if (dataMonths != null) {
        const show = dataMonths
        show.map((item) => {
            console.log(item)
        })
    } else {
        console.log(err.message)
    }
}

getmont(showMonths)



