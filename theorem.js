



module.exports=function(dependencies){
    if(!(dependencies instanceof Array))
        return null
        
        var a=dependencies
        var res = new Array

        for (i=0;i<a.length; i++){
            if(a[i] instanceof Array)
                for (m=0; m<a[i].length;m++){
                    if (a[i][m] instanceof Array)
                        a[a.length]=a[i][m]
                    else
             
                        res.push(a[i][m])
                }
            else
     
            res.push(a[i])
        }

return res
}

