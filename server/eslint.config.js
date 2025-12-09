export default[
    {
        files:['**/*.js'], //only check .js files in server side
        rules:{
            semi:'error',//tell any semicolons errors
            'no-unused-vars':'warn' //warn if variables are not used
        }

    }
]