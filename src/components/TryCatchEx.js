export const TryCatchEx = () => {

    try {
        // Code that may throw an exception
        throw new Error('Something went wrong');
        //or console.log("Try block: Code to run");

        // [Optional] If you have a loop or switch, you might use break; here

      } catch (exceptionVar) {
        // Code to handle the exception
        console.log('Caught an exception:', exceptionVar.message);
        //OR console.error("Catch block: Code to run if an exception occurs", exceptionVar);

        // [Optional] If you have a loop or switch, you might use break; here
        
      } finally {
        // Code that will always run
        console.log('This will always execute, whether an exception occurred or not.');

        // [Optional] If you have a loop or switch, you might use break; here
        
    }
    
    //console output :
/*     
        Caught an exception: Something went wrong
        TryCatchEx.js:11 This will always execute, whether an exception occurred or not.
        TryCatchEx.js:8 Caught an exception: Something went wrong
        TryCatchEx.js:11 This will always execute, whether an exception occurred or not.
*/
    
    
    return <div>
        <h3>Try...catch</h3>
    </div>
}